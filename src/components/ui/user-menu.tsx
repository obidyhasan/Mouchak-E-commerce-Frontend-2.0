import { Layers2Icon, LogOutIcon, UserPenIcon } from "lucide-react";

import { LuUserRound } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router";

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="p-2 hover:text-primary cursor-pointer transition-colors duration-200 h-auto rounded-full hover:bg-transparent">
          <LuUserRound className="w-5 h-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            Keith Kennedy
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            k.kennedy@originui.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Link className="w-full" to={"/me"}>
                <div className="flex gap-2 w-full">
                  <UserPenIcon
                    size={16}
                    className="opacity-60"
                    aria-hidden="true"
                  />
                  <span>Profile</span>
                </div>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="w-full" to={"/me/orders"}>
              <div className="flex gap-2 w-full">
                <Layers2Icon
                  size={16}
                  className="opacity-60"
                  aria-hidden="true"
                />
                <span>Orders</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
