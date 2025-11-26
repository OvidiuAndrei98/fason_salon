import Image from "next/image";
import HeroImage from "@/public/imagine-hero.png";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";

// Fara poza pe telefon

const HeroSection = () => {
  return (
    <div className="relative flex flex-col min-h-[calc(100vh + 100px)] p-(--spacing-s) hero-section max-w-[1024px] mx-auto">
      <div className="absolute bottom-0 right-[-50px] w-[200px] h-[400px] bg-accent opacity-30 z-0 pointer-events-none transform skew-y-12" />
      {/* <Image
        src={HeroSplash}
        alt="Christina Gramma"
        className="absolute bottom-0 left-[-100px] z-1"
      /> */}
      <div className="flex flex-col ">
        <h1 className=" font-heading text-secondary-foreground pt-[16px] font-bold text-[clamp(2rem,_15vw,_158px)] uppercase leading-none tracking-wide m-0 p-0 text-nowrap">
          CHRISTINA GRAMMA
        </h1>
        <h2 className="self-end font-heading text-[clamp(1rem,_3vw,_1.5rem)] font-extrabold tracking-wider bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
          ARTE împletite în PĂR
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        <div className="relative w-full flex justify-center items-center md:col-span-6 lg:col-span-7">
          <div className="relative w-full">
            <AnimatedContent
              distance={100}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0.6}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0}
            >
              <Image
                src={HeroImage}
                alt="Christina Gramma"
                className="min-h-[400px] max-h-[800px]  w-full mt-[-50px] sm:mt-[-80px] md:mt-[-100px] z-[10] h-[60vh] md:h-[80vh] object-cover rounded-lg overflow-visible"
              />
            </AnimatedContent>
          </div>
        </div>
        <FadeContent className="flex flex-col gap-6 mb-[32px] md:col-span-6 lg:col-span-5 z-30">
          <Image
            src="/mask-text.svg"
            alt="hero-image"
            width={800}
            height={800}
          />

          <span className="text-center text-md  md:text-start text-base text-secondary-foreground ">
            {/* O culoare nu este niciodata frumoasa sau urata, ea doar este... */}
            Părul nu e doar materie — e poveste, culoare și mișcare. „Arte
            împletite în păr" nu se citește, se trăiește.
          </span>
          <Button className="p-8 rounded self-center md:self-start text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background">
            Vezi Detalii
          </Button>
        </FadeContent>
      </div>
    </div>
  );
};

export default HeroSection;
