import { logout } from "@/app/auth/actions";
import { createClient } from "@/utils/supabase/server";
import { LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default async function AuthButton() {
  // const supabase = createClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();

  // const signOut = async () => {
  //   "use server";

  //   const supabase = createClient();
  //   await supabase.auth.signOut();
  //   return redirect("/auth/signin");
  // };

  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userName = user?.user_metadata?.full_name || user?.email || "User";
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    user && (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="hover:cursor-pointer">
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="user" /> */}
            <AvatarFallback>{firstLetter}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <form action={logout}>
            <DropdownMenuItem>
              <button type="submit" className="flex w-full items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
            </DropdownMenuItem>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
