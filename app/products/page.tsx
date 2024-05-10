import ProductCard from "@/components/product-card";
import { getProductsByName } from "@/drizzle/db";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: {
    product?: string;
  };
}) {
  const products = await getProductsByName(searchParams?.product);
  return (
    <div className="flex flex-col gap-32 px-1 pt-2 md:pl-80 md:pr-8 lg:pr-12">
      <section id="Clothing&Accessories" className="scroll-mt-28">
        <h1 className="py-2 text-3xl font-semibold">Clothing & Accessories</h1>
        <div className="grid flex-1 grid-cols-1 gap-8 overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.categoryId === 1)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
        </div>
      </section>
      <section id="Gadgets&Gizmos" className="scroll-mt-28">
        <h1 className="py-2 text-3xl font-semibold">Gadgets & Gizmos</h1>

        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.categoryId === 2)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
        </div>
      </section>
      <section id="Home&Living" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Home & Living</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.categoryId === 3)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
        </div>
      </section>
      <section id="Books&Beyond" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Books & Beyond</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.categoryId === 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
        </div>
      </section>
      <section id="Beauty&Bliss" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Beauty & Bliss</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.categoryId === 5)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
        </div>
      </section>
      <section id="OutdoorEssentials" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Outdoor Essentials</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.categoryId === 6)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
        </div>
      </section>
      <section id="PetParadise" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Pet Paradise</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.categoryId === 7)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
