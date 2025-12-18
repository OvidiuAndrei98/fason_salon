const HairSalon = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <h2 className="font-heading text-3xl md:text-4xl py-[30px] md:py-[50px] font-extrabold tracking-wide bg-gradient-to-r from-slate-700 via-gray-500 to-slate-700 bg-clip-text text-transparent text-center">
        SALON FASON
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 w-full max-w-[800px] ">
        <div className="flex flex-col w-full max-w-[500px]  ">
          <h3 className="font-heading text-2xl font-bold mb-2 text-accent/80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              className="w-6 h-6 inline-block  mb-px fill-accent"
            >
              <path d="M32 5a21 21 0 0 0-21 21c0 17 21 33 21 33s21-16 21-33A21 21 0 0 0 32 5zm0 31a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" />
            </svg>{" "}
            Ne gasesti aici!
          </h3>
          <p className="">
            Salonul nostru se află în zona Piața Unirii, pe Strada Baia de Fier
            10. Te așteptăm într-un spațiu modern, unde oferim servicii
            profesionale adaptate nevoilor tale. Pentru programări ne poți
            contacta telefonic sau pe WhatsApp.
          </p>
        </div>
        <div className="w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178.07092692862648!2d26.1062378!3d44.4303964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff3dd7ddafa3%3A0x9ebac43bba349781!2sGB%20Forte%20Consulting%20SRL!5e0!3m2!1sen!2sro!4v1765465261273!5m2!1sen!2sro"
            width="600"
            title="Fason Salon Location"
            height="650"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full  self-center rounded-4xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HairSalon;
