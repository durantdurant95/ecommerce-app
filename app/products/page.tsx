import ProductCard from "@/components/product-card";
import { getProducts } from "@/drizzle/db";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="pl-60">
      <section id="Clothing&Accessories" className="scroll-mt-36">
        <h1>Clothing & Accessories</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
      <section id="Gadgets&Gizmos" className="scroll-mt-36">
        <h1>Gadgets & Gizmos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
        <h1>Home & Living</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
        <h1>Books & Beyond</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
        <h1>Beauty & Bliss</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
        <h1>Outdoor Essentials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
        <h1>Pet Paradise</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 flex-1 overflow-auto">
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
    </main>
  );
}
