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
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pt-4 lg:pr-8">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-accent text-center md:text-left">
                    Modul 1 — Fizionomii
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    De la anatomia părului până la instrumentele de bază.
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700 text-center md:text-left">
                    Analiză practică a formelor feței și a texturii părului —
                    identifici tipurile de fizionomie, alegi tunsorile și
                    tehnicile de styling potrivite pentru fiecare client, pentru
                    rezultate estetice și funcționale.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Înțelegerea formelor feței și a tipurilor de păr.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        <span>
                          Tipuri de păr (textură, porozitate, grosime)
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Instrumente esențiale și tehnici de bază.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Principii de tunsori și styling adaptate fizionomiei.
                      </span>
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
                        } else {
                          toast("Modulul este deja in cos.");
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
                className="hidden lg:block w-3xl h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
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
                    Modul 2 — Fizionomii
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    De la anatomia părului până la instrumentele de bază.
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700 text-center md:text-left">
                    Analiză practică a formelor feței și a texturii părului —
                    identifici tipurile de fizionomie, alegi tunsorile și
                    tehnicile de styling potrivite pentru fiecare client, pentru
                    rezultate estetice și funcționale.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Înțelegerea formelor feței și a tipurilor de păr.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        <span>
                          Tipuri de păr (textură, porozitate, grosime)
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Instrumente esențiale și tehnici de bază.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Principii de tunsori și styling adaptate fizionomiei.
                      </span>
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
                        } else {
                          toast("Modulul este deja in cos.");
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
                    Modul 3 — Fizionomii
                  </h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
                    De la anatomia părului până la instrumentele de bază.
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-700 text-center md:text-left">
                    Analiză practică a formelor feței și a texturii părului —
                    identifici tipurile de fizionomie, alegi tunsorile și
                    tehnicile de styling potrivite pentru fiecare client, pentru
                    rezultate estetice și funcționale.
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Înțelegerea formelor feței și a tipurilor de păr.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        <span>
                          Tipuri de păr (textură, porozitate, grosime)
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>Instrumente esențiale și tehnici de bază.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <strong className="text-indigo-600">•</strong>
                      <span>
                        Principii de tunsori și styling adaptate fizionomiei.
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
                        } else {
                          toast("Modulul este deja in cos.");
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
                className="hidden lg:block w-3xl h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
