import ProductCard from "@/components/product-card";
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
    <main className="flex gap-4 min-h-screen pl-60">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
        <div>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
