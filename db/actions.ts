"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { getProductById } from "./queries";

// This function is used to authenticate a user
export async function login(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return redirect("/auth?message=Could not authenticate user");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

// Function to create a cart for a user if it doesn't exist
export async function getOrCreateCart(userId: string) {
  const supabase = createClient();

  // Check if the user already has a cart
  let { data: cart, error } = await supabase
    .from("cart")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error && error.code !== "PGRST116") {
    throw new Error(error.message);
  }

  // If the cart doesn't exist, create one
  if (!cart) {
    const { data, error: createError } = await supabase
      .from("cart")
      .insert([{ user_id: userId }])
      .single();

    if (createError) {
      throw new Error(createError.message);
    }

    cart = data;
  }

  return cart;
}

// This function is used to create a new user account
export async function signup(formData: FormData) {
  const supabase = createClient();

  // Type-casting here for convenience
  // In practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: user, error } = await supabase.auth.signUp(data);

  if (error) {
    return redirect("/auth?message=Could not create account");
  }

  // Create a cart for the new user
  try {
    if (user.user) {
      await getOrCreateCart(user.user.id);
    } else {
      console.error("User object is null");
      return redirect("/auth?message=Could not create cart");
    }
  } catch (cartError) {
    console.error("Error creating cart:", cartError);
    return redirect("/auth?message=Could not create cart");
  }

  revalidatePath("/", "layout");
  redirect("/auth?message=Check your email to verify your account");
}

// This function is used to log out a user
export async function logout() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/auth?message=You have succesfully logged out");
}

// Function to add a product to the cart
export async function addProductToCart(userId: string, productId: string) {
  const supabase = createClient();
  const cart = await getOrCreateCart(userId);

  // Fetch product details
  const product = getProductById(productId);

  // Check if the product already exists in the cart
  const { data: existingCartItem, error: existingCartItemError } =
    await supabase
      .from("cart_items")
      .select("*")
      .eq("cart_id", cart.id)
      .eq("product_id", productId)
      .single();

  if (existingCartItemError && existingCartItemError.code !== "PGRST116") {
    throw new Error(existingCartItemError.message);
  }

  if (existingCartItem) {
    // If the product already exists, update the quantity
    const { error: updateError } = await supabase
      .from("cart_items")
      .update({ quantity: existingCartItem.quantity + 1 })
      .eq("id", existingCartItem.id);

    if (updateError) {
      throw new Error(updateError.message);
    }
  } else {
    // If the product does not exist, add it to the cart with quantity 1
    const { error: insertError } = await supabase.from("cart_items").insert([
      {
        cart_id: cart.id,
        product_id: productId,
        quantity: 1,
        name: (await product).name,
        description: (await product).description,
        price: (await product).price,
        category_id: (await product).category_id,
        image_url: (await product).image_url,
      },
    ]);

    if (insertError) {
      throw new Error(insertError.message);
    }
  }
}

// Function to remove a product from the cart
export async function removeProductFromCart(userId: string, productId: string) {
  const supabase = createClient();
  const cart = await getOrCreateCart(userId);

  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("cart_id", cart.id)
    .eq("product_id", productId);

  if (error) {
    throw new Error(error.message);
  }
  revalidatePath("/cart");
}

// Function to clear the cart for a user
export async function clearCart(userId: string) {
  const supabase = createClient();
  const cart = await getOrCreateCart(userId);

  const { error } = await supabase
    .from("cart_items")
    .delete()
    .eq("cart_id", cart.id);

  if (error) {
    throw new Error(error.message);
  }
  revalidatePath("/cart");
}
