"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../core/cartContext";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);
  const cart = useCart();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let panels = gsap.utils.toArray(".panel");
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: slider.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + (slider.current?.offsetWidth ?? 0),
        markers: false,
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [component]);

  return (
    <div ref={component}>
      <div
        ref={slider}
        className="w-[600vw] h-screen flex flex-wrap relative overflow-hidden"
      >
        <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8 ">
          <div className="mx-auto max-w-7xl py-6 md:py-0 px-6 lg:px-8 flex flex-col justify-start h-full md:justify-center">
            <div className="hoz-grid mx-auto grid max-w-2xl grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg flex flex-col items-center md:items-start">
                  <h2 className="text-base/7 font-semibold text-accent text-center md:text-left">
                    Modul 1 — Arta și forma părului
                  </h2>
                  <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    De la anatomia părului până la instrumentele de bază.
                  </p>
                  <p className="mt-6 text-lg/6 lg:text-lg/8 text-gray-700 text-center md:text-left">
                    Înțelege structura și comportamentul părului, stăpânește
                    tehnicile fundamentale de tunsoare și descoperă cum forma
                    influențează rezultatul final — baza esențială pentru orice
                    stilist profesionist.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700 text-lg/4 lg:text-lg/6">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Arta și forma părului Step by Step.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        <span>Cele 3 forma in tunsoare Step by Step.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Ridicarea părului.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Tensionarea părului.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Coafatul.</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={async () => {
                        const isInCart = cart?.items.find(
                          (item) => item.id === "book_001"
                        );
                        if (!isInCart) {
                          cart?.addItem({
                            id: "module_001",
                            name: "Arte împletite în păr - Modul 1",
                            price: 59.99,
                            priceId: "price_1SXXcDK51mlAswumjOTcUXlp",
                            quantity: 1,
                          });
                          toast.info("Produsul a fost adăugat în coș.");
                        } else {
                          toast.info("Modulul este deja în coș.");
                        }
                      }}
                      className="px-6 py-8 bg-black text-white cursor-pointer"
                    >
                      Cumpără Modul 1
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                alt="Course image"
                src={`/cover_photo.jpeg`}
                width={1800}
                height={1800}
                className="hoz-img hidden lg:block h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
          </div>
        </div>

        <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8 ">
          <div className="mx-auto max-w-7xl py-6 md:py-0 px-6 lg:px-8 flex flex-col justify-start h-full md:justify-center">
            <div className="hoz-grid mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg  flex flex-col items-center md:items-start">
                  <h2 className="text-base/7 font-semibold text-accent text-center md:text-left">
                    Modul 2 — Arta și colorarea părului
                  </h2>
                  <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    Tehnici avansate de colorare și nuanțare profesională.
                  </p>
                  <p className="mt-6 text-lg/6 lg:text-lg/8 text-gray-700 text-center md:text-left">
                    Stăpânește teoria culorii, tehnicile de balayage, ombré și
                    highlights — învață să creezi nuanțe perfecte, să corectezi
                    culoarea și să aplici metode moderne de colorare pentru
                    rezultate spectaculoase și durabile.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700 text-lg/4 lg:text-lg/6">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Introducere, tehnici de colorare Step by Step.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        <span>
                          Prima vopsire și tehnici de nuanțare Step by Step.
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Vopsit la rădăcină Step by Step.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Decoloratul și tehnici de balayage Step by Step.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Pictura pe păr Step by Step.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Accente de culoare Step by Step.</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={async () => {
                        const isInCart = cart?.items.find(
                          (item) => item.id === "module_002"
                        );
                        if (!isInCart) {
                          cart?.addItem({
                            id: "module_002",
                            name: "Arte împletite în păr - Modul 2",
                            price: 59.99,
                            priceId: "price_1SXXcQK51mlAswumLyjFuI3N",
                            quantity: 1,
                          });
                          toast.info("Produsul a fost adăugat în coș.");
                        } else {
                          toast.info("Modulul este deja în coș.");
                        }
                      }}
                      className="px-6 py-8 bg-black text-white cursor-pointer"
                    >
                      Cumpără Modul 2
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                alt="Course image"
                src={`/image12.jpeg`}
                width={1800}
                height={1800}
                className="hoz-img hidden lg:block w-3xl h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
          </div>
        </div>

        <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8  text-white">
          <div className="mx-auto max-w-7xl py-6 md:py-0 px-6 lg:px-8 flex flex-col justify-start h-full md:justify-center">
            <div className="hoz-grid mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8 flex flex-col justify-center">
                <div className="lg:max-w-lg flex flex-col items-center md:items-start">
                  <h2 className="text-base/7 font-semibold text-accent text-center md:text-left">
                    Modul 3 — Arta și modelarea părului
                  </h2>
                  <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    Tehnici profesionale de styling și coafare avansată.
                  </p>
                  <p className="mt-6 text-lg/6 lg:text-lg/8 text-gray-700 text-center md:text-left">
                    Descoperă secretele styling-ului profesional: de la
                    utilizarea corectă a instrumentelor de coafat până la
                    tehnici avansate de coafare pentru diferite tipuri de păr și
                    ocazii speciale.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700 text-lg/4 lg:text-lg/6">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Introducere în lumea creației.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Coafatul cu peria plată Step by Step.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Coafatul cu peria rotundă Step by Step.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Coafatul cu difuzor Step by Step.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Creație cu baza in zona superioară Step by Step.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Creație cu baza in zona superioară Step by Step.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Creație cu baza in zona superioară Step by Step.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={async () => {
                        const isInCart = cart?.items.find(
                          (item) => item.id === "module_003"
                        );
                        if (!isInCart) {
                          cart?.addItem({
                            id: "module_003",
                            name: "Arte împletite în păr - Modul 3",
                            price: 59.99,
                            priceId: "price_1SXXcdK51mlAswum9dwK0uC6",
                            quantity: 1,
                          });
                          toast.info("Produsul a fost adăugat în coș.");
                        } else {
                          toast.info("Modulul este deja în coș.");
                        }
                      }}
                      className="px-6 py-8 bg-black text-white cursor-pointer"
                    >
                      Cumpără Modul 3
                    </Button>
                  </div>
                </div>
              </div>
              <Image
                alt="Course image"
                src={`/image9.jpeg`}
                width={1800}
                height={1800}
                className="hoz-img hidden lg:block w-3xl h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
