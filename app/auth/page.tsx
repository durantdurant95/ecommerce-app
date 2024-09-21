import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoginButton from "@/components/ui/login-button";
import Link from "next/link";

export default async function AuthPage({
  searchParams,
}: {
  searchParams: { message: string; auth: string; error: string };
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
            <LoginButton auth={searchParams.auth} />
            {searchParams.message && (
              <p className="mt-4 p-4 text-center text-foreground">
                {searchParams.message}
              </p>
            )}
          </div>
        </form>
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
