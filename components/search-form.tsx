import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function SearchForm() {
  return (
    <form
      action="/products/search"
      className="hidden gap-4 tracking-normal lg:flex"
    >
      <Input
        type="text"
        name="product"
        placeholder="Search for cool stuff!"
        className="w-80"
      />
      <Button type="submit" value="Search">
        Search
      </Button>
    </form>
  );
}
