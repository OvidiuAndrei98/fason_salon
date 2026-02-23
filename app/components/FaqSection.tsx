import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";

const FaqSection = () => {
  return (
    <div className="pb-8 w-full">
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
      <div className="max-w-[1024px] mx-auto px-4 space-y-6">
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
            Cum primesc acces la curs?
          </h3>
          <p>
            După achiziție, primești automat pe email linkul de acces. Simplu,
            rapid, fără complicații.
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
            De ce este cursul online?
          </h3>
          <p>
            Pentru că timpul tău este prețios. Înveți oriunde și oricând, în
            ritmul tău, fără drumuri și fără program fix. Poți pune pauză, relua
            și revedea lecțiile de câte ori ai nevoie. Ai control total asupra
            procesului tău de învățare.
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
            Chiar pot învăța normal dintr-un curs online?
          </h3>
          <p>
            Da. Dacă te implici, reușești. Poți reveni la informație ori de câte
            ori simți că ai nevoie. Repetiția + practică = rezultate. Totul
            depinde de cât aplici ceea ce înveți
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
            Cât de repede pot să avansez?
          </h3>
          <p>
            Nu există un timp standard. Fiecare persoană asimilează diferit.
            Progresul depinde de cât exersezi și cât aplici. Diferența dintre 5
            coafuri și 50 de coafuri este uriașă. Practica nu doar ajută.
            Practica transformă.
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
            Și dacă nu îmi iese din prima?
          </h3>
          <p>
            Perfect. Nici nu trebuie. Hairstyling-ul nu este magie, este
            practică. Prima coafură este începutul. A zecea arată mai bine. A
            cincizecea? Alt nivel. Revii, corectezi, repeți. Nu „nu îți iese”.
            Încă înveți.
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
            Trebuie să am talent?
          </h3>
          <p>
            Nu. Trebuie să ai dorință. Talentul ajută, dar tehnica se învață.
            Majoritatea hairstyliștilor buni nu s-au născut „cu mâna formată” —
            au exersat-o. Constanța bate talentul. De fiecare dată.
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
            Dacă nu am cliente încă?
          </h3>
          <p>
            Este momentul perfect să începi. Exersezi pe modele, faci poze, îți
            construiești portofoliul. Clientele apar când văd rezultate. Iar
            rezultatele apar când începi.
          </p>
        </AnimatedContent>
      </div>
    </div>
  );
};

export default FaqSection;
