import { Button } from "@/components/ui/button";
import { Menu, Phone, Wrench, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
      }`}
      style={{ height: "80px" }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2"
          data-ocid="nav.link"
        >
          <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-lg tracking-tight text-brand-dark">
              HOME
            </div>
            <div className="font-bold text-lg tracking-tight text-brand-orange -mt-1">
              FIXER
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            className="rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold px-5"
            data-ocid="nav.primary_button"
          >
            <a href="tel:8851017494">
              <Phone className="w-4 h-4 mr-1" />
              Book Now
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold px-5"
            data-ocid="nav.secondary_button"
          >
            <a href="#contact">Get Quote</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-border shadow-lg px-4 py-4"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-ocid="nav.link"
                  className="py-2 text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                <Button
                  asChild
                  className="rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold"
                >
                  <a href="tel:8851017494">
                    <Phone className="w-4 h-4 mr-1" />
                    Call: 8851017494
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold"
                >
                  <a href="tel:9354593300">
                    <Phone className="w-4 h-4 mr-1" />
                    Call: 9354593300
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
