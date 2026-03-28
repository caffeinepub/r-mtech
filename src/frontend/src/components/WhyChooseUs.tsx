import { Clock, IndianRupee, MapPin, Package, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Experienced Technicians",
    desc: "Our certified technicians have 10+ years of hands-on experience with all major brands.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    desc: "Book before noon and get same-day repair. We value your time and comfort.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    desc: "Transparent pricing with no hidden charges. Get a free quote before we start.",
  },
  {
    icon: Package,
    title: "Genuine Spare Parts",
    desc: "We use only genuine, OEM-grade spare parts for long-lasting repairs.",
  },
];

const steps = [
  { num: "01", label: "Book Online or Call" },
  { num: "02", label: "Technician Assigned" },
  { num: "03", label: "Repair at Your Home" },
  { num: "04", label: "Pay & Get Warranty" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-8">
              Why Choose Home Fixer?
            </h2>
            <div className="space-y-5">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <b.icon className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark">
                      {b.title}
                    </div>
                    <div className="text-sm text-muted-foreground mt-0.5">
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Area */}
            <div className="mt-8 p-5 rounded-2xl bg-brand-orange/5 border border-brand-orange/20">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-brand-orange" />
                <span className="font-semibold text-brand-dark">
                  Service Area
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                We serve all areas across <strong>Delhi NCR</strong> including
                Delhi, Noida, Greater Noida, Gurgaon, Faridabad, and Ghaziabad.
              </p>
            </div>
          </motion.div>

          {/* Our Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2 mb-8">
              Our Process
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-2xl bg-brand-light border border-border hover:border-brand-orange/30 transition-colors"
                >
                  <div className="text-3xl font-extrabold text-brand-orange/20 mb-2">
                    {step.num}
                  </div>
                  <div className="font-semibold text-brand-dark text-sm">
                    {step.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Stat highlights */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {[
                { val: "5000+", label: "Repairs Done" },
                { val: "4.9★", label: "Customer Rating" },
                { val: "10+", label: "Years Experience" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-brand-dark text-white"
                >
                  <div className="text-xl font-extrabold text-brand-orange">
                    {stat.val}
                  </div>
                  <div className="text-xs text-white/70 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
