import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";

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

      <div className="w-full flex flex-col pr-2 md:pr-0 md:flex-row gap-6 md:gap-4 lg:gap-10">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          className="bg-accent/15 p-4 md:p-0 flex flex-col gap-4 items-center md:items-start md:[padding-left:clamp(0.5rem,calc((100vw-1024px)/2),50vw)] md:pr-[50px] md:py-[50px] text-xl rounded-tr-4xl rounded-br-4xl"
        >
          <h2 className="text-secondary-foreground font-heading text-3xl font-extrabold tracking-wide">
            CHRISTINA GRAMMA
          </h2>
          <p className="pb-2 text-base w-full text-center md:text-start">
            Cu o experiență de peste 30 de ani în domeniul hair styling-ului,
            sunt dedicată să creez look-uri care să reflecte personalitatea
            fiecărei persoane.
          </p>
          <p className="w-full text-base text-center md:text-start">
            Filosofia mea se bazează pe îngrijirea și sănătatea părului,
            folosind produse premium și tehnici inovatoare pentru a obține cele
            mai bune rezultate. Fiecare vizită în salonul meu este o experiență
            personalizată, unde ascult cu atenție dorințele tale și le transform
            în realitate.
          </p>
        </FadeContent>

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
          className="w-full pl-2 md:[padding-right:clamp(0.5rem,calc((100vw-1024px)/2),50vw)]"
        >
          <div className="aspect-3/4 md:aspect-auto flex flex-col gap-2 justify-end p-[32px] bg-[linear-gradient(180deg,rgba(204,204,204,0)_14%,rgba(0,0,0,0.8)_100%),url('/CRISTINA.webp')] h-[100%] object-contain bg-center bg-no-repeat bg-cover m-auto md:m-0 md:mb-0 rounded-4xl shadow-[0_0_22px_1px_rgba(0,_0,_0,_0.4)]">
            <div className="flex gap-1 flex-nowrap">
              <span className="bg-[#8484847e] text-foregroud p-[8px] text-[#ececec] rounded-full text-xs whitespace-nowrap">
                HAIR DESIGN
              </span>
              <span className="bg-[#8484847e] text-foregroud p-[8px] text-[#ececec] rounded-full text-xs whitespace-nowrap">
                HAIRSTYLIST
              </span>
              <span className="bg-[#8484847e] font-light text-foregroud p-[8px] text-[#ececec] rounded-full text-xs whitespace-nowrap">
                COLORIST
              </span>
            </div>
            <p className="text-white text-base">
              Styling-ul e arta de a modela frumusețea interioară. Creez imagini
              prin culoare și tunsoare.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default AboutMe;
