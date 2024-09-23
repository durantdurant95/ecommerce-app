import { Github } from "lucide-react";
import Link from "next/link";

type Props = {};

export default function CheackoutPage({}: Props) {
  return (
    <div className="mx-auto flex max-w-7xl grow flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">Thanks for shopping!</h1>
      <h1 className="text-2xl">
        But don’t worry, I am not really taking your money, just your time and
        good vibes.
      </h1>
      <h1>Yoy can check the code for this project on </h1>

      <Link
        href="https://github.com/durantdurant95/ecommerce-app"
        rel="noopener noreferrer"
        className="-mt-4 inline-flex items-center"
      >
        <Github className="h-4 w-4" />
        Github
      </Link>
    </div>
  );
}
