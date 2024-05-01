import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  name: string;
  description: string;
  price: string;
};

export default function ProductCard({ name, description, price }: Props) {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>{price}</p>
      </CardFooter>
    </Card>
  );
}
