import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

type Props = {
  name: string;
  price: number;
  imageUrl: string;
};

export default function ProductCard({ name, price, imageUrl }: Props) {
  return (
    <Card className="group relative overflow-hidden transition-all">
      <Button className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100">
        Buy Now
      </Button>
      <CardContent className="relative aspect-square">
        <Image
          fill
          src={imageUrl}
          alt={name}
          className="transition-opacity group-hover:opacity-80"
        />
      </CardContent>
      <CardFooter className="absolute bottom-0 w-full translate-y-full transform bg-accent pt-4 transition-transform group-hover:translate-y-0">
        <div className="flex w-full justify-between align-middle">
          <CardTitle>{name}</CardTitle>
          <span className="font-semibold">$ {price}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
