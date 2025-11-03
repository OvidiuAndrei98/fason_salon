import Image from "next/image";
import HeroImage from "@/public/image22.jpeg";
import HeroSplash from "@/public/splash_hero.png";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col h-[calc(100vh-56px)] p-[var(--spacing-s)] hero-section max-w-[1024px] mx-auto">
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-accent opacity-20 rounded-full z-0 pointer-events-none transform rotate-45" />
      <div className="absolute bottom-0 right-[-50px] w-[200px] h-[400px] bg-accent opacity-30 z-0 pointer-events-none transform skew-y-12" />
      {/* <Image
        src={HeroSplash}
        alt="Christina Gramma"
        className="absolute bottom-0 left-[-100px] z-1"
      /> */}
      <div className="flex flex-col z-90">
        <h1 className=" font-heading text-secondary-foreground pt-[16px] font-bold text-[clamp(2rem,_15vw,_10rem)] uppercase leading-none tracking-wide m-0 p-0 text-nowrap">
          CHRISTINA GRAMMA
        </h1>
        <h2 className="self-end font-heading text-[clamp(1rem,_3vw,_1.5rem)] font-extrabold tracking-wider bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
          ARTE împletite în PĂR
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        <div className="relative w-full flex justify-center items-center md:col-span-6 lg:col-span-8">
          <div className="relative w-full">
            <Image
              src={HeroImage}
              alt="Christina Gramma"
              className="max-w-[800px] w-full mt-[-50px] sm:mt-[-80px] md:mt-[-100px] z-10 h-[60vh] md:h-[80vh] object-cover rounded-lg shadow-lg opacity-65"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-[32px] md:col-span-6 lg:col-span-4">
          <span className="text-center md:text-start text-xl text-secondary-foreground order-first">
            Styling-ul e arta de a modela frumusețea interioară. Creez imagini
            prin culoare și tunsoare. Viziunea mea, acum și în carte.
          </span>
          <Button className="p-8 rounded self-center md:self-start text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background">
            Explore My Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
