import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import Link from "next/link";
import { login, signup } from "./actions";

export default async function AuthPage({
  searchParams,
}: {
  searchParams: { message: string; auth: string };
}) {
  return (
    <div className="flex grow items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-xl p-8 md:border">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {searchParams.auth === "signup"
              ? "Create your account"
              : "Sign in to your account"}
          </h2>
        </div>
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
              formAction={searchParams.auth === "signup" ? signup : login}
              className="w-full"
            >
              {searchParams.auth === "signup" ? "Create account" : "Sign in"}
            </Button>
            {searchParams?.message && (
              <p className="mt-4 p-4 text-center text-foreground">
                {searchParams.message}
              </p>
            )}
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/api/auth/google">
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                </svg>
              </Link>
            </Button>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/api/auth/github">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="text-center text-sm">
          <Link
            href={`/auth?auth=${searchParams.auth === "signup" ? "login" : "signup"}`}
            className="font-medium text-slate-800"
          >
            {searchParams.auth === "signup"
              ? "Already have an account? Sign in"
              : "Don't have an account? Sign up"}
          </Link>
        </div>
      </div>
    </div>
  );
}
