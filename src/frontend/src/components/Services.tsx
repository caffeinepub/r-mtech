import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Refrigerator, WashingMachine, Wind } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Wind,
    title: "AC Repair & Service",
    description:
      "Complete air conditioner repair, gas refilling, cleaning, and installation for all brands and models.",
    highlights: ["All Brands", "Gas Refilling", "Deep Cleaning"],
  },
  {
    icon: Refrigerator,
    title: "Refrigerator Repair",
    description:
      "Expert fridge repair including cooling issues, compressor replacement, and thermostat fixes.",
    highlights: ["Cooling Fix", "Compressor", "All Models"],
  },
  {
    icon: WashingMachine,
    title: "Washing Machine Repair",
    description:
      "Professional washing machine repair — drum issues, motor replacement, and electronic control fixes.",
    highlights: ["Front Load", "Top Load", "Semi-Auto"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            What We Fix
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
            Our Services
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Professional repair and maintenance for all major home appliances in
            Delhi NCR.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          data-ocid="services.list"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              data-ocid={`services.item.${i + 1}`}
            >
              <Card className="h-full hover:shadow-card transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5">
                    <service.icon className="w-7 h-7 text-brand-orange" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs font-medium bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="flex items-center gap-1 text-sm font-semibold text-brand-orange hover:gap-2 transition-all"
                  >
                    Book Service <ArrowRight className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
