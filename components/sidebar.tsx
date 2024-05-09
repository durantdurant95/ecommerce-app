import {
  Bone,
  Brush,
  Lamp,
  LibraryBig,
  PocketKnife,
  Shirt,
  TentTree,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-40 flex w-80 flex-col gap-10 pl-8 text-lg font-medium">
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
      <Link href="/products#Books&Beyond" className="flex items-center gap-2">
        <LibraryBig />
        Books & Beyond
      </Link>
      <Link href="/products#Beauty&Bliss" className="flex items-center gap-2">
        <Brush />
        Beauty & Bliss
      </Link>
      <Link
        href="/products#OutdoorEssentials"
        className="flex items-center gap-2"
      >
        <TentTree />
        Outdoor Essentials
      </Link>
      <Link href="/products#PetParadise" className="flex items-center gap-2">
        <Bone />
        Pet Paradise
      </Link>
    </div>
  );
}
