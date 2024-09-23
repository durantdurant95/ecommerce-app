"use client";
import { addProductToCart } from "@/db/actions";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = { id: string; name: string; userId: string | undefined };

export default function AddCartButton({ id, name, userId }: Props) {
  const handleAddToCart = async () => {
    if (!userId) {
      toast.error("You must login to add a product to the cart");
      return;
    }
    const addToCartPromise = addProductToCart(userId, id);

    toast.promise(addToCartPromise, {
      loading: "Adding product to cart...",
      success: `${name} added to your cart`,
      error: () => {
        return "Error adding product to your cart";
      },
    });
  };
  return (
    <Button className="items-center justify-center" onClick={handleAddToCart}>
      <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
    </Button>
  );
}
