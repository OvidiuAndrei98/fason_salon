"use client";

import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import { Button } from "@/components/ui/button";
import Carte from "@/public/carte.png";
import Image from "next/image";
import { useCart } from "../core/cartContext";
import { toast } from "sonner";
const BookSection = () => {
  const cart = useCart();
  return (
    <div className="w-full flex flex-col items-center max-w-[1024px] mx-auto px-2 ">
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
          DESPRE CURS
        </h2>
      </FadeContent>

      <div className="w-full grid md:grid-cols-2 md:grid-rows-1 gap-4 lg:gap-6 ">
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
          delay={0.3}
        >
          <Image
            src={Carte}
            alt="Book Cover"
            className="w-full md:max-w-sm mx-auto "
          />
        </AnimatedContent>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          className="flex flex-col p-[30px] items-center rounded-[32px] bg-[#5f67ff24] justify-center gap-[var(--spacing-s)] md:gap-[var(--spacing-m)]"
        >
          <h2 className="text-secondary-foreground font-heading text-3xl font-extrabold tracking-wide">
            CURS COMPLET
          </h2>
          <p className="text-base md:text-base text-center">
            Am scris acest curs cu gândul la materialele pe care eu însămi le
            căutam. Dedicată practicii și studiului, ea explorează coafura prin
            artă, psihologie, istorie, spiritualitate și comunicare.
          </p>
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <span className="text-lg text-muted-foreground line-through">
                199.99 lei
              </span>
              <span className="text-3xl font-extrabold text-accent">
                149.99 lei
              </span>
            </div>
          </div>
          <span className="text-sm text-muted-foreground text-center">
            Cursul va fi livrat in format digital (PDF) prin email.
          </span>
          <Button
            className="p-7 rounded self-center text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background"
            onClick={async () => {
              const isInCart = cart?.items.find(
                (item) => item.id === "book_001"
              );
              if (!isInCart) {
                cart?.addItem({
                  id: "book_001",
                  name: "Arte împletite în păr - Curs complet",
                  price: 149.99,
                  priceId: "price_1SXXbpK51mlAswumLSp0IRJI",
                  quantity: 1,
                });
              } else {
                toast.info("Produsul este deja în coș.");
              }
            }}
          >
            Cumpară
          </Button>
        </FadeContent>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          className="flex flex-col gap-6 md:mt-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
              Aici vei găsi informații structurate ca într-un curs complet: de
              la tuns și colorare, până la coafuri elaborate și secretele
              armoniei estetice. Fiecare capitol e o lecție, fiecare imagine — o
              sursă de inspirație.
            </p>

            <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
              Tot ce a construit Cristina Grama în ani de experiență, concentrat
              într-un loc. O resursă pentru hairstyliști, artiști, visători și
              toți cei care cred că frumusețea se creează, nu se imită.
            </p>

            <p className="text-md md:text-lg text-muted-foreground leading-relaxed font-sans">
              Părul nu e doar materie — e poveste, culoare și mișcare. „Arte
              împletite în păr" nu se citește, se trăiește. Platforma reunește
              cunoștințe, tehnici și viziuni din arta hairstylingului, într-o
              formă gândită ca un curs complet. O carte care inspiră, educă și
              redefinește standardele meseriei.
            </p>

            <blockquote className="text-lg md:text-xl font-semibold text-secondary-foreground italic border-l-4 border-accent pl-4 mt-6">
              „O carte. O enciclopedie. O școală a frumuseții — semnată de
              Cristina Grama."
            </blockquote>
          </div>
        </FadeContent>
        <div className="bg-[url('/image25.jpeg')] h-[450px] md:h-[400px] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg min-h-[300px] max-h-[450px] md:max-h-[400px] md:max-w-[360px] md:w-[300px] relative overflow-hidden md:justify-self-end self-center">
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
        </div>
      </div>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="py-4 w-full"
      >
        <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent text-center">
          CE VEI INVATA
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          <div className="absolute inset-0 bg-[url('/splash_hero.png')] bg-cover bg-center bg-no-repeat opacity-10 rounded-lg md:h-[170%] -z-[1] md:-top-[70px]"></div>

          <div className="relative z-10 bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm hover:bg-accent/5 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-secondary-foreground font-sans">
              Tehnici de Tuns
            </h3>
            <p className="text-muted-foreground">
              Metode avansate de tuns pentru diferite tipuri de păr și stiluri
              moderne.
            </p>
          </div>

          <div className="relative z-10 bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm hover:bg-accent/5 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-secondary-foreground font-sans">
              Colorare Profesională
            </h3>
            <p className="text-muted-foreground">
              Secretele colorării, de la tehnici de bază până la efecte
              complexe.
            </p>
          </div>

          <div className="relative z-10 bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm hover:bg-accent/5 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-secondary-foreground font-sans">
              Coafuri Elaborate
            </h3>
            <p className="text-muted-foreground">
              Crearea unor coafuri sofisticate pentru evenimente speciale.
            </p>
          </div>

          <div className="relative z-10 bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm hover:bg-accent/5 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-secondary-foreground font-sans">
              Armonia Estetică
            </h3>
            <p className="text-muted-foreground">
              Principiile frumuseții și cum să le aplici în hairstyling.
            </p>
          </div>

          <div className="relative z-10 bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm hover:bg-accent/5 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-secondary-foreground font-sans">
              Psihologia Frumuseții
            </h3>
            <p className="text-muted-foreground">
              Cum influențează coafura încrederea și percepția de sine.
            </p>
          </div>

          <div className="relative z-10 bg-gradient-to-br from-accent/10 to-accent/5 p-6 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm hover:bg-accent/5 transition-colors">
            <h3 className="text-xl font-semibold mb-3 text-secondary-foreground font-sans">
              Business în Hairstyling
            </h3>
            <p className="text-muted-foreground">
              Strategii pentru dezvoltarea unei cariere de succes în beauty.
            </p>
          </div>
        </div>
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className="py-8 w-full"
      >
        <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent text-center">
          CAPITOLE
        </h2>
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-3">
                    01
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                    Fzionomiile Părului
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-3">
                  Bazele teoretice și practice ale artei coafurii
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Acest capitol introduce conceptele fundamentale ale
                  hairstylingului, de la anatomia părului până la instrumentele
                  de bază. Vei învăța despre tipurile de păr, texturi și cum să
                  alegi tehnicile potrivite pentru fiecare client.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-3 ">
                    02
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                    Comunicare
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-3">
                  Metode avansate pentru tunsori contemporane
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Explorează tehnicile moderne de tuns, de la bob-ul clasic la
                  tunsori asimetrice și texturate. Capitolul include ghiduri pas
                  cu pas pentru realizarea unor tunsori trendy și adaptarea lor
                  la forma feței.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-3">
                    03
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                    Arta si forma
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-3">
                  De la nuanțe clasice la efecte spectaculoase
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Descoperă secretele colorării profesionale: teoria culorilor,
                  tehnici de balayage, highlights și lowlights. Învață să creezi
                  tranziții perfecte și să obții culori vibrante și durabile.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-3">
                    04
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                    Arta si culoare
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-3">
                  Creații elaborate pentru momente speciale
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tehnici avansate pentru coafuri de nuntă, cocktail și
                  evenimente formale. De la chignons eleganți la împletituri
                  complexe, capitolul oferă ghiduri detaliate pentru crearea
                  unor coafuri memorabile.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-3">
                    05
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                    Decoloratul
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-3">
                  Relația cu clientul și impactul psihologic
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Înțelege impactul psihologic al coafurii asupra încrederii în
                  sine. Capitolul acoperă tehnici de comunicare eficientă cu
                  clienții și cum să creezi o experiență memorabilă în salon.
                </p>
              </div>
            </details>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-3">
                    06
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                    Arta si modelarea parului
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-3">
                  Strategii de succes în industria beauty
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ghidul complet pentru dezvoltarea unei cariere de succes: de
                  la deschiderea propriului salon la strategii de marketing și
                  fidelizarea clientelei. Incluye planuri de afaceri și sfaturi
                  financiare.
                </p>
              </div>
            </details>
          </div>
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-accent mr-3">
                    07
                  </span>
                  <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                    Concepte
                  </h3>
                </div>
                <svg
                  className="w-5 h-5 text-accent transition-transform group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-muted-foreground mb-3">
                  Strategii de succes în industria beauty
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ghidul complet pentru dezvoltarea unei cariere de succes: de
                  la deschiderea propriului salon la strategii de marketing și
                  fidelizarea clientelei. Incluye planuri de afaceri și sfaturi
                  financiare.
                </p>
              </div>
            </details>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default BookSection;
