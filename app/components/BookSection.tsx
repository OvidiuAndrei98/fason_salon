"use client";

import AnimatedContent from "@/components/AnimatedContent";
import FadeContent from "@/components/FadeContent";
import { Button } from "@/components/ui/button";
import Carte from "@/public/carte.webp";
import Image from "next/image";
import { useCart } from "../core/cartContext";
import { toast } from "sonner";
import MagicBento from "@/components/bento-grid/MagicBento";
import CourseCurriculum from "@/components/chapters-details/ChapterDetails";
const BookSection = () => {
  const cart = useCart();
  return (
    <div
      className="w-full flex flex-col items-center max-w-[1024px] mx-auto"
      id="course-section"
    >
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
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
          className="flex flex-col gap-6 "
        >
          <div className="relative isolate overflow-hidden  px-4 lg:overflow-visible">
            <div className="grid grid-cols-1 gap-x-0 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base/7 font-semibold text-indigo-600">
                      Christina Gramma
                    </p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                      Arte Impletite in par - Curs complet
                    </h1>
                    <p className="mt-6 text-xl/8 text-gray-700">
                      Am scris acest curs cu gândul la materialele pe care eu
                      însămi le căutam. Dedicată practicii și studiului, ea
                      explorează coafura prin artă, psihologie, istorie,
                      spiritualitate și comunicare.
                    </p>
                  </div>
                </div>
              </div>
              <div className="-mt-12 pt-12 lg:pl-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden max-w-[400px] mx-auto md:max-w-full">
                <div className="flex flex-col  bg-[#5f67ff24] rounded-3xl border border-[#5f67ff44] backdrop-blur-md shadow-lg ">
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
                    className="flex flex-col p-[30px] items-center rounded-[32px] justify-center gap-[var(--spacing-s)] md:gap-[var(--spacing-m)]"
                  >
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
                          (item) => item.id === "book_001",
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
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8">
                <div className="lg:pr-4">
                  <div className="w-full text-base/7 text-gray-600 lg:max-w-lg">
                    <p>
                      Acest curs este răspunsul la toate întrebările pe care
                      le-am avut și eu la început de drum. Este o resursă creată
                      pentru a transforma curiozitatea în competență reală:{" "}
                      <span className="font-semibold text-accent">
                        vei învăța de la zero tehnicile de bază, explicate
                        minuțios și aplicate practic
                      </span>
                      , astfel încât să ai o fundație tehnică imbatabilă. Dar,
                      dincolo de mecanică, te invit să descoperi coafura ca pe
                      un limbaj complex. Vom explora împreună cum psihologia,
                      istoria și spiritualitatea se întâlnesc în fiecare
                      mișcare, transformând simplul act de a coafa într-o formă
                      autentică de artă și comunicare.{" "}
                      <span className="font-semibold text-accent">
                        Este ghidul complet
                      </span>{" "}
                      care îți oferă atât precizia tehnică, cât și profunzimea
                      creativă de care ai nevoie pentru a profesa cu încredere.
                    </p>
                    <div className="space-y-4 mt-4">
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
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
                              Cum citești forma feței, direcția firelor, volumul
                              natural și cum creezi proporții corecte.
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Fzionomiile Părului",
                                fullContent:
                                  "Cum citești forma feței, direcția firelor, volumul natural și cum creezi proporții corecte.",
                              }}
                            />
                          </div>
                        </details>
                      </div>

                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
                          <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                            <div className="flex items-center">
                              <span className="text-2xl font-bold text-accent mr-3">
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
                              Întrebări simple, rezultate clare. Cum afli ce își
                              dorește cu adevărat clientul.
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Comunicare",
                                fullContent:
                                  "Întrebări simple, rezultate clare. Cum afli ce își dorește cu adevărat clientul.",
                              }}
                            />
                          </div>
                        </details>
                      </div>

                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
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
                              Proporții, linii, echilibru, detalii invizibile
                              care schimbă tot.
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Arta si forma",
                                fullContent:
                                  "Proporții, linii, echilibru, detalii invizibile care schimbă tot.",
                              }}
                            />
                          </div>
                        </details>
                      </div>

                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
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
                              Subtonuri, reflexe, culoare potrivită pentru
                              identitatea fiecărui om.
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Arta si culoare",
                                fullContent:
                                  "Subtonuri, reflexe, culoare potrivită pentru identitatea fiecărui om.",
                              }}
                            />
                          </div>
                        </details>
                      </div>

                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
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
                              Pași logici, tehnici sigure, cum protejezi firul
                              și eviți greșelile.
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Decoloratul",
                                fullContent:
                                  "Pași logici, tehnici sigure, cum protejezi firul și eviți greșelile.",
                              }}
                            />
                          </div>
                        </details>
                      </div>

                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
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
                              Coafuri simple și complexe, structuri, volum și
                              expresivitate.
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Arta si modelarea parului",
                                fullContent:
                                  "Coafuri simple și complexe, structuri, volum și expresivitate.",
                              }}
                            />
                          </div>
                        </details>
                      </div>

                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
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
                              Psihologie, simbolistică, estetică — fundația unei
                              imagini reușite.
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Concepte",
                                fullContent:
                                  "Psihologie, simbolistică, estetică — fundația unei imagini reușite.",
                              }}
                            />
                          </div>
                        </details>
                      </div>
                    </div>
                    <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                      Nu vrei tot Cursul?.
                    </h2>
                    <p className="mt-6">
                      Fiecare capitol poate fi achiziționat și separat, la un
                      preț special. Ideal dacă vrei să aprofundezi doar anumite
                      tehnici sau concepte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeContent>
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
    </div>
  );
};

export default BookSection;
