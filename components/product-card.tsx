import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type Props = {
  name: string;
  price: number;
  imageUrl: string;
  id: number;
};

export default function ProductCard({ name, price, imageUrl, id }: Props) {
  return (
    <Card className="group relative overflow-hidden transition-all">
      <CardContent className="relative aspect-square p-0">
        <Skeleton className="h-full w-full" />
        <Image fill src={imageUrl} alt={name} />
      </CardContent>
      <CardFooter className="absolute bottom-0 flex w-full translate-y-full transform justify-between bg-accent py-3 transition-transform group-hover:translate-y-0">
        <div>
          <CardTitle>{name}</CardTitle>
          <span className="pt-2 font-semibold">$ {price}</span>
        </div>
        <Link href={`/products/${id}`} className="font-semibold">
          See details
        </Link>
      </CardFooter>
    </Card>
  );
}
