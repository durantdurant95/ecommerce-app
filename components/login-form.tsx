"use client";
import { login, signup } from "@/db/actions";
import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type Props = ComponentProps<"button"> & {
  auth: string;
  message?: string;
  pendingText?: string;
};

export default function LoginForm({
  auth,
  message,
  pendingText,
  ...props
}: Props) {
  // use useFormStatus to manage pending state
  const { pending, action } = useFormStatus();

  const isPending = pending && action === props.formAction;

  return (
    <form className="mt-8 space-y-6">
      <div>
        <div className="pb-4">
          <Label htmlFor="email-address" className="sr-only">
            Email address
          </Label>
          <Input
            id="email-address"
            name="email"
            type="email"
            required
            className="rounded-t-md"
            placeholder="Email address"
          />
        </div>
        <div>
          <Label htmlFor="password" className="sr-only">
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="rounded-b-md"
            placeholder="Password"
          />
        </div>
      </div>

      <div>
        <Button
          className="w-full"
          formAction={auth === "signup" ? signup : login}
          aria-disabled={isPending}
        >
          {isPending
            ? pendingText
            : auth === "signup"
              ? "Create account"
              : "Sign in"}
          {/* {auth === "signup" ? "Create account" : "Sign in"} */}
        </Button>
        {message && (
          <p className="mt-4 p-4 text-center text-foreground">{message}</p>
        )}
      </div>
    </form>
  );
}
