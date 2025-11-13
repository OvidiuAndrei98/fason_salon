import AboutMe from "./components/AboutMe";
import BookSection from "./components/BookSection";
import FaqSection from "./components/FaqSection";
import HeroSection from "./components/HeroSection";
import PhotosSection from "./components/PhotosSection";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <AboutMe />
      <BookSection />
      <PhotosSection />
      <FaqSection />
    </div>
  );
}
