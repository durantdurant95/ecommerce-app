"use client";

import { login, signup } from "@/db/actions";
import { Loader } from "lucide-react";
import { type ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./button";

type Props = ComponentProps<"button"> & {
  auth: string;
};

export default function LoginButton({ auth }: Props) {
  const { pending } = useFormStatus();

  //   const isPending = pending && action === props.formAction;
  return (
    <Button
      className="w-full"
      formAction={auth === "signup" ? signup : login}
      disabled={pending}
    >
      {pending ? (
        <Loader className="animate-spin" />
      ) : auth === "signup" ? (
        "Create account"
      ) : (
        "Sign in"
      )}
    </Button>
  );
}
