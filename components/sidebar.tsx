import { Brush, HammerIcon, Lamp, PocketKnife, Shirt } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-32 hidden w-80 flex-col gap-8 text-lg font-medium md:flex lg:pl-4">
      <h2 className="text-3xl font-semibold">Categories</h2>
      <Link
        href="/products#Clothing&Accessories"
        className="flex items-center gap-2"
      >
        <Shirt />
        Clothing & Accessories
      </Link>
      <Link href="/products#Gadgets&Gizmos" className="flex items-center gap-2">
        <PocketKnife />
        Gadgets & Gizmos
      </Link>
      <Link href="/products#Home&Living" className="flex items-center gap-2">
        <Lamp />
        Home & Living
      </Link>
      <Link href="/products#Tools&Hardware" className="flex items-center gap-2">
        <HammerIcon />
        Tools & Hardware
      </Link>
      <Link href="/products#Beauty&Bliss" className="flex items-center gap-2">
        <Brush />
        Beauty & Bliss
      </Link>
    </div>
  );
}
