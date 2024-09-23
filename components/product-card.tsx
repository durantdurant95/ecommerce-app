import Image from "next/image";
import Link from "next/link";
import AddCartButton from "./add-cart-button";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

type Props = {
  name: string;
  price: number;
  imageUrl: string;
  id: number;
  userId: string | undefined;
};

export default function ProductCard({
  name,
  price,
  imageUrl,
  id,
  userId,
}: Props) {
  return (
    <Card className="group relative overflow-hidden transition-all">
      <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100">
        <AddCartButton id={id.toString()} name={name} userId={userId} />
      </div>
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
