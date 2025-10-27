import Image from "next/image";
import HeroImage from "@/public/hero_image.webp";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col ">
      <div className="flex flex-col">
        <h1 className=" font-heading text-secondary-foreground pt-[50px] font-bold text-[clamp(2rem,_15vw,_10rem)] uppercase leading-none tracking-wide m-0 p-0 text-nowrap">
          CHRISTINA GRAMMA
        </h1>
        <h2 className="self-end font-heading text-[clamp(1rem,_3vw,_1.5rem)] font-extrabold tracking-wider bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent">
          ARTE împletite în PĂR
        </h2>
        <Image
          className="absolute top-[55%] mx-auto left-[50%] translate-x-[-50%] w-[90vw] max-w-[700px] h-auto"
          src={HeroImage}
          alt="hero-image"
        />
      </div>

      <div className="w-full max-w-[600px]  text-center text-secondary-foreground px-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries.
      </div>
    </div>
  );
};

export default HeroSection;
