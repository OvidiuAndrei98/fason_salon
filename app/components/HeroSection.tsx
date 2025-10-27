import Image from "next/image";
import HeroImage from "@/public/hero_image.webp";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col h-full p-[var(--spacing-s)]">
      <div className="flex flex-col">
        <h1 className=" font-heading text-secondary-foreground pt-[16px] font-bold text-[clamp(2rem,_15vw,_10rem)] uppercase leading-none tracking-wide m-0 p-0 text-nowrap">
          CHRISTINA GRAMMA
        </h1>
        <h2 className="self-end font-heading text-[clamp(1rem,_3vw,_1.5rem)] font-extrabold tracking-wider bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
          ARTE împletite în PĂR
        </h2>
      </div>

      <Image
        className="absolute top-[7%] mx-auto left-[50%] translate-x-[-50%] w-[100vw] max-w-[700px] h-auto"
        src={HeroImage}
        alt="hero-image"
      />
      <div className="w-full px-4 flex flex-col mt-auto relative">
        <div className="absolute top-[-70px] left-0 w-full h-[80px] bg-gradient-to-t from-background via-background to-transparent" />
        <Button className="h-[80px] self-center text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background">
          Explore My Book
        </Button>
        <span className="text-center text-secondary-foreground order-first">
          Styling-ul, pentru mine, este arta de a modela frumusețea interioară.
          Creez imagini prin culoare și tunsoare. Cartea mea împărtășește
          viziunea din spatele fiecărei transformări.
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
