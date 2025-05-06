"use client";

import { usePathname } from "next/navigation";
import { ChevronDown, ShoppingCart, BarChart3, User } from "lucide-react";
import Image from "next/image";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import clsx from "clsx";

const items = [
  {
    title: "Prise de commande",
    url: "/commandes",
    icon: ShoppingCart,
  },
  {
    title: "Étude de marché",
    url: "/etudes",
    icon: BarChart3,
  },
  {
    title: "Mon profil",
    url: "/profil",
    icon: User,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="pt-6 pb-6 px-2">
          <Image src="/logo.svg" alt="Logo" width={68} height={32} priority />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Scraper</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a
                        href={item.url}
                        className={clsx(
                          "flex items-center gap-2 py-5 px-2 rounded-md",
                          isActive
                            ? "bg-[#F9F9FB] text-primary font-medium"
                            : "hover:bg-muted"
                        )}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="p-4 border-t flex items-center justify-between gap-3 cursor-pointer hover:bg-muted">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9">
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
              <div className="text-sm text-left">
                <p className="font-medium leading-none">Jordan Gilles</p>
                <p className="text-xs text-muted-foreground">
                  jordan.gilles@sdm.fr
                </p>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64">
          <DropdownMenuLabel>Changer de compte</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-sm">Jean Dupont</div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="flex items-center gap-3">
              <Avatar className="h-6 w-6">
                <AvatarFallback>LM</AvatarFallback>
              </Avatar>
              <div className="text-sm">Lucie Martin</div>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="text-destructive">
            Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Sidebar>
  );
}
