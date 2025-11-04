"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let panels = gsap.utils.toArray(".panel");
    const pixelsPause = 300;
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
      <div className="flex flex-col justify-center items-center h-screen bg-yellow-400">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>
      <div ref={slider} className="w-[600vw] h-screen flex flex-wrap">
        <div className="w-screen h-screen panel bg-blue-600">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen panel bg-red-600">ONE</div>
        <div className="w-screen h-screen panel bg-orange-500">TWO</div>
        <div className="w-screen h-screen panel bg-purple-600">THREE</div>
      </div>
      <div className="flex h-screen bg-yellow-400">Last Container</div>
    </div>
  );
}
