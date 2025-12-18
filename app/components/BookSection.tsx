"use client";

import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import { Button } from "@/components/ui/button";
import Carte from "@/public/carte.webp";
import Image from "next/image";
import { useCart } from "../core/cartContext";
import { toast } from "sonner";
import MagicBento from "@/components/bento-grid/MagicBento";
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

      <div className="w-full ">
        <div className="grid md:grid-cols-2 md:grid-rows-1 gap-4 lg:gap-6 ">
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
              căutam. Dedicată practicii și studiului, ea explorează coafura
              prin artă, psihologie, istorie, spiritualitate și comunicare.
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
                  toast.info("Produsul a fost adăugat în coș.");
                } else {
                  toast.info("Produsul este deja în coș.");
                }
              }}
            >
              Cumpară
            </Button>
          </FadeContent>
        </div>
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          className="flex flex-col gap-6 "
        >
          {" "}
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                aria-hidden="true"
                className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
              >
                <defs>
                  <pattern
                    x="50%"
                    y={-1}
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                  <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-indigo-600">
                      Deploy faster
                    </p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                      A better workflow
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-700">
                      Aliquet nec orci mattis amet quisque ullamcorper neque,
                      nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                      aliquam. Quisque id at vitae feugiat egestas.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-project-app-screenshot.png"
                  className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base/7 text-gray-600 lg:max-w-lg">
                    <p>
                      Faucibus commodo massa rhoncus, volutpat. Dignissim sed
                      eget risus enim. Mattis mauris semper sed amet vitae sed
                      turpis id. Id dolor praesent donec est. Odio penatibus
                      risus viverra tellus varius sit neque erat velit. Faucibus
                      commodo massa rhoncus, volutpat. Dignissim sed eget risus
                      enim. Mattis mauris semper sed amet vitae sed turpis id.
                    </p>
                    <ul role="list" className="mt-8 space-y-8 text-gray-600">
                      <li className="flex gap-x-3">
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Push to deploy.
                          </strong>{" "}
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          <strong className="font-semibold text-gray-900">
                            SSL certificates.
                          </strong>{" "}
                          Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                          irure qui lorem cupidatat commodo.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <span>
                          <strong className="font-semibold text-gray-900">
                            Database backups.
                          </strong>{" "}
                          Ac tincidunt sapien vehicula erat auctor pellentesque
                          rhoncus. Et magna sit morbi lobortis.
                        </span>
                      </li>
                    </ul>
                    <p className="mt-8">
                      Et vitae blandit facilisi magna lacus commodo. Vitae
                      sapien duis odio id et. Id blandit molestie auctor
                      fermentum dignissim. Lacus diam tincidunt ac cursus in
                      vel. Mauris varius vulputate et ultrices hac adipiscing
                      egestas. Iaculis convallis ac tempor et ut. Ac lorem vel
                      integer orci.
                    </p>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                      No server? No problem.
                    </h2>
                    <p className="mt-6">
                      Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
                      consequat in. Convallis arcu ipsum urna nibh. Pharetra,
                      euismod vitae interdum mauris enim, consequat vulputate
                      nibh. Maecenas pellentesque id sed tellus mauris, ultrices
                      mauris. Tincidunt enim cursus ridiculus mi. Pellentesque
                      nam sed nullam sed diam turpis ipsum eu a sed convallis
                      diam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
        </FadeContent>
        {/* <div className="bg-[url('/image25.webp')] h-[450px] md:h-[400px] bg-cover bg-center bg-no-repeat shadow-lg rounded-lg min-h-[300px] max-h-[450px] md:max-h-[400px] md:max-w-[360px] md:w-[300px] relative overflow-hidden md:justify-self-end self-center">
          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
        </div> */}
      </div>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className=" w-full"
      >
        <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent text-center">
          CE VEI INVATA
        </h2>
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/splash_hero.png')] bg-cover bg-center bg-no-repeat opacity-10 rounded-lg md:h-[170%] -z-[1] md:-top-[70px]"></div>
          <MagicBento />
        </div>
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
        className=" w-full"
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
                  Cum citești forma feței, direcția firelor, volumul natural și
                  cum creezi proporții corecte.
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
                  Întrebări simple, rezultate clare. Cum afli ce își dorește cu
                  adevărat clientul.
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
                  Proporții, linii, echilibru, detalii invizibile care schimbă
                  tot.
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
                  Subtonuri, reflexe, culoare potrivită pentru identitatea
                  fiecărui om.
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
                  Pași logici, tehnici sigure, cum protejezi firul și eviți
                  greșelile.
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
                  Coafuri simple și complexe, structuri, volum și expresivitate.
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
                  Psihologie, simbolistică, estetică — fundația unei imagini
                  reușite.
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
