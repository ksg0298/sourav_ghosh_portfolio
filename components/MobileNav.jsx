"use client";
// import { Sheet } from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Sourav <span className="text-accent">G.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-8 items-center justify-center">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname === link.path &&
                  "text-accent border-b-2 border-accent"
                }text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
