import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ShoppingCart, Waves } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex text-2xl font-semibold justify-between items-center tracking-tighter p-10">
      <Link href="/" className="gap-1 flex items-center">
        <Waves size={30} />
        ShopWave
      </Link>
      <Link href="/shop">Shop</Link>
      <div className="flex gap-4 items-center">
        <Link href="/cart">
          <ShoppingCart size={30} />
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
