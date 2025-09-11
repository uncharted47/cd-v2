import Image from "next/image";
import Link from "next/link";
import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
  const links = [
    { label: "Notre marque", href: "/notre-marque" },
    { label: "Chapitre II", href: "/chapitre-2" },
    { label: "Galerie", href: "/galerie" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className=" fixed right-1/2 mt-4 translate-x-1/2 w-full px-5 z-50">
      <div className="w-full container mx-auto p-4  text-main bg-[#e5dac5] border border-[#e5dac5] font-light flex justify-end relative items-center">
        {/* Logo */}
        <Link href={"/"} className=" absolute left-0 -bottom-3">
          <Image
            src={"/logo-main.png"}
            style={{ position: "relative", left: -1 }}
            className="object-cover"
            alt="Logo"
            width={155}
            height={30}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-3.5 hover:text-white/80 transition-colors duration-300 text-base"
            >
              <span className="group-hover:text-second relative pb-1 after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] after:bg-second group-hover:after:w-full after:transition-all after:duration-300">
                {link.label}
              </span>
            </Link>
          ))}
          <LanguageSwitcher />
          <Link href="/contact">
            <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-md border-main border text-white font-bold bg-main hover:bg-transparent hover:text-main  group duration-300 ease-in-out transition-all">
              Prendre RDV
            </button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-end">
          <Sheet>
            <SheetTrigger className="text-white">
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-main backdrop-blur-3xl border-gray-300/20 w-[70%] sm:w-[300px] z-50"
            >
              <SheetHeader>
                <SheetTitle className="hidden">Menu</SheetTitle>
                <div className="flex items-center justify-between mt-10">
                  <Link href={"/"}>
                    <Image
                      src={"/logo-new.png"}
                      alt="Logo"
                      width={120}
                      height={40}
                    />
                  </Link>
                  <SheetClose className="text-white">
                    <X />
                  </SheetClose>
                </div>
              </SheetHeader>
              <ul className="flex flex-col gap-4 mt-6">
                {links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-main transition"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
