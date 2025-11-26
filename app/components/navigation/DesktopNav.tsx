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
    <PillNav
      logo={"/vercel.svg"}
      logoAlt="Company Logo"
      items={[
        { label: "Acasa", href: "/" },
        { label: "Curs", href: "/despre" },
        { label: "Contact", href: "/contact" },
      ]}
      activeHref="/"
      className={`custom-nav z-50 w-full max-w-[1024px] mx-auto`}
      ease="power2.easeOut"
      initialLoadAnimation={false}
      baseColor="#252525"
      pillColor="#f6f8ff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
    />
  );
};

export default DesktopNav;
