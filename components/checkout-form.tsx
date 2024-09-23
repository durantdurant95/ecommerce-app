"use client";
import { clearCart } from "@/db/actions";
import { Trash2, WalletCards } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "./ui/button";

type Props = {
  id: string;
};

export default function CheckoutForm({ id }: Props) {
  const router = useRouter();

  const handleClearCart = async () => {
    const clearCartPromise = clearCart(id);

    toast.promise(clearCartPromise, {
      loading: "Clearing your cart...",
      success: "Your cart has been cleared",
      error: () => {
        return "An error happened while clearing your cart";
      },
    });
  };
  return (
    <>
      <Button
        onClick={() => router.push("/checkout")}
        className="mt-6 w-full"
        size="lg"
      >
        <WalletCards className="mr-2 h-5 w-5" />
        Proceed to Checkout
      </Button>
      <Button
        onClick={handleClearCart}
        className="mt-6 w-full"
        size="lg"
        variant="secondary"
      >
        <Trash2 className="mr-2 h-5 w-5" />
        Clear your cart
      </Button>
    </>
  );
}
