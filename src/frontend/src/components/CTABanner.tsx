import { Phone } from "lucide-react";
import { motion } from "motion/react";

export default function CTABanner() {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-brand-orange rounded-3xl px-8 py-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
            Need Urgent Appliance Repair?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our technicians are just a call away. Available 7 days a week, 8 AM
            – 8 PM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:8851017494"
              className="flex items-center gap-3 bg-white text-brand-orange font-bold text-lg px-8 py-4 rounded-full hover:bg-white/90 transition-colors shadow-lg"
              data-ocid="cta.primary_button"
            >
              <Phone className="w-5 h-5" />
              +91 8851017494
            </a>
            <a
              href="tel:9354593300"
              className="flex items-center gap-3 bg-white/20 text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/30 transition-colors border-2 border-white/40"
              data-ocid="cta.secondary_button"
            >
              <Phone className="w-5 h-5" />
              +91 9354593300
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
