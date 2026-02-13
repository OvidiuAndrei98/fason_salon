"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HeroImage from "@/public/imagine-hero.webp";
import HeroImage2 from "@/public/imagine-hero2.png";
import { Button } from "@/components/ui/button";
import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import Pattern from "@/public/topography.svg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-[radial-gradient(circle,rgba(56,56,56,1)_0%,rgba(12,12,12,1)_100%)] overflow-hidden">
      <Image
        src={Pattern}
        alt="pattern"
        className="w-full h-full absolute z-0 object-cover opacity-10"
      />

      <div className="relative flex flex-col p-[8px_8px_0_8px] hero-section max-w-[1024px] mx-auto pt-[50px]">
        <div className="absolute bottom-0 right-[-50px] w-[200px] h-[400px] bg-accent opacity-50 z-0 pointer-events-none transform skew-y-12" />

        <div className="flex flex-col">
          <h1 className="hero-title text-fill-gradient bg-[linear-gradient(180deg,rgba(249,249,249,1)_0%,rgba(40,40,40,1)_100%)] text-transparent font-heading pt-[16px] font-bold text-[clamp(2rem,_15vw,_158px)] uppercase leading-none tracking-wide m-0 p-0 text-nowrap text-center">
            CHRISTINA GRAMMA
          </h1>
          <h2 className="self-end font-heading text-[clamp(1rem,_3vw,_1.5rem)] font-extrabold tracking-wider text-fill-gradient bg-[linear-gradient(180deg,rgba(249,249,249,1)_0%,rgba(40,40,40,1)_100%)] text-transparent">
            ARTE împletite în PĂR
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-center z-10">
          <div className="relative w-full flex flex-col justify-center items-center md:col-span-7">
            <AnimatedContent
              distance={100}
              direction="vertical"
              duration={1}
              className="mt-[-80px] w-full"
            >
              {/* CONTAINERUL DE FLIP */}
              <div className="perspective-1000 w-full relative">
                <motion.div
                  className="relative w-full preserve-3d"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* IMAGINEA 1 */}
                  <div className="backface-hidden w-full relative">
                    <Image
                      src={HeroImage}
                      alt="Christina Gramma"
                      priority
                      className="w-full h-auto md:scale-[1.1] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] rounded-4xl shadow-[0_0_22px_1px_rgba(0,_0,_0,_0.4)]"
                    />
                  </div>

                  {/* IMAGINEA 2 */}
                  <div className="backface-hidden rotate-y-180 absolute inset-0 w-full h-full">
                    <Image
                      src={HeroImage2}
                      alt="Christina Gramma 2"
                      fill
                      className="object-cover md:scale-[1.1] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] rounded-4xl shadow-[0_0_22px_1px_rgba(0,_0,_0,_0.4)]"
                    />
                  </div>
                </motion.div>
              </div>

              {/* INDICATORUL DEDESUBT */}
              <div className="flex justify-center gap-3 mt-8 md:mt-12">
                <div
                  className={`h-1 rounded-full transition-all duration-700 ${!isFlipped ? "w-12 bg-white opacity-100" : "w-6 bg-white/20 opacity-50"}`}
                />
                <div
                  className={`h-1 rounded-full transition-all duration-700 ${isFlipped ? "w-12 bg-white opacity-100" : "w-6 bg-white/20 opacity-50"}`}
                />
              </div>
            </AnimatedContent>
          </div>

          <FadeContent className="flex flex-col gap-4 mb-[32px] md:col-span-5 z-30">
            <h1 className="text-white text-4xl lg:text-5xl md:text-start text-center">
              Curs Hairdesign <br /> Masterclass: Tehnică, Forma, Estetică și
              Viziune
            </h1>
            <span className="text-center font-sans text-md md:text-start text-base text-white leading-relaxed">
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

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
          position: relative;
          width: 100%;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          width: 100%;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
