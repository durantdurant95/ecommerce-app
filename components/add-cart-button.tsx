"use client";
import { addProductToCart } from "@/db/actions";
import { createClient } from "@/utils/supabase/client";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = { id: string; name: string };

export default function AddCartButton({ id, name }: Props) {
  const supabase = createClient();

  const handleAddToCart = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      toast.error("You must log in to make a purchase");
      return;
    }

    if (user) {
      const addToCartPromise = addProductToCart(user.id, id);

      toast.promise(addToCartPromise, {
        loading: "Adding product to cart...",
        success: () => {
          return `${name} has been added to your cart`;
        },
        error: () => {
          return "Error adding product to your cart";
        },
      });
    }
  };
  return (
    <Button className="items-center justify-center" onClick={handleAddToCart}>
      <ShoppingCart className="mr-2 h-4 w-4" /> Add to cart
    </Button>
  );
}
