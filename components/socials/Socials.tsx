import { Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const SocialLinks = () => {
  const socials = [
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Youtube size={20} />, href: "#", label: "Youtube" },
    // Poți adăuga TikTok cu un SVG custom dacă e nevoie
  ];

  return (
    <div className="flex gap-3 mt-6">
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className="w-11 h-11 flex items-center justify-center rounded-full 
                     bg-white/5 border border-white/10 text-gray-400
                     hover:bg-primary hover:text-white hover:border-primary
                     transition-all duration-300 backdrop-blur-sm group"
        >
          <div className="group-hover:scale-110 transition-transform">
            {social.icon}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
