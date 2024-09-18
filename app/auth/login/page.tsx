// import { createClient } from "@/utils/supabase/server";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import { SubmitButton } from "./submit-button";

// export default function Login({
//   searchParams,
// }: {
//   searchParams: { message: string };
// }) {
//   const supabase = createClient();
//   const signIn = async (formData: FormData) => {
//     "use server";

//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     const { error } = await supabase.auth.signInWithPassword({
//       email,
//       password,
//     });

//     if (error) {
//       return redirect("/login?message=Could not authenticate user");
//     }

//     return redirect("/");
//   };

//   const signUp = async (formData: FormData) => {
//     "use server";

//     const origin = headers().get("origin");
//     const email = formData.get("email") as string;
//     const password = formData.get("password") as string;

//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//       options: {
//         emailRedirectTo: `${origin}/auth/callback`,
//       },
//     });

//     if (error) {
//       return redirect("/login?message=Could not authenticate user");
//     }

//     return redirect("/login?message=Check email to continue sign in process");
//   };

//   const signInWithGitHub = async () => {
//     "use server";

//     const origin = headers().get("origin");

//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: "github",
//       options: {
//         redirectTo: `${origin}/auth/callback`,
//       },
//     });

//     if (error) {
//       return redirect("/login?message=Could not authenticate with GitHub");
//     }

//     return redirect("/");
//   };

//   return (
//     <main className="container grow">
//       <div className="flex w-full flex-1 flex-col justify-center gap-2 px-8 sm:max-w-md">
//         <form className="flex w-full flex-1 flex-col justify-center gap-2 text-foreground animate-in">
//           <label className="text-md" htmlFor="email">
//             Correo
//           </label>
//           <input
//             className="mb-6 rounded-md border bg-inherit px-4 py-2"
//             name="email"
//             placeholder="you@example.com"
//             required
//           />
//           <label className="text-md" htmlFor="password">
//             Password
//           </label>
//           <input
//             className="mb-6 rounded-md border bg-inherit px-4 py-2"
//             type="password"
//             name="password"
//             placeholder="••••••••"
//             required
//           />
//           <SubmitButton
//             formAction={signIn}
//             className="mb-2 rounded-md bg-green-700 px-4 py-2 text-foreground"
//             pendingText="Signing In..."
//           >
//             Sign In
//           </SubmitButton>
//           <SubmitButton
//             formAction={signUp}
//             className="mb-2 rounded-md border border-foreground/20 px-4 py-2 text-foreground"
//             pendingText="Signing Up..."
//           >
//             Sign Up
//           </SubmitButton>
//           {searchParams?.message && (
//             <p className="mt-4 bg-foreground/10 p-4 text-center text-foreground">
//               {searchParams.message}
//             </p>
//           )}
//         </form>
//       </div>
//     </main>
//   );
// }

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Github } from "lucide-react";
import Link from "next/link";
import { login } from "../actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex grow items-center justify-center">
      <div className="w-full max-w-md space-y-8 rounded-xl p-8 md:border">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to your account
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
            <Button formAction={login} className="w-full">
              Sign In
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
          <Link href={"/auth/signup"} className="font-medium text-slate-800">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
