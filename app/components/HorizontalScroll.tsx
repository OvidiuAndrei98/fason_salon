"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../core/cartContext";

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
        markers: true,
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-accent text-center md:text-left">
                    Modul 1 — Introducere
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    Bazele serviciilor: poziționare, portofoliu și primii
                    clienți
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700 text-center md:text-left">
                    În Modulul 1 primești elementele esențiale pentru a-ți
                    construi un profil profesional, a atrage primii clienți și a
                    începe vânzările eficient.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Structurarea profilului și descrierea serviciilor.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Cum să alegi și să pregătești fotografiile pentru
                        portofoliu.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Strategii simple de preț și pachete pentru început.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Setări de contact și gestionare a rezervărilor.
                      </span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={async () => {
                        cart?.addItem({
                          id: "module_001",
                          name: "Arte împletite în păr - Modul 1",
                          price: 59.99,
                          priceId: "price_1SXXcDK51mlAswumjOTcUXlp",
                          quantity: 1,
                        });
                      }}
                      className="px-6 py-2 bg-black text-white rounded block text-center"
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
                className="hidden lg:block lg:w-3xl h-[600px]  max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
          </div>
        </div>

        <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8 ">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-accent text-center md:text-left">
                    Modul 2 — Practic
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    Tehnici practice, servicii live și gestionarea clienților
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700 text-center md:text-left">
                    În Modulul 2 treci la practică: sesiuni reale, workflow
                    eficient și metode de livrare care îi impresionează pe
                    clienți.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Planificarea și desfășurarea unei sesiuni profesionale.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Tehnici de comunicare și gestionare a așteptărilor.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Flux de lucru pentru editare rapidă și livrare.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Strategii de fidelizare și recomandări.</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={async () => {
                        cart?.addItem({
                          id: "module_002",
                          name: "Arte împletite în păr - Modul 2",
                          price: 59.99,
                          priceId: "price_1SXXcQK51mlAswumLyjFuI3N",
                          quantity: 1,
                        });
                      }}
                      className="px-6 py-2 bg-black text-white rounded block text-center"
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
                className="hidden lg:block w-3xl h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
          </div>
        </div>

        <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8  text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-accent text-center md:text-left">
                    Modul 3 — Avansat
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    Tehnici practice, servicii live și gestionarea clienților
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700 text-center md:text-left">
                    În Modulul 2 treci la practică: sesiuni reale, workflow
                    eficient și metode de livrare care îi impresionează pe
                    clienți.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Planificarea și desfășurarea unei sesiuni profesionale.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Tehnici de comunicare și gestionare a așteptărilor.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Flux de lucru pentru editare rapidă și livrare.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Strategii de fidelizare și recomandări.</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button
                      onClick={async () => {
                        cart?.addItem({
                          id: "module_003",
                          name: "Arte împletite în păr - Modul 3",
                          price: 59.99,
                          priceId: "price_1SXXcdK51mlAswum9dwK0uC6",
                          quantity: 1,
                        });
                      }}
                      className="px-6 py-2 bg-black text-white rounded block text-center"
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
                className="hidden lg:block w-3xl h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
