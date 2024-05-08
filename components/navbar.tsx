import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ShoppingCart, Waves } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <nav className="text-2xl tracking-tighter font-medium w-full shadow sticky top-0 z-50 bg-white">
      <div className="flex justify-between max-w-[2000px] mx-auto items-center p-6 md:p-8  lg:p-12">
        <Link href="/" className="gap-1 flex items-center">
          <Waves size={30} />
          ShopWave
        </Link>
        <form action="/products/search" className="md:flex gap-4 hidden">
          <Input type="text" name="product" placeholder="Search" />
          <Button type="submit" value="Search">
            Search
          </Button>
        </form>
        <div className="flex gap-8 items-center">
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
      </div>
    </nav>
  );
}
