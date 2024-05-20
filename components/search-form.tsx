"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Skeleton } from "./ui/skeleton";

export default function SearchForm() {
  const searchParams = useSearchParams();
  return (
    <form
      action="/products/search"
      className="hidden gap-4 tracking-normal lg:flex"
    >
      <Suspense fallback={<Skeleton className="h-10 w-80" />}>
        <Input
          className="w-80"
          type="text"
          name="product"
          placeholder="Search for cool stuff!"
          defaultValue={searchParams.get("product") ?? ""}
        />
      </Suspense>
      <Button type="submit">Search</Button>
    </form>
  );
}
