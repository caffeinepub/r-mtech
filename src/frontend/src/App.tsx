import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import {
  BadgeCheck,
  ChevronRight,
  Clock,
  Cpu,
  DollarSign,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Shield,
  Timer,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const SERVICES = [
  {
    icon: Cpu,
    title: "Inverter PCB Repair",
    description:
      "Expert diagnosis and repair of inverter PCBs, restoring your power backup systems to full functionality with precision.",
  },
  {
    icon: Search,
    title: "PCB Diagnosis",
    description:
      "Advanced fault detection and analysis of printed circuit boards using professional-grade testing equipment.",
  },
  {
    icon: Wrench,
    title: "Component Replacement",
    description:
      "Sourcing and replacing faulty electronic components with genuine, high-quality parts for lasting repairs.",
  },
  {
    icon: Zap,
    title: "General Electronics",
    description:
      "Comprehensive repair services for a wide range of electronic devices and appliances at competitive prices.",
  },
];

const WHY_CHOOSE = [
  {
    icon: Shield,
    title: "Specialist Technicians",
    description: "Years of expertise in PCB & inverter repair",
  },
  {
    icon: Timer,
    title: "Fast Turnaround",
    description: "Quick diagnosis and same-day repairs available",
  },
  {
    icon: BadgeCheck,
    title: "Genuine Parts",
    description: "Only authentic components used in every repair",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Transparent quotes with no hidden charges",
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "PCB Repair", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    toast.success("Request sent! We'll call you back shortly.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Toaster />

      {/* ── NAVBAR ── */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#home"
              className="flex items-center gap-2"
              data-ocid="nav.link"
            >
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight">
                <span className="text-primary">R.</span>MTECH
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  data-ocid="nav.link"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-5 rounded-full"
                data-ocid="nav.primary_button"
              >
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              type="button"
              data-ocid="nav.toggle"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                window.location.hash = "contact";
              }}
              className="block w-full mt-2 text-center bg-primary text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-primary/90 transition-colors"
              data-ocid="nav.primary_button"
            >
              Get a Quote
            </button>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      >
        {/* Circuit pattern background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.42 0.18 25 / 0.15) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.42 0.18 25 / 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

        {/* Decorative red glow */}
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary border border-primary/40 rounded-full">
                Specialist in Inverter PCB
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight mb-6">
                <span className="text-primary">R.MTECH:</span>
                <br />
                <span className="text-foreground">EXPERT INVERTER</span>
                <br />
                <span className="text-foreground">PCB REPAIR</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Professional PCB diagnosis, component replacement, and inverter
                repair services in Delhi NCR. Fast, reliable, and affordable.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 rounded-full text-base"
                  data-ocid="hero.primary_button"
                >
                  <a href="#contact">Request a Service</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted font-semibold px-8 rounded-full text-base"
                  data-ocid="hero.secondary_button"
                >
                  <a href="#services">Learn More</a>
                </Button>
              </div>

              {/* Phone numbers */}
              <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-border">
                <a
                  href="tel:8851357920"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-ocid="hero.link"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  8851357920
                </a>
                <a
                  href="tel:8287479774"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-ocid="hero.link"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  8287479774
                </a>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  Mayur Vihar Phase-I, New Delhi
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              What We Do
            </span>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-foreground">
              OUR SPECIALIZED SERVICES
            </h2>
            <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="services.list"
          >
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-ocid={`services.item.${i + 1}`}
                className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-card-hover transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <svc.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-3">
                  {svc.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {svc.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:gap-2 transition-all">
                  View Details <ChevronRight className="w-3 h-3" />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Edge
            </span>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-foreground">
              WHY CHOOSE R.MTECH?
            </h2>
            <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-primary/40 bg-primary/5 flex items-center justify-center mb-4">
                  <feat.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wide text-foreground mb-2">
                  {feat.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                Who We Are
              </span>
              <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-foreground mb-6">
                ABOUT R.MTECH
              </h2>
              <div className="mt-4 mb-8 w-16 h-1 bg-primary mx-auto rounded-full" />
              <p className="text-muted-foreground leading-relaxed text-base mb-6">
                R.Mtech is a specialized electronics repair workshop founded by{" "}
                <span className="text-foreground font-semibold">
                  Rohit Sharma
                </span>{" "}
                and{" "}
                <span className="text-foreground font-semibold">
                  Md. Zeyaullah
                </span>
                , located in the heart of Mayur Vihar Phase-I, New Delhi. With
                years of hands-on experience in inverter PCB repair and
                electronics diagnostics, we have built a reputation for
                delivering fast, reliable, and cost-effective solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Our workshop is equipped with professional-grade testing and
                soldering equipment, enabling us to handle everything from
                simple component replacements to complex multi-layer PCB faults.
                We serve residential and commercial clients across Delhi NCR,
                and take pride in transparent pricing and honest assessments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Reach Us
            </span>
            <h2 className="mt-2 text-4xl font-black uppercase tracking-tight text-foreground">
              CONTACT US
            </h2>
            <div className="mt-4 w-16 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 bg-card border border-border rounded-xl p-8 lg:p-12">
            {/* Left: Headline */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-black uppercase text-foreground mb-4">
                GET IN TOUCH WITH OUR EXPERTS
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Have a faulty inverter or PCB? Reach out today for a free
                assessment. We respond quickly and offer competitive pricing.
              </p>
              <div className="w-12 h-1 bg-primary rounded-full" />
            </div>

            {/* Center: Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
              data-ocid="contact.panel"
            >
              <div>
                <Input
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  required
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
                  data-ocid="contact.input"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Describe your issue..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  className="bg-muted border-border text-foreground placeholder:text-muted-foreground focus:border-primary resize-none"
                  data-ocid="contact.textarea"
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full py-3"
                data-ocid="contact.submit_button"
              >
                {submitting ? "Sending..." : "Submit Request"}
              </Button>
              {submitting && (
                <p
                  className="text-center text-xs text-muted-foreground"
                  data-ocid="contact.loading_state"
                >
                  Processing your request...
                </p>
              )}
            </form>

            {/* Right: Contact details */}
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">
                    104, Kotla Village, Near Bus Stand,
                    <br />
                    Mayur Vihar Phase-I,
                    <br />
                    New Delhi – 110091
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:8851357920"
                    className="block text-sm text-foreground hover:text-primary transition-colors"
                    data-ocid="contact.link"
                  >
                    +91 8851357920
                  </a>
                  <a
                    href="tel:8287479774"
                    className="block text-sm text-foreground hover:text-primary transition-colors"
                    data-ocid="contact.link"
                  >
                    +91 8287479774
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="text-sm text-foreground">
                    rmtech.delhi@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                    Opening Hours
                  </p>
                  <p className="text-sm text-foreground">
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#home" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-black tracking-tight">
                  <span className="text-primary">R.</span>MTECH
                </span>
              </a>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Specialist in Inverter PCB repair and electronics diagnostics.
                Serving Delhi NCR with fast, reliable service.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-ocid="footer.link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {SERVICES.map((svc) => (
                  <li key={svc.title}>
                    <a
                      href="#services"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      data-ocid="footer.link"
                    >
                      {svc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">
                Contact
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>
                    104, Kotla Village, Mayur Vihar Ph-I, New Delhi-110091
                  </span>
                </li>
                <li>
                  <a
                    href="tel:8851357920"
                    className="flex gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    8851357920
                  </a>
                </li>
                <li>
                  <a
                    href="tel:8287479774"
                    className="flex gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                    8287479774
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} R.Mtech. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
