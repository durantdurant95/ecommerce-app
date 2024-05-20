"use client";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchForm() {
  const searchParams = useSearchParams();
  return (
    <form
      action="/products/search"
      className="hidden gap-4 tracking-normal lg:flex"
    >
      <Input
        className="w-80"
        type="text"
        name="product"
        placeholder="Search for cool stuff!"
        defaultValue={searchParams.get("product") ?? ""}
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
