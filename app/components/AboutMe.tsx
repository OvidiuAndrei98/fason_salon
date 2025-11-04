const AboutMe = () => {
  return (
    <div className="max-w-[1024px] flex flex-col items-center w-full">
      <h2 className="font-heading text-4xl py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
        Viziunea Christina Grama
      </h2>
      <div className="w-full flex flex-col items-center gap-4">
        <div className="h-[250px] w-[250px] bg-blue-800 rounded-full"></div>
        <h3 className="text-secondary-foreground font-heading text-2xl font-extrabold tracking-wide">
          Christina Gramma
        </h3>
        <ul className="flex flex-wrap max-w-[430px] justify-center items-center gap-2">
          <li className="inline-flex items-center rounded-full bg-blue-100 border border-blue-200 px-3 py-1 text-sm font-medium text-blue-800">
            HAIR DESIGN
          </li>

          <li className="inline-flex items-center rounded-full bg-gray-100 border border-gray-200 px-3 py-1 text-sm font-medium text-gray-700">
            HAIRSTYLIST
          </li>

          <li className="inline-flex items-center rounded-full bg-violet-100 border border-violet-200 px-3 py-1 text-sm font-medium text-violet-800">
            COLORIST
          </li>

          <li className="inline-flex items-center rounded-full bg-emerald-100 border border-emerald-200 px-3 py-1 text-sm font-medium text-emerald-800">
            BALAYAGE AVANSAT
          </li>
        </ul>
      </div>
      <div className="w-full flex">
        <div className="w-full"></div>
        <div></div>
      </div>
    </div>
  );
};

export default AboutMe;
