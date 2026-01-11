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
    <div>
      <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent text-center">
        MODULE
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1024px] mx-auto px-4 [&>*:nth-child(3)]:md:col-span-2 [&>*:nth-child(3)]:md:max-w-[calc(50%-0.5rem)] [&>*:nth-child(3)]:md:mx-auto lg:grid-cols-3 lg:[&>*:nth-child(3)]:lg:max-w-full lg:[&>*:nth-child(3)]:lg:mx-0 lg:[&>*:nth-child(3)]:lg:col-span-1">
        {/* CARD MODUL 1 */}
        <div className="bg-white rounded-[2.5rem] flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(107,70,193,0.15)] transition-all duration-500 max-w-[400px] mx-auto">
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
                  Preț
                </span>
                <span className="text-xl font-black text-slate-900">
                  60 RON
                </span>
              </div>
              <button
                onClick={async () => {
                  const isInCart = cart?.items.find(
                    (item) => item.id === "module_001"
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
                className="bg-slate-900 cursor-pointer hover:bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-slate-200"
              >
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
        <div className="bg-white rounded-[2.5rem] flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(107,70,193,0.15)] transition-all duration-500 max-w-[400px] mx-auto">
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
                  Introducere, tehnici de colorare.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    2
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Prima vopsire și tehnici de nuanțare.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    3
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Vopsit la rădăcină.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    4
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Decoloratul și tehnici de balayage.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    5
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Pictura pe păr.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    6
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Accente de culoare.
                </p>
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-slate-50 flex items-end justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Preț
                </span>
                <span className="text-xl font-black text-slate-900">
                  60 RON
                </span>
              </div>
              <button
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
                className="bg-slate-900 cursor-pointer hover:bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-slate-200"
              >
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
        <div className="bg-white rounded-[2.5rem] flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-15px_rgba(107,70,193,0.15)] transition-all duration-500 max-w-[400px] mx-auto">
          <div className="p-3">
            <div className="h-52 w-full rounded-[2rem] overflow-hidden bg-slate-100">
              <Image
                width={300}
                height={300}
                src={`/cap-3-image.jpeg`}
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                alt="Modul 3"
              />
            </div>
          </div>
          <div className="px-7 pb-8 pt-4 flex flex-col flex-grow">
            <div className="mb-8">
              <span className="text-md font-semibold text-accent">
                Modul 3 — Arta și modelarea părului
              </span>
              <h3 className="text-xl font-black text-slate-900">
                Tehnici profesionale de styling și coafare avansată.
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
                  Introducere în lumea creației.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    2
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Coafatul cu peria plată Step by Step.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    3
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Coafatul cu peria rotundă Step by Step.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    4
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Coafatul cu difuzor Step by Step.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-none flex items-center h-5 text-center">
                  <span className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                    5
                  </span>
                </div>
                <p className="text-slate-600 text-[13px] leading-5 font-medium">
                  Creație cu baza in zona superioară Step by Step.
                </p>
              </div>
            </div>
            <div className="mt-auto pt-6 border-t border-slate-50 flex items-end justify-between">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Preț
                </span>
                <span className="text-xl font-black text-slate-900">
                  60 RON
                </span>
              </div>
              <button
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
                className="bg-slate-900 cursor-pointer hover:bg-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all active:scale-90 shadow-lg shadow-slate-200"
              >
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
    </div>
  );
}
