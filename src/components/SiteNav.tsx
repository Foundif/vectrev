import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.webp";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why VECTREV" },
  { href: "#proof", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <img src={logo} alt="VECTREV" className="h-8 w-8" />
          <div className="leading-tight">
            <div className="font-bold tracking-tight text-foreground text-sm sm:text-base">VECTREV</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground hidden sm:block">
              Engineering Solutions
            </div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-gradient-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-semibold shadow-accent hover:opacity-95 transition"
        >
          Request Consultation
        </a>
      </div>
    </motion.header>
  );
}