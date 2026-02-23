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
                    <p className="text-base/7 font-semibold text-indigo-600 text-center lg:text-left">
                      Christina Gramma
                    </p>
                    <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center lg:text-left">
                      Arte Impletite in par - Curs complet
                    </h1>
                  </div>
                </div>
              </div>
              <div className="-mt-12 pt-12 lg:pl-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden max-w-[400px] mx-auto md:max-w-full">
                <div className="flex flex-col bg-[#5f67ff24] rounded-3xl border border-[#5f67ff44] backdrop-blur-md shadow-lg overflow-hidden">
                  {/* SECTIUNE VIDEO (Inlocuieste imaginea) */}
                  <div className="relative w-full">
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
                      className="w-full"
                    >
                      <div className="relative aspect-[4/5] w-full overflow-hidden">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                          poster="/CRISTINA.webp" // Folosim imaginea veche ca placeholder pana incarca video
                        >
                          <source
                            src="https://firebasestorage.googleapis.com/v0/b/salon-fason.firebasestorage.app/o/public%2Fcourse_preview.webm?alt=media&token=94783050-7e9e-4f74-8a76-d7c6223c1bcc"
                            type="video/webm"
                          />
                          {/* Daca ai si varianta MP4, o poti pune aici ca backup */}
                          Browserul tău nu suportă redarea video.
                        </video>

                        {/* Overlay subtil pentru profunzime */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#00000040] to-transparent pointer-events-none" />
                      </div>
                    </AnimatedContent>
                  </div>

                  {/* SECTIUNE DETALII SI CUMPARARE */}
                  <FadeContent
                    blur={true}
                    duration={1000}
                    easing="ease-out"
                    initialOpacity={0}
                    className="flex flex-col p-[30px] items-center justify-center gap-[var(--spacing-s)] md:gap-[var(--spacing-m)]"
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

                    <span className="text-sm text-muted-foreground text-center px-4">
                      Cursul va fi livrat in format digital (PDF) prin email.
                    </span>

                    <Button
                      className="w-full md:w-auto p-7 rounded-xl self-center text-xl bg-foreground text-background hover:bg-accent active:bg-accent hover:text-secondary-background transition-all duration-300 font-bold"
                      onClick={async () => {
                        const isInCart = cart?.items.find(
                          (item: any) => item.id === "book_001",
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
                  <div className="w-full lg:max-w-lg">
                    <div className="flex flex-col gap-8 text-white/90 leading-relaxed font-light text-lg">
                      {/* Paragraful Introductiv - Stil Editorial */}
                      <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-3 first-letter:float-left text-base/7 text-gray-600">
                        Născut din dorința de a redefini standardele în educația
                        profesională din domeniul frumuseții, acest curs semnat
                        de{" "}
                        <span className="font-semibold text-accent">
                          Cristina Grama
                        </span>{" "}
                        propune o abordare profundă și rafinată asupra artei
                        coafurii. Mai mult decât un program tehnic, este o
                        incursiune în universul esteticii, al creativității și
                        al construcției vizuale conștiente.
                      </p>

                      <div className="pl-6 border-l-2 border-accent/30 py-2 my-4 rounded-r-2xl">
                        <p className="text-base/7 text-gray-600">
                          Structura conținutului integrează armonios{" "}
                          <span className="text-accent underline underline-offset-4 decoration-1">
                            tunsoarea, culoarea, stylingul și consultanța
                          </span>
                          , alături de istoria coafurii și repere artistice
                          fundamentale. Formăm profesioniști capabili să creeze
                          cu viziune, echilibru și identitate proprie.
                        </p>
                      </div>

                      <p className="text-base/7 text-gray-600">
                        Este o experiență educațională care transformă practica
                        într-o formă autentică de expresie artistică. Cursul te
                        conduce de la prima întâlnire cu instrumentele profesiei
                        până la etapa în care ajungi să le stăpânești cu{" "}
                        <span className="italic">
                          măiestrie, precizie și deplină încredere
                        </span>
                        , la nivel de excelență profesională.
                      </p>
                    </div>
                    <div className="space-y-4 mt-4">
                      <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg shadow-md border border-accent/20 backdrop-blur-sm">
                        <details className="group" name="acordeon-curs">
                          <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-accent/5 transition-colors h-[60px]">
                            <div className="flex items-center">
                              <span className="text-2xl font-bold text-accent mr-3">
                                01
                              </span>
                              <h3 className="text-lg font-semibold text-secondary-foreground font-sans">
                                Hairstylingul: Principii, Estetică și Identitate
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
                            <div className="text-muted-foreground mb-4 text-sm leading-relaxed">
                              • Hair Design – artă, modă, evoluție • Stiluri •
                              Transpunerea stilurilor în trenduri • Fizionomii •
                              Proporții • Formele feței • Comunicare •
                              Psihologia comunicării verbale și nonverbale
                            </div>
                            <CourseCurriculum
                              chapter={{
                                title:
                                  " Hairstylingul: Principii, Estetică și Identitate",
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
                                Universul Tunsorii
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
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                              • Artă și formă • Introducere în lumea tunsorii •
                              Cărările • Tehnica de tăiere a părului • Tehnica
                              în tunsoare • Cele trei forme în tunsoare •
                              Ridicarea • Redirecționarea • Deconectarea •
                              Tensionarea părului • Poziția corpului • Coafatul
                              • Step by Step
                            </p>
                            <CourseCurriculum
                              chapter={{
                                title: "Universul Tunsorii",
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
                                Știința arta si psihologia culorii
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
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                              • Artă și culoare • Introducere în lumea culorii •
                              Simbolistica și psihologia culorii • Colorimetrie
                              • Armonia și acordurile cromatice • Contraste
                              cromatice • Părul și lumea culorii • Tehnici de
                              colorare • Prima vopsire • Vopsitul la rădăcină •
                              Decoloratul • Degrade balayage • Șuvițe • Pictură
                              pe păr • Step by Step
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
                                Stilizarea coafurii – finisare finala
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
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                              Arta și modelarea părului • Introducere în lumea
                              creației • Pregătirea părului • Adaptare la forma
                              feței • Step by Step
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
                                Creativitate – De la tehnică la concept
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
                            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                              • Concepte • Cum se face o colecție? • Colecții •
                              Jazz • J’Adore Brâncuși • Transilvania, mon amour
                              • Moldova – „iubiți, creați, sperați” •
                              Sarmizegetusa • România Underground • Ecouri
                              brâncovenești • Călătorie • Echilibru • Echilibru
                              – Partea a doua • Praf • Abstract 1 – Arte
                              integrate • Abstract 2 – Armonia artelor •
                              Cunoaștere, creație, credință – • Tinerețe fără
                              bătrânețe • ROGVAIV – • Experimental • Pantone •
                              Cuvânt în încheiere
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
                    </div>
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
