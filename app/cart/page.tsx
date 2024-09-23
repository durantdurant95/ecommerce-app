import CartItem from "@/components/cart-item";
import CheckoutForm from "@/components/checkout-form";
import { getCartItems } from "@/db/queries";
import { createClient } from "@/utils/supabase/server";

export const dynamic = "force-dynamic";

export default async function CartPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="my-auto py-8 text-center">
        <p className="text-2xl font-semibold">
          You need to be logged in to view your cart.
        </p>
        <p className="mt-2">Please log in to continue.</p>
      </div>
    );
  }

  const cartItems = getCartItems(user?.id);
  // calculate the total once I got the cart Items
  const total = (await cartItems).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="mx-auto flex w-full grow flex-col border px-2 pt-4 md:px-6 lg:px-12">
      {(await cartItems).length === 0 ? (
        <div className="my-auto py-8 text-center">
          <p className="text-2xl font-semibold">Your cart is empty</p>
          <p className="mt-2">Add some items to get started!</p>
        </div>
      ) : (
        <div className="gap-4 md:flex">
          <div className="pb-6 md:w-1/2">
            <h1 className="text-3xl font-bold">Your Shopping Cart</h1>
            <div className="flex flex-col gap-4">
              {(await cartItems).map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  imageUrl={item.image_url}
                  price={item.price}
                  quantity={item.quantity}
                  userId={user.id}
                  productId={item.product_id.toString()}
                />
              ))}
            </div>
          </div>
          <div className="pt-8">
            <span className="text-3xl font-semibold">Total: </span>
            <span className="text-3xl font-bold text-primary">$ {total}</span>
            <CheckoutForm id={user.id} />
          </div>
        </div>
      )}
    </div>
  );
}
