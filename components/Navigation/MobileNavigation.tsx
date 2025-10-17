"use client";

import { Button } from "@/components/ui/button";
import { NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { menuItems } from "./constants";

export const MobileNavigation = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <NavigationMenu className="absolute z-50 flex items-center justify-between w-full max-w-full bg-transparent sm:justify-center sm:hidden">
      <NavigationMenuItem>
        <NavigationMenuLink href="/">
          <Image
            width={192}
            height={144}
            src="/logo-2.png"
            alt="logo"
            className="h-28 w-40 object-cover sm:h-36 sm:w-48"
          />
        </NavigationMenuLink>
      </NavigationMenuItem>

      <Sheet open={openMobileNav} onOpenChange={setOpenMobileNav}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="lg">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-full bg-black/90 border-none text-white"
        >
          <VisuallyHidden>
            <SheetTitle>Navigation Menu</SheetTitle>
          </VisuallyHidden>
          <NavigationMenuList className="flex flex-col items-center justify-center gap-5 text-3xl mt-20">
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink href={item.href} onClick={() => setOpenMobileNav(false)}>
                  {item.itemText}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </SheetContent>
      </Sheet>
    </NavigationMenu>
  );
};