"use client";

import PillNav from "@/components/pill-nav/PillNav";
import { StaggeredMenu } from "@/components/pill-nav/StaggeredNav";
import { useEffect, useState } from "react";

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
          ? "!fixed backdrop-blur-md bg-white/70 shadow-md top-0 left-0"
          : "bg-transparent"
      }  px-4 py-2 md:px-8`}
    >
      <div className="text-white">LOGO</div>
      <ul className="flex justify-center gap-8 py-2 uppercase font-semibold text-lg text-accent/70">
        <li>[ACASA]</li>
        <li>[DESPRE]</li>
        <li>[CURSURI]</li>
        <li>[CONTACT]</li>
      </ul>
    </header>
  );
};

export default DesktopNav;
