import { Button } from "@/components/ui/button";
import Carte from "@/public/carte.png";
import Image from "next/image";
const BookSection = () => {
  return (
    <div className="w-full flex flex-col items-center ">
      <h2 className="font-heading text-3xl py-[50px] font-extrabold tracking-wider bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
        DESPRE CARTE
      </h2>
      <div className="w-full grid md:grid-cols-2 md:grid-rows-1 gap-4 ">
        <div className="flex jus w-full">
          <Image src={Carte} alt="Book Cover" className="max-w-sm mx-auto" />
        </div>
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto ">
          <h2 className="text-secondary-foreground font-heading text-2xl font-extrabold tracking-wide">
            ARTE IMPLETITE IN PAR
          </h2>
          <p className="text-xl text-center">
            Am scris această carte cu gândul la materialele pe care eu însămi le
            căutam. Dedicată practicii și studiului, ea explorează coafura prin
            artă, psihologie, istorie, spiritualitate și comunicare.
          </p>
          {/* <Button className="p-7 rounded self-center text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background">
          Explore My Book
        </Button> */}
        </div>
      </div>
    </div>
  );
};

export default BookSection;
