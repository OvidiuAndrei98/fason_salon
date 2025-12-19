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
  const cart = useCart();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1024px] mx-auto px-[32px] py-[50px]">
      {/* CARD MODUL 1 */}
      <div className="bg-white rounded-[2.5rem] flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(107,70,193,0.15)] transition-all duration-500">
        <div className="p-3">
          <div className="h-52 w-full rounded-[2rem] overflow-hidden bg-slate-100">
            <Image
              width={300}
              height={300}
              src={`/cap-1-image.jpeg`}
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              alt="Modul 1"
            />
          </div>
        </div>

        <div className="px-7 pb-8 pt-4 flex flex-col flex-grow">
          <div className="mb-8">
            <span className="text-md font-semibold text-accent">
              Modul 1 — Arta și forma părului
            </span>
            <h3 className="text-xl font-black text-slate-900">
              De la anatomia părului până la instrumentele de bază.
            </h3>
          </div>
          {/* LISTA CORECTATĂ - ALINIERE PERFECTĂ PE ORIZONTALĂ */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="flex-none flex items-center h-5">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  1
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Arta și forma părului Step by Step.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-none flex items-center h-5">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  2
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Cele 3 forme în tunsoare Step by Step.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-none flex items-center h-5">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  3
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Ridicarea părului.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-none flex items-center h-5">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  4
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Tensionarea părului.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex-none flex items-center h-5">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  5
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Coafatul.
              </p>
            </div>
          </div>

          {/* Pret si Actiune */}
          <div className="mt-auto pt-6 border-t border-slate-50 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Investiție
              </span>
              <span className="text-xl font-black text-slate-900">149 RON</span>
            </div>
            <button className="bg-slate-900 hover:bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-slate-200">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MODUL 2 - REPETĂ ACEEAȘI STRUCTURĂ DE LISTĂ */}
      <div className="bg-white rounded-[2.5rem] flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(107,70,193,0.15)] transition-all duration-500">
        <div className="p-3">
          <div className="h-52 w-full rounded-[2rem] overflow-hidden bg-slate-100">
            <Image
              src={`/cap-2-image.jpeg`}
              width={300}
              height={300}
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              alt="Modul 2"
            />
          </div>
        </div>
        <div className="px-7 pb-8 pt-4 flex flex-col flex-grow">
          <div className="mb-8">
            <span className="text-md font-semibold text-accent">
              Modul 2 — Arta și colorarea părului
            </span>
            <h3 className="text-xl font-black text-slate-900">
              Tehnici avansate de colorare și nuanțare profesională.
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  1
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Introducere, tehnici de colorare Step by Step.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  2
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Prima vopsire și tehnici de nuanțare Step by Step.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  3
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Vopsit la rădăcină Step by Step.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  4
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Decoloratul și tehnici de balayage Step by Step.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  5
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Pictura pe păr Step by Step.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  6
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Accente de culoare Step by Step.
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6 border-t border-slate-50 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Investiție
              </span>
              <span className="text-xl font-black text-slate-900">199 RON</span>
            </div>
            <button className="bg-slate-900 hover:bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-slate-200">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MODUL 3 - REPETĂ ACEEAȘI STRUCTURĂ DE LISTĂ */}
      <div className="bg-white rounded-[2.5rem] flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(107,70,193,0.15)] transition-all duration-500">
        <div className="p-3">
          <div className="h-52 w-full rounded-[2rem] overflow-hidden bg-slate-100">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              alt="Modul 3"
            />
          </div>
        </div>
        <div className="px-7 pb-8 pt-4 flex flex-col flex-grow">
          <div className="mb-8">
            <span className="text-[10px] font-black text-purple-600 uppercase tracking-[0.2em]">
              Modulul 03
            </span>
            <h3 className="text-xl font-black text-slate-900 leading-tight mt-1">
              BUSINESS & SCALARE
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  1
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Vinde-ți munca la preț premium
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  2
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Găsirea clienților internaționali
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-none flex items-center h-5 text-center">
                <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                  3
                </span>
              </div>
              <p className="text-slate-600 text-[13px] leading-5 font-medium">
                Contracte și management de proiect
              </p>
            </div>
          </div>
          <div className="mt-auto pt-6 border-t border-slate-50 flex items-end justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Investiție
              </span>
              <span className="text-xl font-black text-slate-900">249 RON</span>
            </div>
            <button className="bg-slate-900 hover:bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-slate-200">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div ref={component} className="overflow-hidden">
    //   <div
    //     ref={slider}
    //     className="w-[600vw] h-screen flex flex-wrap relative overflow-hidden"
    //   >
    //     <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8 ">
    //       <div className="mx-auto max-w-7xl py-6 md:py-0 px-6 lg:px-8 flex flex-col justify-center h-full md:justify-center">
    //         <div className="hoz-grid mx-auto grid max-w-2xl grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    //           <div className="lg:pt-4 lg:pr-8">
    //             <div className="lg:max-w-lg flex flex-col items-center md:items-start">
    //               <h2 className=" font-semibold text-2xl text-accent text-center md:text-left tracking-wide">
    //                 Modul 1 — Arta și forma părului
    //               </h2>
    //               <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
    //                 De la anatomia părului până la instrumentele de bază.
    //               </p>
    //               <p className="mt-6 text-lg/6 lg:text-lg/8 text-gray-700 text-center md:text-left">
    //                 Înțelege structura și comportamentul părului, stăpânește
    //                 tehnicile fundamentale de tunsoare și descoperă cum forma
    //                 influențează rezultatul final — baza esențială pentru orice
    //                 stilist profesionist.
    //               </p>
    //               <ul className="mt-4 space-y-2 text-gray-700 text-lg/4 lg:text-lg/4">
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>Arta și forma părului Step by Step.</span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>
    //                     <span>Cele 3 forme în tunsoare Step by Step.</span>
    //                   </span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>Ridicarea părului.</span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>Tensionarea părului.</span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>Coafatul.</span>
    //                 </li>
    //               </ul>
    //               <div className="mt-6 flex flex-col gap-2">
    //                 <Button
    //                   onClick={async () => {
    //                     const isInCart = cart?.items.find(
    //                       (item) => item.id === "module_001"
    //                     );
    //                     if (!isInCart) {
    //                       cart?.addItem({
    //                         id: "module_001",
    //                         name: "Arte împletite în păr - Modul 1",
    //                         price: 59.99,
    //                         priceId: "price_1SXXcDK51mlAswumjOTcUXlp",
    //                         quantity: 1,
    //                       });
    //                       toast.info("Produsul a fost adăugat în coș.");
    //                     } else {
    //                       toast.info("Modulul este deja în coș.");
    //                     }
    //                   }}
    //                   className="px-6 py-8 bg-black text-white cursor-pointer"
    //                 >
    //                   Cumpără Modul 1
    //                 </Button>
    //                 <span className="text-sm text-muted-foreground text-center">
    //                   Modulul va fi livrat in format digital (PDF) prin email.
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <Image
    //             alt="Course image"
    //             src={`/cap-1-image.jpeg`}
    //             width={1800}
    //             height={1800}
    //             className="hoz-img hidden lg:block h-[600px] max-w-none rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8 ">
    //       <div className="mx-auto max-w-7xl py-6 md:py-0 px-6 lg:px-8 flex flex-col justify-center h-full md:justify-center">
    //         <div className="hoz-grid mx-auto grid max-w-2xl grid-cols-1 gap-x-0 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    //           <div className="lg:pt-4 lg:pr-8 lg:pl-[85px]">
    //             <div className="lg:max-w-lg  flex flex-col items-center md:items-start">
    //               <h2 className="text-2xl font-semibold text-accent text-center md:text-left tracking-wide">
    //                 Modul 2 — Arta și colorarea părului
    //               </h2>
    //               <p className="mt-2 text-2xl lg:text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl text-center md:text-left">
    //                 Tehnici avansate de colorare și nuanțare profesională.
    //               </p>
    //               <p className="mt-6 text-lg/6 lg:text-lg/8 text-gray-700 text-center md:text-left">
    //                 Stăpânește teoria culorii, tehnicile de balayage, ombré și
    //                 highlights — învață să creezi nuanțe perfecte, să corectezi
    //                 culoarea și să aplici metode moderne de colorare pentru
    //                 rezultate spectaculoase și durabile.
    //               </p>
    //               <ul className="mt-4 space-y-2 text-gray-700 text-lg/4 lg:text-lg/4">
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>
    //                     Introducere, tehnici de colorare Step by Step.
    //                   </span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>
    //                     <span>
    //                       Prima vopsire și tehnici de nuanțare Step by Step.
    //                     </span>
    //                   </span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>Vopsit la rădăcină Step by Step.</span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>
    //                     Decoloratul și tehnici de balayage Step by Step.
    //                   </span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>Pictura pe păr Step by Step.</span>
    //                 </li>
    //                 <li className="flex items-start gap-3">
    //                   <strong className="text-indigo-600">•</strong>
    //                   <span>Accente de culoare Step by Step.</span>
    //                 </li>
    //               </ul>
    //               <div className="mt-6 flex flex-col gap-2">
    //                 <Button
    //                   onClick={async () => {
    //                     const isInCart = cart?.items.find(
    //                       (item) => item.id === "module_002"
    //                     );
    //                     if (!isInCart) {
    //                       cart?.addItem({
    //                         id: "module_002",
    //                         name: "Arte împletite în păr - Modul 2",
    //                         price: 59.99,
    //                         priceId: "price_1SXXcQK51mlAswumLyjFuI3N",
    //                         quantity: 1,
    //                       });
    //                       toast.info("Produsul a fost adăugat în coș.");
    //                     } else {
    //                       toast.info("Modulul este deja în coș.");
    //                     }
    //                   }}
    //                   className="px-6 py-8 bg-black text-white cursor-pointer"
    //                 >
    //                   Cumpără Modul 2
    //                 </Button>
    //                 <span className="text-sm text-muted-foreground text-center">
    //                   Modulul va fi livrat in format digital (PDF) prin email.
    //                 </span>
    //               </div>
    //             </div>
    //           </div>
    //           <Image
    //             alt="Course image"
    //             src={`/cap-2-image.jpeg`}
    //             width={1800}
    //             height={1800}
    //             className="hoz-img hidden lg:block w-3xl max-w-none h-[600px] rounded-xl shadow-2xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0 shadow-[8px_16px_40px_0px_rgba(0,_0,_0,_0.3)]"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <div className="w-screen h-screen panel flex flex-col items-center justify-center gap-6 p-8  text-white"></div>
    //   </div>
    // </div>
  );
}
