import { createClient } from "@/utils/supabase/server";
import { ShoppingCart, Waves } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import AuthButton from "./auth-button";
import SearchForm from "./search-form";
import { Skeleton } from "./ui/skeleton";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <nav className="sticky top-0 z-50 w-full bg-white text-2xl font-medium tracking-tighter shadow">
      <div className="mx-auto flex max-w-[2000px] items-center justify-between p-6 md:p-8 lg:px-12">
        <Link href="/" className="flex items-center gap-1">
          <Waves size={30} />
          ShopWave
        </Link>
        <Suspense fallback={<Skeleton className="h-10 w-80" />}>
          <SearchForm />
        </Suspense>
        <div className="flex items-center gap-8">
          {user && (
            <Link href="/cart">
              <ShoppingCart size={30} />
            </Link>
          )}
          <AuthButton />
        </div>
      </div>
    </nav>
  );
}
