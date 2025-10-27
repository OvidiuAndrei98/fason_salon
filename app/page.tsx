import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center m-[0_auto] max-w-[1024px] bg-background font-sans dark:bg-black">
      <nav className="flex justify-center w-full px-8">
        <div className="flex  justify-between w-full  py-8">
          <p className="font-sans text-secondary-foreground">LOGO</p>
          <ul className="flex gap-10 text-secondary-foreground">
            <li>[HOME]</li>
            <li>[ABOUT]</li>
            <li>[CONTACT]</li>
          </ul>
        </div>
      </nav>
      <HeroSection />
    </div>
  );
}
