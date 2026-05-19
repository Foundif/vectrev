import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 pt-3 sm:pt-5">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={`max-w-7xl mx-auto flex items-center gap-3 rounded-full pl-3 pr-2 py-2 border border-border transition-all ${
          scrolled ? "bg-card/95 backdrop-blur-xl shadow-soft" : "bg-card/80 backdrop-blur-md"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 pl-2 pr-3 rounded-full">
          <img src={logo} alt="VECTREV" className="h-8 w-8" />
          <div className="leading-none">
            <div className="font-extrabold tracking-tight text-foreground text-base">
              vec<span className="text-accent-brand">trev</span>
            </div>
            <div className="text-[9px] mt-1 uppercase tracking-[0.22em] text-muted-foreground hidden sm:block">
              Engineering Solutions
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 mx-auto bg-secondary/50 rounded-full p-1 border border-border">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-foreground text-background shadow-soft" }}
              inactiveProps={{ className: "text-foreground/70 hover:text-foreground" }}
              className="px-4 py-2 text-sm font-medium rounded-full transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="tel:+918879608428"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition pr-2"
        >
          <Phone className="h-4 w-4" />
          +91 88796 08428
        </a>

        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center gap-1.5 bg-foreground text-background font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-accent transition group"
        >
          Get Quote
          <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition-transform" />
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className="lg:hidden h-10 w-10 rounded-full border border-border bg-background flex items-center justify-center text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden max-w-7xl mx-auto mt-2 rounded-3xl bg-card border border-border shadow-soft p-4"
          >
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  activeProps={{ className: "text-accent-brand" }}
                  className="py-3 px-3 text-base font-medium text-foreground border-b border-border last:border-0"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center justify-center gap-1.5 bg-foreground text-background font-semibold px-5 py-3 rounded-full"
              >
                Get Quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}