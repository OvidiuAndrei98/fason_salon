import AboutMe from "./components/AboutMe";
import BookSection from "./components/BookSection";
import FaqSection from "./components/FaqSection";
import HairSalon from "./components/HairSalon";
import HeroSection from "./components/HeroSection";
import HorizontalScroll from "./components/HorizontalScroll";
import PhotosSection from "./components/PhotosSection";
export default function Home() {
  return (
    <div className="w-full ">
      <HeroSection />
      <AboutMe />
      <BookSection />
      {/* <PhotosSection /> */}
      <HorizontalScroll />
      <HairSalon />
      <FaqSection />
    </div>
  );
}
