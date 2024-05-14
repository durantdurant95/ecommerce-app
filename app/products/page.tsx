import ProductCard from "@/components/product-card";
import { getAllProducts } from "@/db/queries";

export default async function ProductsPage() {
  const products = await getAllProducts();
  return (
    <div className="flex flex-col gap-32 px-1 py-2 md:pl-80 lg:pr-4">
      <section id="Clothing&Accessories" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Clothing & Accessories</h1>
        <div className="grid flex-1 grid-cols-1 gap-8 overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.category_id === 1)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
        </div>
      </section>
      <section id="Gadgets&Gizmos" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Gadgets & Gizmos</h1>

        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.category_id === 2)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
        </div>
      </section>
      <section id="Home&Living" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Home & Living</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.category_id === 3)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
        </div>
      </section>
      <section id="Books&Beyond" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Books & Beyond</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.category_id === 4)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
        </div>
      </section>
      <section id="Beauty&Bliss" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Beauty & Bliss</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.category_id === 5)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
        </div>
      </section>
      <section id="OutdoorEssentials" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Outdoor Essentials</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.category_id === 6)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
        </div>
      </section>
      <section id="PetParadise" className="scroll-mt-36">
        <h1 className="py-2 text-3xl font-semibold">Pet Paradise</h1>
        <div className="grid flex-1 grid-cols-1 gap-8  overflow-auto sm:grid-cols-2 md:grid-cols-3">
          {products
            .filter((product) => product.category_id === 7)
            .map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                price={product.price}
                imageUrl={product.image_url}
              />
            ))}
        </div>
      </section>
    </div>
  );
}
