import AboutMe from "./components/AboutMe";
import ArtWorkScroll from "./components/artwork-scroll/ArtWorkScroll";
import BookSection from "./components/BookSection";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <nav className="flex justify-center w-full px-8">
        <div className="flex  justify-between w-full  py-4">
          <p className="font-sans text-secondary-foreground">LOGO</p>
          <ul className="flex gap-10 text-secondary-foreground">
            <li>[HOME]</li>
            <li>[ABOUT]</li>
            <li>[CONTACT]</li>
          </ul>
        </div>
      </nav>
      <HeroSection />
      <ArtWorkScroll />
    </div>
  );
}
