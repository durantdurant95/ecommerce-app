import { ShoppingCart, Waves } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex text-3xl font-semibold justify-between items-center tracking-tighter p-10">
      <Link href="/" className="gap-1 flex items-center">
        <Waves size={30} />
        ShopWave
      </Link>
      <Link href="/shop">Shop</Link>
      <Link href="/cart">
        <ShoppingCart size={30} />
      </Link>
    </nav>
  );
}
