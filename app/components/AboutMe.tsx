const AboutMe = () => {
  return (
    <div className="max-w-[1024px] flex flex-col items-center w-full px-[var(--spacing-s)]">
      <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
        Viziunea Mea
      </h2>
      <div className="w-full flex flex-col items-center gap-4">
        <div className="h-[150px] w-[150px] md:h-[250px] md:w-[250px] bg-blue-800 rounded-full"></div>
        <h3 className="text-secondary-foreground font-heading text-2xl font-extrabold tracking-wide">
          Christina Gramma
        </h3>
        <ul className="flex flex-wrap max-w-[430px] justify-center items-center gap-2">
          <li className="inline-flex items-center rounded-full bg-blue-100 border border-blue-200 p-[2px_4px] text-sm font-medium text-blue-800">
            HAIR DESIGN
          </li>

          <li className="inline-flex items-center rounded-full bg-gray-100 border border-gray-200 p-[2px_4px] text-sm font-medium text-gray-700">
            HAIRSTYLIST
          </li>

          <li className="inline-flex items-center rounded-full bg-violet-100 border border-violet-200 p-[2px_4px] text-sm font-medium text-violet-800">
            COLORIST
          </li>

          <li className="inline-flex items-center rounded-full bg-emerald-100 border border-emerald-200 p-[2px_4px] text-sm font-medium text-emerald-800">
            BALAYAGE AVANSAT
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 grid-rows-[100px_1fr] md:grid-cols-2 gap-4 w-full mt-4 md:mt-8 mb-16">
        <div className="bg-[url('/image23.jpeg')] bg-cover rounded-lg relative before:rounded-lg before:absolute before:inset-0 before:bg-gradient-to-l before:from-black/50 before:to-black/5"></div>
        <div className="flex flex-col justify-top gap-6">
          <blockquote className="relative border-t-4 md:border-r-4 border-accent pr-6 text-right">
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
              Cu o experiență de peste 10 ani în domeniul hair styling-ului,
              sunt dedicată să creez look-uri care să reflecte personalitatea
              unică a fiecărui client. Specializată în tehnici moderne de
              colorare și balayage, îmbin creativitatea cu precizia pentru
              rezultate excepționale.
            </p>
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed mt-4">
              Filosofia mea se bazează pe îngrijirea și sănătatea părului,
              folosind produse premium și tehnici inovatoare pentru a obține
              cele mai bune rezultate. Fiecare vizită în salonul meu este o
              experiență personalizată, unde ascult cu atenție dorințele tale și
              le transform în realitate.
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
