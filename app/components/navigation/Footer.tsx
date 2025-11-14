import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-6 mt-12 border-t border-primary/20">
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold">
              CG
            </div>
            <div>
              <p className="text-base font-semibold font-sans">
                Christina Gramma
              </p>
              <p className="text-xs text-primary-foreground/80 font-sans">
                Fason Salon — Hair Studio
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <a
              href="/"
              className="text-primary-foreground/90 hover:underline font-sans"
            >
              Acasa
            </a>
            <a
              href="/services"
              className="text-primary-foreground/90 hover:underline font-sans"
            >
              Carte
            </a>
            <a
              href="/about"
              className="text-primary-foreground/90 hover:underline font-sans"
            >
              Cumpara
            </a>
            <a
              href="/contact"
              className="text-primary-foreground/90 hover:underline font-sans"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-primary-foreground/80 hover:underline font-sans"
            >
              Termeni și Condiții
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded hover:bg-white/5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M15 11.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M17.5 6.5h.01"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded hover:bg-white/5"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M18 2h-3a4 4 0 0 0-4 4v2H8v3h3v7h3v-7h2.3l.7-3H14V6a1 1 0 0 1 1-1h3V2z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="mailto:info@fasonsalon.com"
              className="ml-1 inline-block rounded-full bg-white/5 px-3 py-2 text-xs font-medium hover:bg-white/10"
            >
              Trimite un email
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="nofollow"
          >
            <Image
              src="/anpc-sol.png"
              alt="Description"
              width={100}
              height={100}
            />
          </a>
          <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
            <Image
              src="/anpc-sal.png"
              alt="Description"
              width={100}
              height={100}
            />
          </a>
        </div>
        <div className="border-t border-primary/20 mt-4 pt-4 text-center text-xs text-primary-foreground/70">
          © {new Date().getFullYear()} Christina Gramma. All rights reserved.
          <br />
          Made with ❤️ by{" "}
          <Link href="https://code-lab.ro">
            <span className="text-accent">CODELAB</span>
          </Link>
          .
        </div>
      </div>
    </footer>
  );
};

export default Footer;
