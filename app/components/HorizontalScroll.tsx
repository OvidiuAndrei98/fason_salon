"use client";

import React from "react";
import Image from "next/image";
import { Info, ShoppingBag, Check } from "lucide-react";
import { useCart } from "../core/cartContext";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// 1. DATELE MODULELOR
const MODULES_DATA = [
  {
    id: "module_001",
    priceId: "price_1SXXcDK51mlAswumjOTcUXlp",
    num: 1,
    title: "Arta și forma părului",
    subtitle: "De la anatomia părului până la instrumentele de bază.",
    image: "/cap-1-image.jpeg",
    price: 60,
    features: [
      "Arta și forma părului Step by Step.",
      "Cele 3 forme în tunsoare Step by Step.",
      "Ridicarea părului.",
      "Tensionarea părului.",
      "Coafatul.",
    ],
    fullDescription:
      "Acest modul reprezintă fundația teoretică și practică. Vei învăța nu doar cum să ții foarfeca, ci și psihologia din spatele fiecărei tăieturi. Include demonstrații detaliate despre dinamica firului de păr și alegerea unghiurilor în funcție de fizionomie.",
  },
  {
    id: "module_002",
    priceId: "price_1SXXcQK51mlAswumLyjFuI3N",
    num: 2,
    title: "Arta și colorarea părului",
    subtitle: "Tehnici avansate de colorare și nuanțare profesională.",
    image: "/cap-2-image.jpeg",
    price: 60,
    features: [
      "Introducere, tehnici de colorare.",
      "Prima vopsire și tehnici de nuanțare.",
      "Vopsit la rădăcină.",
      "Decoloratul și tehnici de balayage.",
      "Pictura pe păr.",
      "Accente de culoare.",
    ],
    fullDescription:
      "Explorează universul culorilor. De la teoria culorilor la tehnici complexe de Balayage și AirTouch. Vei înțelege cum să neutralizezi tonurile nedorite și cum să creezi treceri perfecte care rezistă în timp.",
  },
  {
    id: "module_003",
    priceId: "price_1SXXcdK51mlAswum9dwK0uC6",
    num: 3,
    title: "Arta și modelarea părului",
    subtitle: "Tehnici profesionale de styling și coafare avansată.",
    image: "/cap-3-image.jpeg",
    price: 60,
    features: [
      "Introducere în lumea creației.",
      "Coafatul cu peria plată Step by Step.",
      "Coafatul cu peria rotundă Step by Step.",
      "Coafatul cu difuzor Step by Step.",
      "Creație cu baza în zona superioară.",
    ],
    fullDescription:
      "Styling-ul este cel care vinde tunsoarea. În acest modul ne concentrăm pe finish-ul perfect. Învățăm să folosim texturile, să dăm volum fără să încărcăm părul și să realizăm coafuri de podium folosind tehnici rapide și eficiente.",
  },
];

export default function HorizontalScroll() {
  const cart = useCart();

  return (
    <div id="module-section" className="py-20 bg-slate-50/50">
      <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-5xl mb-12 font-extrabold tracking-tight bg-gradient-to-r from-slate-800 via-slate-500 to-slate-800 bg-clip-text text-transparent text-center uppercase">
          Module Curs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES_DATA.map((module) => (
            <div
              key={module.id}
              className="group bg-white rounded-[2.5rem] flex flex-col border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(107,70,193,0.12)] transition-all duration-500 overflow-hidden"
            >
              {/* Imagine */}
              <div className="p-3">
                <div className="h-56 w-full rounded-[2rem] overflow-hidden bg-slate-100 relative">
                  <Image
                    fill
                    src={module.image}
                    className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    alt={module.title}
                  />
                </div>
              </div>

              {/* Conținut */}
              <div className="px-7 pb-8 pt-4 flex flex-col flex-grow">
                <div className="mb-6">
                  <span className="text-[13px] font-bold text-purple-600 uppercase tracking-wider">
                    Modul {module.num} — {module.title}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2 leading-tight">
                    {module.subtitle}
                  </h3>
                </div>

                <div className="space-y-3 mb-8">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-none mt-1">
                        <div className="w-5 h-5 rounded-full bg-purple-50 flex items-center justify-center text-[10px] text-purple-600 font-bold border border-purple-100">
                          {idx + 1}
                        </div>
                      </div>
                      <p className="text-slate-600 text-[13px] leading-5 font-medium">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Footer cu Acțiuni */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Preț
                    </span>
                    <span className="text-2xl font-black text-slate-900">
                      {module.price}{" "}
                      <span className="text-sm font-medium text-slate-500">
                        RON
                      </span>
                    </span>
                  </div>

                  <div className="flex gap-2">
                    {/* MODAL DETALII */}
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="bg-slate-50 hover:bg-slate-100 text-slate-600 p-3 rounded-2xl transition-all active:scale-90 border border-slate-100 cursor-pointer">
                          <Info size={20} />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[550px] rounded-[2.5rem] bg-white p-0 overflow-hidden border-none shadow-2xl">
                        <div className="relative h-48 w-full">
                          <Image
                            src={module.image}
                            fill
                            className="object-cover"
                            alt="Cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                        </div>
                        <div className="px-8 pb-10 pt-4">
                          <DialogHeader>
                            <span className="text-purple-600 font-bold text-xs uppercase tracking-widest mb-1">
                              Programă Completă • Modul {module.num}
                            </span>
                            <DialogTitle className="text-3xl font-black text-slate-900 leading-tight">
                              {module.title}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="mt-6 space-y-6">
                            <p className="text-slate-600 leading-relaxed italic border-l-4 border-purple-200 pl-4">
                              {module.fullDescription}
                            </p>
                            <div className="grid grid-cols-1 gap-3 bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
                              <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                                <Check size={18} className="text-green-500" />{" "}
                                Lecții incluse:
                              </h4>
                              {module.features.map((f, i) => (
                                <div
                                  key={i}
                                  className="flex gap-3 text-sm text-slate-600 border-b border-slate-200/40 pb-2 last:border-0"
                                >
                                  <span className="font-bold text-purple-400">
                                    {i + 1}.
                                  </span>
                                  {f}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>

                    {/* BUTON CUMPĂRĂ */}
                    <button
                      onClick={() => {
                        const isInCart = cart?.items.find(
                          (item) => item.id === module.id,
                        );
                        if (!isInCart) {
                          cart?.addItem({
                            id: module.id,
                            name: `Modul ${module.num}: ${module.title}`,
                            price: module.price,
                            priceId: module.priceId,
                            quantity: 1,
                          });
                          toast.success("Adăugat în coș cu succes!");
                        } else {
                          toast.info("Acest modul se află deja în coș.");
                        }
                      }}
                      className="bg-slate-900 hover:bg-purple-600 text-white p-3 px-5 rounded-2xl flex items-center gap-2 transition-all active:scale-95 shadow-xl shadow-slate-200 cursor-pointer"
                    >
                      <ShoppingBag size={20} />
                      <span className="font-bold text-sm tracking-wide">
                        CUMPĂRĂ
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
