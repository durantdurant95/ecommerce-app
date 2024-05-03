import ProductCard from "@/components/product-card";
import { Skeleton } from "@/components/ui/skeleton";
import { getProductsByName } from "@/drizzle/db";

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
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
        <Skeleton className="h-2" />
      </section>
    </main>
  );
}
