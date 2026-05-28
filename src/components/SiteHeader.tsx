import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Phone, MessageCircle, Mail } from "lucide-react";
import logo from "@/assets/logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/resources", label: "Resources" },
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 sm:px-6 pt-3 sm:pt-5">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className={`max-w-7xl mx-auto flex items-center justify-between gap-3 rounded-full pl-3 pr-3 py-2 border border-border transition-all ${
            scrolled ? "bg-card/95 backdrop-blur-xl shadow-soft" : "bg-card/80 backdrop-blur-md"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 pl-1 pr-3 rounded-full">
            <img src={logo} alt="VECTREV" className="h-9 w-9" />
            <div className="leading-none">
              <div className="font-extrabold tracking-tight text-foreground text-base">
                vec<span className="text-accent-brand">trev</span>
              </div>
              <div className="text-[9px] mt-1 uppercase tracking-[0.22em] text-muted-foreground hidden sm:block">
                Engineering Solutions
              </div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="tel:+918879608428"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-foreground transition px-3"
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
          </div>
        </motion.div>
      </header>

      {/* Corner hamburger — always top-right, opens sidebar drawer */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 h-12 w-12 rounded-full bg-foreground text-background flex items-center justify-center shadow-soft hover:bg-accent transition"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm"
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 240 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[420px] bg-dark text-dark-foreground overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
                  <img src={logo} alt="VECTREV" className="h-9 w-9" />
                  <div className="leading-none">
                    <div className="font-extrabold tracking-tight text-base">
                      vec<span className="text-accent-brand">trev</span>
                    </div>
                    <div className="text-[9px] mt-1 uppercase tracking-[0.22em] text-white/60">
                      Engineering Solutions
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="px-6 py-4 text-[10px] uppercase tracking-[0.22em] text-white/40">
                Navigate
              </div>
              <nav className="flex flex-col px-3">
                {links.map((l, i) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    activeOptions={{ exact: l.to === "/" }}
                    activeProps={{ className: "bg-white/10 text-accent-brand" }}
                    inactiveProps={{ className: "text-white hover:bg-white/5" }}
                    className="group flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-semibold transition"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[11px] text-white/40 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {l.label}
                    </span>
                    <ArrowUpRight className="h-4 w-4 opacity-50 group-hover:opacity-100 group-hover:rotate-45 transition" />
                  </Link>
                ))}
              </nav>

              <div className="px-6 mt-8 text-[10px] uppercase tracking-[0.22em] text-white/40">
                Take action
              </div>
              <div className="px-6 mt-4 grid gap-3">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-accent text-accent-foreground font-semibold px-6 py-4 rounded-full shadow-accent hover:opacity-95 transition group"
                >
                  Request a Quote
                  <ArrowUpRight className="h-4 w-4 group-hover:rotate-45 transition" />
                </Link>
                <a
                  href="https://wa.me/918879608428?text=Hi%20VECTREV%2C%20I%27d%20like%20a%20consultation"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur px-6 py-4 rounded-full text-white hover:bg-white/10 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a
                  href="tel:+918879608428"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 backdrop-blur px-6 py-4 rounded-full text-white hover:bg-white/10 transition"
                >
                  <Phone className="h-4 w-4" /> +91 88796 08428
                </a>
              </div>

              <div className="px-6 mt-10 pt-6 border-t border-white/10 text-xs text-white/60 space-y-2 pb-10">
                <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5" /> contact@vectrev.in</div>
                <div>61E/2D, Olepettai · Thoothukudi 628002</div>
                <div className="text-white/40">CIN U71200TN2025PTC180169</div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}