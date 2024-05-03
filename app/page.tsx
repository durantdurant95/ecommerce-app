import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import { getProducts } from "@/drizzle/db";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  const products = await getProducts();
  return (
    <main className="p-4 flex flex-col gap-20">
      {/* Hero section */}
      <section className="w-full py-12">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="space-y-6 pb-6">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-tight">
                ShopWave: Because who needs savings anyway?
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Prepare to lose track of time and money. Enter with caution...
                and a credit card. You will leave with everything but your
                self-control!
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="/shop">
                <Button>Shop Now</Button>
              </Link>
              <Link href="/search">
                <Button variant="outline">Search Items</Button>
              </Link>
            </div>
          </div>
          <Image
            alt="Product Image"
            className="mx-auto aspect-square overflow-hidden rounded-lg object-cover border"
            height={600}
            src="/hero-image.jpg"
            width={600}
          />
        </div>
      </section>
      {/* Carousel section */}
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
                {/* TODO: get the Suspense size right */}
                <Suspense fallback={<Skeleton className="h-full" />}>
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    price={product.price}
                  />
                </Suspense>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
      <section>
        <h1 className="text-2xl font-bold pl-12 pb-1">New Arrivals</h1>
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
