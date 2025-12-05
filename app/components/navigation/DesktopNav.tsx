"use client";

import PillNav from "@/components/pill-nav/PillNav";
import { StaggeredMenu } from "@/components/pill-nav/StaggeredNav";
import { useEffect, useState } from "react";
import Logo from "@/public/LOGO.svg";
import Image from "next/image";
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
      className={`absolute   flex flex-row items-center justify-between w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "!fixed backdrop-blur-md bg-[#2d2d2db9] shadow-md top-0 left-0"
          : "bg-transparent"
      }  px-4 py-2 md:px-8`}
    >
      <div className="max-w-[1024px] flex justify-between w-full mx-auto">
        <Image src={Logo} alt="Logos" width={120} height={60} />
        <ul className="flex justify-center gap-8 py-2 uppercase font-normal text-[16px] text-[#C7C7C7]">
          {/* <li className="hover:text-white">[ACASA]</li>
          <li className="hover:text-white">[DESPRE]</li>
          <li className="hover:text-white">[CURSURI]</li>
          <li className="hover:text-white">[CONTACT]</li> */}
        </ul>
      </div>
    </header>
  );
};

export default DesktopNav;
