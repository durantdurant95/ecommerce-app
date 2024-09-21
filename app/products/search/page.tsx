import ProductCard from "@/components/product-card";
import { getProductsByName } from "@/db/queries";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: {
    product?: string;
  };
}) {
  const products = await getProductsByName(searchParams?.product);
  return (
    <div className="py-8 md:pl-80 lg:pr-4">
      {!searchParams?.product ? (
        <h1 className="pt-4 text-2xl font-medium">
          Start searching for products on the search bar above!
        </h1>
      ) : (
        <>
          <h1 className="py-2 text-3xl font-semibold">
            Search results for: &quot;{searchParams?.product}&quot;
          </h1>
          <section className="grid flex-1 grid-cols-1 gap-8 overflow-auto sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
                id={product.id}
              />
            ))}
          </section>
        </>
      )}
    </div>
  );
}
