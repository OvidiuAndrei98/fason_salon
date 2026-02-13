"use client";

import { useEffect, useState } from "react";
import Logo from "@/public/LOGO.svg";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag } from "lucide-react"; // Am adăugat o iconiță pentru un look profi

const DesktopNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`absolute flex flex-row items-center justify-between w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "!fixed backdrop-blur-md bg-[#2d2d2db9] shadow-md top-0 left-0"
          : "bg-transparent"
      } px-4 py-2 md:px-8`}
    >
      <div className="max-w-[1200px] flex items-center justify-between w-full mx-auto">
        {/* LOGO */}
        <div className="flex-shrink-0">
          <Image src={Logo} alt="Logos" width={120} height={60} />
        </div>

        {/* MENIU CENTRAL */}
        <nav className="hidden md:block">
          <ul className="flex justify-center gap-8 py-2 uppercase font-medium text-[14px] lg:text-[15px] text-[#C7C7C7]">
            <li className="hover:text-white transition-colors">
              <Link href="/">[ACASA]</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link href="#course-section">[CURS]</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link href="#module-section">[MODULE]</Link>
            </li>
            <li className="hover:text-white transition-colors">
              <Link href="#contact-section">[CONTACT]</Link>
            </li>
          </ul>
        </nav>

        {/* BUTON CUMPĂRĂ */}
        <div className="flex items-center">
          <Link
            href="#course-section"
            className="bg-white text-black hover:bg-accent hover:text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 active:scale-95 shadow-lg shadow-black/10"
          >
            <ShoppingBag size={18} />
            CUMPĂRĂ ACUM
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DesktopNav;
