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
    <main className="container px-4 md:px-8 lg:px-12">
      {/* Hero section */}
      <section className="pb-24 pt-14">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-4">
            <div className="space-y-6 pb-6">
              <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl md:leading-tight">
                ShopWave: Because who needs savings anyway?
              </h1>
              <p className="max-w-[600px] text-gray-700 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Prepare to lose track of time and money. Enter with caution...
                and a credit card. You will leave with everything but your
                self-control!
              </p>
            </div>
            <div className="flex space-x-4">
              <Link href="/products">
                <Button className="p-6">Shop Now</Button>
              </Link>
              <Link href="/products/search" className="hidden md:flex">
                <Button variant="outline" className="p-6">
                  Search Products
                </Button>
              </Link>
            </div>
          </div>
          <Image
            className="mx-auto overflow-hidden rounded-lg border object-cover"
            alt="Product Image"
            height={1000}
            width={1000}
            src="/hero.jpg"
          />
        </div>
      </section>
      {/* Carousel section */}
      <section className="pb-24">
        <h1 className="pb-2 text-2xl font-bold">Top Picks</h1>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3"
                key={product.id}
              >
                {/* TODO: get the Suspense size right */}
                <Suspense fallback={<Skeleton className="h-full" />}>
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    imageUrl={product.imageUrl}
                  />
                </Suspense>
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
