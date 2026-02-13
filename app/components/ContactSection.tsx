"use client";

import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/FadeContent";
import SocialLinks from "@/components/socials/Socials";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { sendEmail } from "@/service/resend/contactEmail";
import { toast } from "sonner";

const ContactSection = () => {
  const [isPending, setIsPending] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsPending(true);
    const result = await sendEmail(formData);
    setIsPending(false);

    if (result.success) {
      toast.success("Mesajul a fost trimis cu succes!");
      (document.getElementById("contact-form") as HTMLFormElement).reset();
    } else {
      toast.error("A apărut o eroare. Te rugăm să încerci din nou.");
    }
  }

  return (
    <section
      className="py-24 w-full bg-[var(--primary)] text-white overflow-hidden"
      id="contact-section"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeContent blur duration={1000} easing="ease-out">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
                  SĂ ÎNCEPEM O <br />
                  <span className="text-gray-500">POVESTE NOUĂ</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-md">
                  Fie că dorești o programare în salon sau detalii despre
                  Masterclass, sunt aici să îți răspund.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      Telefon
                    </p>
                    <p className="text-lg">+40 7xx xxx xxx</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      Email
                    </p>
                    <p className="text-lg">office@fasonsalon.ro</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">
                      Adresă
                    </p>
                    <p className="text-lg">Strada Baia de Fier 10, București</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-[0.2em]">
                  Urmărește-mă
                </p>
                <SocialLinks />
              </div>
            </div>
          </FadeContent>

          <FadeContent blur duration={1200} delay={0.2}>
            <div className="relative p-8 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/10 backdrop-blur-xl">
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -z-10"></div>

              <form
                id="contact-form"
                action={handleSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">
                      Nume
                    </label>
                    <Input
                      name="name"
                      required
                      placeholder="Numele tău"
                      className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="email@exemplu.com"
                      className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">
                    Subiect
                  </label>
                  <Input
                    name="subject"
                    required
                    placeholder="Programare / Curs / Info"
                    className="bg-white/5 border-white/10 focus:border-primary h-12 rounded-xl text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 ml-1">
                    Mesaj
                  </label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Cum te pot ajuta?"
                    className="bg-white/5 border-white/10 focus:border-primary min-h-[150px] rounded-xl text-white"
                  />
                </div>

                <Button
                  disabled={isPending}
                  className="w-full h-14 bg-white text-black hover:bg-primary hover:text-white transition-all duration-300 rounded-xl font-bold text-lg"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Se trimite...
                    </>
                  ) : (
                    "Trimite Mesajul"
                  )}
                </Button>
              </form>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
