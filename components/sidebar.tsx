import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-60 fixed top-28 pl-4">
      <Link href="/products#Clothing&Accessories">Clothing & Accessories</Link>
      <Link href="/products#Gadgets&Gizmos">Gadgets & Gizmos</Link>
      <Link href="/products#Home&Living">Home & Living</Link>
      <Link href="/products#Books&Beyond">Books & Beyond</Link>
      <Link href="/products#Beauty&Bliss">Beauty & Bliss</Link>
      <Link href="/products#OutdoorEssentials">Outdoor Essentials</Link>
      <Link href="/products#PetParadise">Pet Paradise</Link>
    </div>
  );
}
