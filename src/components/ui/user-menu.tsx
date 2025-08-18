import {
  Layers2Icon,
  LayoutDashboard,
  LogOutIcon,
  UserPenIcon,
} from "lucide-react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Link } from "react-router";
import useUser from "@/hooks/userUser";
import { Role } from "@/constants/role";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useDispatch } from "react-redux";
import { useState } from "react";

export default function UserMenu() {
  const userInfo = useUser();
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const [openDialog, setOpenDialog] = useState(false);

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="p-2 hover:text-primary cursor-pointer transition-colors duration-200 h-auto rounded-full hover:bg-transparent">
            <LuUserRound className="w-5 h-5" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-64" align="end">
          <DropdownMenuLabel className="flex min-w-0 flex-col">
            <span className="text-foreground truncate text-sm font-medium">
              {userInfo?.name}
            </span>
            <span className="text-muted-foreground truncate text-xs font-normal">
              {userInfo?.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            {userInfo?.role === Role.ADMIN ||
              (userInfo?.role === Role.SUPER_ADMIN && (
                <DropdownMenuGroup>
                  <DropdownMenuItem asChild>
                    <Link className="w-full" to="/admin">
                      <div className="flex gap-2 w-full">
                        <LayoutDashboard
                          size={16}
                          className="opacity-60"
                          aria-hidden="true"
                        />
                        <span>Dashboard</span>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              ))}
            <DropdownMenuGroup>
              <DropdownMenuItem asChild>
                <Link className="w-full" to="/me">
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
            <DropdownMenuItem asChild>
              <Link className="w-full" to="/me/orders">
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
          {/* Instead of direct logout, open dialog */}
          <DropdownMenuItem onClick={() => setOpenDialog(true)}>
            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
            <span>Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* AlertDialog for Logout */}
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Logout</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to log out? You will need to log in again to
              access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleLogout();
                setOpenDialog(false);
              }}
            >
              Yes, Logout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
