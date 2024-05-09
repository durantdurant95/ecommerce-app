import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ShoppingCart, Waves } from "lucide-react";
import Link from "next/link";
import SearchForm from "./search-form";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-2xl font-medium tracking-tighter shadow">
      <div className="mx-auto flex max-w-[2000px] items-center justify-between p-6 md:p-8 lg:px-12">
        <Link href="/" className="flex items-center gap-1">
          <Waves size={30} />
          ShopWave
        </Link>
        <SearchForm />
        <div className="flex items-center gap-8">
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
