"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import AboutMe from "../AboutMe";
import BookSection from "../BookSection";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

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
      <div className="h-screen flex items-start justify-center">
        <AboutMe />
      </div>
      <div ref={slider} className="w-[600vw] h-screen flex flex-wrap">
        <div className="w-screen h-screen panel flex items-start justify-center">
          <BookSection />
        </div>
        <div className="w-screen h-screen panel bg-[url('/image22.jpeg')] bg-no-repeat bg-center bg-cover">
          ONE
        </div>
        <div className="w-screen h-screen panel bg-orange-500">TWO</div>
        <div className="w-screen h-screen panel bg-purple-600">THREE</div>
      </div>
      <div className="flex h-screen bg-yellow-400">Last Container</div>
    </div>
  );
}
