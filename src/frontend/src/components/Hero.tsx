import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center pt-20"
      style={{ marginTop: "80px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/generated/hero-ac-repair.dim_1400x600.jpg"
          alt="Home appliance repair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-brand-orange text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Delhi NCR's Trusted Repair Service
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Expert Appliance
              <br />
              <span className="text-brand-orange">Repair</span> in Delhi NCR
            </h1>
            <p className="text-white/80 text-lg mb-6">
              Fast, reliable, and affordable repair for AC, Refrigerator &
              Washing Machine. Same-day service available.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold px-8 text-base"
                data-ocid="hero.primary_button"
              >
                <a href="#contact">
                  Book a Service <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white text-white bg-transparent hover:bg-white hover:text-brand-dark font-bold px-8 text-base"
                data-ocid="hero.secondary_button"
              >
                <a href="tel:8851017494">
                  <Phone className="mr-2 w-4 h-4" /> Call: 8851017494
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-4">
              {["Same-Day Service", "Genuine Parts", "Affordable Pricing"].map(
                (badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-1.5 text-white/90 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                    <span>{badge}</span>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
