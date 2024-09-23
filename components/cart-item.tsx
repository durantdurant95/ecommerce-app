"use client";
import { removeProductFromCart } from "@/db/actions";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  userId: string;
  productId: string;
};

export default function CartItem({
  imageUrl,
  name,
  price,
  quantity,
  userId,
  productId,
}: Props) {
  const handleRemoveFromCart = async () => {
    const removeFromCartPromise = removeProductFromCart(userId, productId);

    toast.promise(removeFromCartPromise, {
      loading: "Removing product from cart...",
      success: `${name} removed from your cart.`,
      error: () => {
        return "Error adding product to your cart";
      },
    });
  };
  return (
    <div className="flex w-full items-center space-x-4 rounded-lg border p-4">
      <Image
        src={imageUrl}
        alt={name}
        // fill
        className="h-24 w-24 rounded-md object-cover"
        height={300}
        width={300}
      />
      <div className="flex-grow space-y-1">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="font-medium text-primary">$ {price}</p>
        <p className="font-medium text-primary">Quantity: {quantity}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-semibold">Total: $ {price * quantity}</p>
        <Button
          variant="secondary"
          size="icon"
          type="submit"
          onClick={handleRemoveFromCart}
          className="mt-2"
        >
          <Trash2 className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
