import { Button } from "@/components/ui/button";
import Carte from "@/public/carte.png";
import Image from "next/image";
const BookSection = () => {
  return (
    <div className="w-full flex flex-col items-center max-w-[1024px]">
      <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
        DESPRE CARTE
      </h2>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-1 gap-[50px] sm:gap-4 md:gap-4 lg-gap-4 ">
        <div className="flex w-full">
          <Image src={Carte} alt="Book Cover" className="max-w-sm mx-auto " />
        </div>
        <div className="flex flex-col items-center justify-center gap-[var(--spacing-s)] md:gap-[var(--spacing-m)] px-[var(--spacing-s)]">
          <h2 className="text-secondary-foreground font-heading text-2xl font-extrabold tracking-wide">
            ARTE IMPLETITE IN PAR
          </h2>
          <p className="text-md md:text-xl text-center">
            Am scris această carte cu gândul la materialele pe care eu însămi le
            căutam. Dedicată practicii și studiului, ea explorează coafura prin
            artă, psihologie, istorie, spiritualitate și comunicare.
          </p>
          <Button className="p-7 rounded self-center text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background">
            Explore My Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookSection;
