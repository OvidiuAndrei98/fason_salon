const AboutMe = () => {
  return (
    <div className="flex flex-col items-center w-full ">
      <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
        Viziunea Mea
      </h2>
      <div className="w-full flex flex-col space-between md:flex-row gap-10  w-full">
        <div className="bg-[#d6d6d6] flex flex-col gap-4  [padding-left:clamp(0.5rem,calc((100vw-1024px)/2),50vw)] pr-[50px] py-[50px]  text-xl rounded-tr-4xl rounded-br-4xl">
          <span className="text-accent text-2xl">Despre mine</span>
          <h2 className="text-secondary-foreground font-heading text-4xl font-extrabold tracking-wide">
            CHRISTINA GRAMMA
          </h2>
          <p className="pb-2">
            Cu o experiență de peste 10 ani în domeniul hair styling-ului, sunt
            dedicată să creez look-uri care să reflecte personalitatea unică a
            fiecărui client. Specializată în tehnici moderne de colorare și
            balayage, îmbin creativitatea cu precizia pentru rezultate
            excepționale.
          </p>
          <p>
            Filosofia mea se bazează pe îngrijirea și sănătatea părului,
            folosind produse premium și tehnici inovatoare pentru a obține cele
            mai bune rezultate. Fiecare vizită în salonul meu este o experiență
            personalizată, unde ascult cu atenție dorințele tale și le transform
            în realitate.
          </p>
        </div>
        <div className="w-full [padding-right:clamp(0.5rem,calc((100vw-1024px)/2),50vw)] px-2">
          <div className="aspect-3/4 flex flex-col gap-2 justify-end p-[32px] bg-[linear-gradient(180deg,rgba(204,204,204,0)_14%,rgba(0,0,0,1)_100%),url('/CHRISTINA.jpg')] min-w-[350px] h-[100%] object-contain bg-center bg-no-repeat bg-cover  m-auto md:m-0 mb-10 md:mb-0 rounded-4xl shadow-[2px_4px_44px_0px_rgba(0,_0,_0,_0.8)]">
            <div className="flex gap-1 flex-nowrap">
              <span className="bg-[#8484847e] text-foregroud p-[10px] text-[#ececec]  rounded-full text-xs">
                HAIR DESIGN
              </span>
              <span className="bg-[#8484847e] text-foregroud p-[10px] text-[#ececec]  rounded-full text-xs">
                HAIRSTYLIST
              </span>
              <span className="bg-[#8484847e] text-foregroud p-[10px] text-[#ececec]  rounded-full text-xs">
                COLORIST
              </span>
            </div>
            <div className="text-white">
              Styling-ul e arta de a modela frumusețea interioară. Creez imagini
              prin culoare și tunsoare.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
