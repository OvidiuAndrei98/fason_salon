const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-6 mt-12 border-t border-primary/20">
      <div className="max-w-[1024px] mx-auto px-4 text-center text-sm">
        © {new Date().getFullYear()} Christina Gramma. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
