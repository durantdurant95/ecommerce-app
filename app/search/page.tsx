import ProductCard from "@/components/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import { getProductsByName } from "@/drizzle/db";
import { Suspense } from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    product?: string;
  };
}) {
  const products = await getProductsByName(searchParams?.product);
  return (
    <main>
      <section className="flex gap-4">
        {/* TODO: Get the Suspense size right */}
        <Suspense fallback={<Skeleton className="h-20 w-20" />}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </Suspense>
      </section>
    </main>
  );
}
