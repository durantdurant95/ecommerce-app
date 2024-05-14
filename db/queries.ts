import { Tables } from "@/db/types";
import { createClient } from "@/utils/supabase/server";

export async function getAllProducts(): Promise<Tables<"products">[]> {
  const supabase = createClient();
  const { data, error } = await supabase.from("products").select("*");
  if (error) {
    throw error;
  }
  return data;
}

export async function getProductsByName(
  name: string = "",
): Promise<Tables<"products">[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .ilike("name", `%${name}%`);
  if (error) {
    throw error;
  }
  return data;
}

// Fetch 5 random products
export async function getRandomProducts(): Promise<Tables<"products">[]> {
  const supabase = createClient();

  // Fetch all product IDs
  const { data: allProducts, error: allProductsError } = await supabase
    .from("products")
    .select("id");
  if (allProductsError) {
    throw allProductsError;
  }

  // Select a random subset of IDs
  const randomProductIds = allProducts
    .sort(() => 0.5 - Math.random())
    .slice(0, 5)
    .map((product) => product.id);

  // Fetch the random products
  const { data: randomProducts, error: randomProductsError } = await supabase
    .from("products")
    .select("*")
    .in("id", randomProductIds);
  if (randomProductsError) {
    throw randomProductsError;
  }

  return randomProducts;
}
