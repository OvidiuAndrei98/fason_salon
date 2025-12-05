"use client";

import AboutMe from "./components/AboutMe";
import BookSection from "./components/BookSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import HorizontalScroll from "./components/HorizontalScroll";
import PhotosSection from "./components/PhotosSection";
import { useCart } from "./core/cartContext";

export default function Home() {
  const cart = useCart();
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutMe />
      <BookSection />
      <HorizontalScroll />
      <PhotosSection />
      <FaqSection />
    </div>
  );
}
