"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Logo from "@/public/LOGO.svg";

const MobileNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "[ACASA]", href: "/" },
    { name: "[CURS]", href: "#course-section" },
    { name: "[MODULE]", href: "#module-section" },
    { name: "[CONTACT]", href: "#contact-section" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 py-3 flex items-center justify-between ${
        isScrolled
          ? "bg-[#2d2d2db9] backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="relative h-10 w-24">
        <Image src={Logo} alt="Logo" fill className="object-contain" />
      </div>

      <div className="flex items-center gap-2">
        {/* BUTON CUMPĂRĂ (Header Mobile) */}
        <Link
          href="#course-section"
          className="bg-white text-black px-4 py-2 rounded-full text-[11px] font-black tracking-tighter transition-all active:scale-95 flex items-center gap-1.5 shadow-lg"
        >
          <ShoppingBag size={14} />
          CUMPĂRĂ
        </Link>

        {/* Meniu Trigger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-7 w-7" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-full sm:w-[300px] bg-[#1a1a1ae6] backdrop-blur-lg border-l-[#333] text-white flex flex-col justify-center items-center"
          >
            <SheetTitle className="hidden">Meniu Navigare</SheetTitle>

            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-light tracking-widest text-[#C7C7C7] hover:text-white transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="#course-section"
                onClick={() => setIsOpen(false)}
                className="mt-4 bg-white text-black px-8 py-4 rounded-full text-sm font-black tracking-widest hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                CUMPĂRĂ CURSUL
              </Link>
            </nav>

            <div className="absolute bottom-10 flex flex-col items-center gap-4">
              <Image
                src={Logo}
                alt="Logo"
                width={80}
                height={40}
                className="opacity-50"
              />
              <p className="text-[10px] text-gray-500 uppercase tracking-tighter">
                © 2026 Fason Salon. Toate drepturile rezervate.
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileNav;
