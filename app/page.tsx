import AboutMe from "./components/AboutMe";
import BookSection from "./components/BookSection";
import FaqSection from "./components/FaqSection";
import HairSalon from "./components/HairSalon";
import HeroSection from "./components/HeroSection";
import HorizontalScroll from "./components/HorizontalScroll";
import PhotosSection from "./components/PhotosSection";
export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutMe />
      <BookSection />
      <HorizontalScroll />
      <PhotosSection />
      <HairSalon />
      <FaqSection />
    </div>
  );
}
