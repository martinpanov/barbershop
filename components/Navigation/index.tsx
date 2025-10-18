"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MobileNavigation } from "./MobileNavigation";
import { menuItems } from "./constants";
import { RenderIf } from "../RenderIf";
import { Button } from "../ui/button";

export default function Navigation() {
  return (
    <header>
      <NavigationMenu className="absolute z-10 hidden w-full max-w-full sm:flex sm:items-center sm:justify-center sm:gap-3 sm:text-base md:gap-7 md:text-lg">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/"
              className="hover:bg-transparent focus:bg-transparent"
            >
              <Image
                width={192}
                height={144}
                priority
                src="/logo-2.png"
                alt="logo"
                className="object-cover sm:h-36 sm:w-48"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <RenderIf condition={item.href === "/booking"}>
                <Button asChild>
                  <NavigationMenuLink href={item.href}>
                    {item.itemText}
                  </NavigationMenuLink>
                </Button>
              </RenderIf>
              <RenderIf condition={item.href !== "/booking"}>
                <NavigationMenuLink href={item.href}>
                  {item.itemText}
                </NavigationMenuLink>
              </RenderIf>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <MobileNavigation />
    </header>
  );
}
