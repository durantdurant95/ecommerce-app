import ProductCard from "@/components/product-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { getProducts } from "@/drizzle/db";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <main className="p-4">
      <section>
        <h1 className="text-2xl font-bold pl-12 pb-1">Top Picks</h1>
        <Carousel
          className="mx-12"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                key={product.id}
              >
                <ProductCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </main>
  );
}
