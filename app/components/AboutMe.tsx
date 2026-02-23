import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center w-full relative">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
          Despre mine
        </h2>
      </FadeContent>

      <div className="w-full flex flex-col">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={false}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
          className="w-full max-w-[1024px] mx-auto px-4 md:px-0 md:h-[500px] relative pl-[8px] pr-[8px] md:pl-4 md:pr-4"
        >
          <Dialog>
            <DialogTrigger asChild>
              <div className="group cursor-pointer relative aspect-3/4 md:aspect-auto flex flex-col gap-2 justify-end p-[32px] bg-[linear-gradient(180deg,rgba(204,204,204,0)_14%,rgba(0,0,0,0.8)_100%),url('/CRISTINA.webp')] h-[100%] object-contain bg-center bg-no-repeat bg-cover m-auto md:m-0 md:mb-0 rounded-4xl shadow-[0_0_22px_1px_rgba(0,_0,_0,_0.4)] overflow-hidden">
                {/* Overlay de hover și Buton Play */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-white fill-white w-6 h-6 ml-1" />
                  </div>
                </div>

                {/* Conținutul text de pe imagine */}
                <div className="relative z-10">
                  <div className="flex gap-1 flex-nowrap">
                    <span className="bg-[#8484847e] text-[#ececec] p-[8px] rounded-full text-xs">
                      HAIR DESIGN
                    </span>
                    <span className="bg-[#8484847e] text-[#ececec] p-[8px] rounded-full text-xs">
                      HAIRSTYLIST
                    </span>
                    <span className="bg-[#8484847e] text-[#ececec] p-[8px] rounded-full text-xs">
                      COLORIST
                    </span>
                  </div>
                  <p className="text-white text-base mt-2">
                    Apasă pentru a vedea povestea Christinei.
                  </p>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-[90%] lg:max-w-xl p-0 bg-black border-none overflow-hidden sm:rounded-2xl">
              <DialogHeader className="sr-only">
                <DialogTitle>Prezentare Christina Gramma</DialogTitle>
              </DialogHeader>

              {/* Container Video */}
              <div className="relative w-full flex items-center justify-center bg-black max-h-[85vh]">
                <video
                  controls
                  autoPlay
                  className="max-w-full max-h-[85vh] block mx-auto shadow-2xl"
                  poster="/CRISTINA.webp"
                >
                  <source
                    src="https://firebasestorage.googleapis.com/v0/b/salon-fason.firebasestorage.app/o/public%2Fabout-me-video.webm?alt=media&token=b4ee6586-352d-4bf7-bff4-eade61ff1ac0"
                    type="video/webm"
                  />
                  Browserul tău nu suportă redarea video.
                </video>
              </div>
            </DialogContent>
          </Dialog>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default AboutMe;
