import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";

const FaqSection = () => {
  return (
    <div className="py-8 w-full">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent text-center">
          INTREBARI FRECVENTE
        </h2>
      </FadeContent>
      <div className="max-w-[800px] mx-auto px-4 space-y-6">
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <h3 className="font-heading text-2xl font-bold mb-2 text-accent/80">
            Care sunt serviciile oferite în salon?
          </h3>
          <p>
            Oferim o gamă largă de servicii de hair styling, inclusiv tunsori,
            colorare, balayage, tratamente de îngrijire a părului și coafuri
            pentru ocazii speciale.
          </p>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.2}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <h3 className="font-heading text-2xl font-bold mb-2 text-accent/80">
            Cum pot face o programare?
          </h3>
          <p>
            Puteți face o programare prin telefon, email sau folosind formularul
            de contact de pe site-ul nostru. Vă recomandăm să rezervați din timp
            pentru a vă asigura că obțineți data și ora dorită.
          </p>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.4}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <h3 className="font-heading text-2xl font-bold mb-2 text-accent/80">
            Ce produse folosiți în salon?
          </h3>
          <p>
            Folosim doar produse de înaltă calitate, de la branduri renumite,
            care sunt blânde cu părul și scalpul, asigurând rezultate excelente
            și sănătate pe termen lung pentru părul dumneavoastră.
          </p>
        </AnimatedContent>
        <AnimatedContent
          distance={150}
          direction="horizontal"
          reverse={true}
          duration={1.6}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
          delay={0.1}
        >
          <h3 className="font-heading text-2xl font-bold mb-2 text-accent/80">
            Oferiți consultanță pentru stilul de păr?
          </h3>
          <p>
            Da, oferim consultanță personalizată pentru a vă ajuta să alegeți
            stilul și culoarea care se potrivesc cel mai bine cu personalitatea
            și stilul dumneavoastră de viață.
          </p>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default FaqSection;
