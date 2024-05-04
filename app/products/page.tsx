import ProductCard from "@/components/product-card";
import { getProducts } from "@/drizzle/db";

type Props = {};

export default async function ProductsPage({}: Props) {
  const products = await getProducts();

  return (
    <main className="pl-60">
      <section id="cool" className="scroll-mt-36">
        <h1>Cool Stuff</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
