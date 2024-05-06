import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

type Props = {
  name: string;
  price: string;
  imageUrl: string;
};

export default function ProductCard({ name, price, imageUrl }: Props) {
  return (
    <Card className="relative group overflow-hidden">
      <CardContent className="relative aspect-square">
        <Image fill src={imageUrl} alt={name} />
      </CardContent>
      <CardFooter className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 transition-transform bg-white pt-4 w-full">
        <div className="flex justify-between align-middle w-full">
          <CardTitle>{name}</CardTitle>
          <span className="font-semibold">$ {price}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
