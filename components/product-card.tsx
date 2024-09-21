"use client";
import { addProductToCart } from "@/db/actions";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type Props = {
  name: string;
  price: number;
  imageUrl: string;
  id: number;
};

export default function ProductCard({ name, price, imageUrl, id }: Props) {
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
      const addToCartPromise = addProductToCart(user.id, id.toString());

      toast.promise(addToCartPromise, {
        loading: "Adding product to cart...",
        success: () => {
          return `${name} has been added to the cart`;
        },
        error: (err) => {
          return "Error adding product to cart";
        },
      });
    }
  };

  return (
    <Card className="group relative overflow-hidden transition-all">
      <Button
        className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100"
        onClick={handleAddToCart}
      >
        Buy Now
      </Button>
      <CardContent className="relative aspect-square p-0">
        <Skeleton className="h-full w-full" />
        <Image fill src={imageUrl} alt={name} />
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full translate-y-full transform bg-accent pt-4 transition-transform group-hover:translate-y-0">
        <div className="flex w-full justify-between align-middle">
          <CardTitle>{name}</CardTitle>
          <span className="font-semibold">$ {price}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
