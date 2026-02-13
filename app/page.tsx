import CourseCurriculum from "@/components/chapters-details/ChapterDetails";
import AboutMe from "./components/AboutMe";
import BookSection from "./components/BookSection";
import FaqSection from "./components/FaqSection";
import HairSalon from "./components/HairSalon";
import HeroSection from "./components/HeroSection";
import HorizontalScroll from "./components/HorizontalScroll";
import ContactSection from "./components/ContactSection";
export default function Home() {
  return (
    <div className="w-full overflow-clip">
      <HeroSection />
      <AboutMe />
      <BookSection />
      {/* <PhotosSection /> */}
      <HorizontalScroll />
      <HairSalon />
      <FaqSection />
      <ContactSection />
    </div>
  );
}
