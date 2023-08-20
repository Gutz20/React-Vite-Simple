import { routes } from "@/helpers";
import { useAuthStore } from "@/store";
import { LogOut, User } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const Navbar = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const logout = useAuthStore((state) => state.logout);

  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="bg-slate-200 px-8 py-4 w-full shadow-lg">
      <div className="container mx-auto flex flex-row max-sm:flex-col gap-3 items-center justify-between">
        <Link to={"/"} className="flex flex-row gap-2 items-center">
          <img src="/assets/logo.png" alt="logo" className="w-20" />
          <h1 className="text-xl font-bold">EnatelPeru</h1>
        </Link>
        <div>
          <nav>
            <ul className="flex gap-8 m-auto">
              {routes.map(({ label, path }) => (
                <li key={path}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "font-bold scale-105"
                        : isPending
                        ? "underline"
                        : "text-gray-400"
                    }
                    to={path}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {!isAuth ? (
          <div className="flex gap-2">
            <Link to={"/login"}>
              <Button variant={"outline"}>Iniciar Sesion</Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant={"outline"}>Registrarse</Button>
            </Link>
          </div>
        ) : (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to={"/profile"}>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </Link>
                  {/* <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                  </DropdownMenuItem> */}
                </DropdownMenuGroup>
                {/* <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Users className="mr-2 h-4 w-4" />
                    <span>Team</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <MessageSquare className="mr-2 h-4 w-4" />
                          <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem>
                    <Plus className="mr-2 h-4 w-4" />
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Github className="mr-2 h-4 w-4" />
                  <span>Github</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <Cloud className="mr-2 h-4 w-4" />
                  <span>API</span>
                </DropdownMenuItem> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={onLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
