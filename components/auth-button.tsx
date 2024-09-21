import { logout } from "@/db/actions";
import { createClient } from "@/utils/supabase/server";
import { LogIn, LogOut, UserPlus } from "lucide-react";
import Link from "next/link";
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
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const userName = user?.user_metadata?.full_name || user?.email || "User";
  const firstLetter = userName.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="hover:cursor-pointer">
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="user" /> */}
          <AvatarFallback>{firstLetter}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      {user ? (
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>
              <button className="flex w-full items-center py-1">
                <User className="mr-2 h-4 w-4" />
                Profile
              </button>
            </DropdownMenuItem> */}
          {/* <DropdownMenuItem>
              <button className="flex w-full items-center py-1">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </button>
            </DropdownMenuItem> */}
          <DropdownMenuItem>
            <form>
              <button
                formAction={logout}
                className="flex w-full items-center py-1"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className="w-56">
          <DropdownMenuItem>
            <Link href="/auth" className="flex w-full items-center py-1">
              <LogIn className="mr-2 h-4 w-4" /> <span>Log In</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              href="/auth?auth=signup"
              className="flex w-full items-center py-1"
            >
              <UserPlus className="mr-2 h-4 w-4" /> <span>Sign Up</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}
