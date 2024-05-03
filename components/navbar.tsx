import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ShoppingCart, Waves } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <nav className="flex text-2xl font-medium justify-between items-center tracking-tighter p-10">
      <Link href="/" className="gap-1 flex items-center">
        <Waves size={30} />
        ShopWave
      </Link>
      <form action="/search" className="flex gap-2">
        <Input type="text" name="product" placeholder="Search" />
        <Button type="submit" value="Search">
          Search
        </Button>
      </form>
      <div className="flex gap-4 items-center">
        <Link href="/shop">Shop</Link>
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
