import Image from "next/image";

const photos = [
  {
    src: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=800&q=80",
    alt: "Interior Salon",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=400&q=80",
    alt: "Detalii Styling",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?w=400&q=80",
    alt: "Echipamente Premium",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?w=800&q=80",
    alt: "Zona de relaxare",
    className: "md:col-span-2 md:row-span-1",
  },
];

const SalonShowcase = () => {
  return (
    <section className="pb-20 w-full">
      <div className="max-w-[1600px] mx-auto px-4 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl md:rounded-3xl group border border-white/10 ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white text-sm tracking-[0.2em] uppercase font-light">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalonShowcase;
