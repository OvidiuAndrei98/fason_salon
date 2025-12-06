import Image from "next/image";
import HeroImage from "@/public/imagine-hero.webp";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import Pattern from "@/public/topography.svg";

// Fara poza pe telefon

const HeroSection = () => {
  return (
    <div className="relative bg-[radial-gradient(circle,rgba(56,56,56,1)_0%,rgba(12,12,12,1)_100%)] overflow-hidden">
      <Image
        src={Pattern}
        alt="pattern"
        className="w-full h-full absolute z-[] object-cover opacity-8 "
      />
      <div className="relative flex flex-col p-[8px_8px_0_8px] hero-section max-w-[1024px] mx-auto pt-[50px]">
        <div className="absolute bottom-0 right-[-50px] w-[200px] h-[400px] bg-accent opacity-50 z-0 pointer-events-none transform skew-y-12" />
        <div className="flex flex-col ">
          <h1
            className="hero-title text-fill-gradient bg-[linear-gradient(180deg,rgba(249,249,249,1)_0%,rgba(40,40,40,1)_100%)]
    text-transparent font-heading pt-[16px] font-bold text-[clamp(2rem,_15vw,_158px)] uppercase leading-none tracking-wide m-0 p-0 text-nowrap text-center"
          >
            CHRISTINA GRAMMA
          </h1>
          <h2
            className="self-end font-heading text-[clamp(1rem,_3vw,_1.5rem)] font-extrabold tracking-wider text-fill-gradient bg-[linear-gradient(180deg,rgba(249,249,249,1)_0%,rgba(40,40,40,1)_100%)]
    text-transparent"
          >
            ARTE împletite în PĂR
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
          <div className="relative w-full flex justify-center items-center md:col-span-7">
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
              className="mt-[-80px]"
            >
              <Image
                src={HeroImage}
                alt="Christina Gramma"
                className="md:scale-[1.1]"
              />
            </AnimatedContent>
          </div>
          <FadeContent className="flex flex-col gap-6 mb-[32px] md:col-span-5 z-30">
            <Image
              src="/mask-text.svg"
              alt="hero-image"
              width={800}
              height={800}
              className="brightness-220 hidden md:block w-[300px] lg:w-[400px] md:scale-[1.1]"
            />

            <span className="text-center font-sans text-md  md:text-start text-base text-white leading-relaxed">
              Pentru mine, părul nu este doar tehnică. Este o formă de
              comunicare modul în care un om spune cine este fără să rostească
              un cuvânt.
            </span>
            <Button className="p-8 rounded self-center md:self-start text-xl bg-white text-black hover:bg-accent active:bg-accent hover:text-secondary-background">
              Vezi Detalii
            </Button>
          </FadeContent>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
