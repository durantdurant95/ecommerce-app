import { Waves } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="z-50 bg-white py-8 shadow-footer">
      <div className="mx-auto flex max-w-[2000px] flex-col justify-between gap-10 px-4 sm:px-8 md:flex-row lg:px-12">
        <div className="flex flex-col items-start md:w-1/3">
          <div className="mb-4 flex items-center">
            <Waves size={30} />
            <span className="ml-2 text-lg font-semibold">ShopWave</span>
          </div>
          <p className="text-sm">
            Keep scrolling, there&apos;s nothing to see here except an empty
            void where your wallet used to be. But hey, at least you&apos;ve got
            cool stuff!
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Shop</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Categories</h4>
          <ul className="flex flex-col space-y-2">
            <Link href="/products#Clothing&Accessories">
              Clothing & Accessories
            </Link>
            <Link href="/products#Gadgets&Gizmos">Gadgets & Gizmos</Link>
            <Link href="/products#Home&Living">Home & Living</Link>
            <Link href="/products#Tools&Hardware">Tools & Hardware</Link>
            <Link href="/products#Beauty&Bliss">Beauty & Bliss</Link>
            <Link href="/products#OutdoorEssentials">Outdoor Essentials</Link>
            <Link href="/products#PetParadise">Pet Paradise</Link>
          </ul>
        </div>
      </div>
    </footer>
  );
}
