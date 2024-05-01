import ProductCard from "@/components/product-card";
import { getProducts } from "@/drizzle/db";

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <div className="flex gap-4 p-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </main>
  );
}
