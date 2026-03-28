import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    location: "Noida, UP",
    text: "My AC stopped cooling in peak summer. Home Fixer technician arrived within 2 hours and fixed it the same day. Excellent service!",
    stars: 5,
    service: "AC Repair",
  },
  {
    name: "Priya Mehta",
    location: "Dwarka, Delhi",
    text: "Very professional team. Got my washing machine motor replaced at a very reasonable price. Will definitely call again.",
    stars: 5,
    service: "Washing Machine Repair",
  },
  {
    name: "Amit Gupta",
    location: "Gurgaon, Haryana",
    text: "Fridge wasn't cooling properly for weeks. Home Fixer diagnosed the problem quickly and charged a fair price. Highly recommended!",
    stars: 5,
    service: "Refrigerator Repair",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {STAR_KEYS.slice(0, count).map((k) => (
        <Star key={k} className="w-4 h-4 fill-brand-star text-brand-star" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="hidden md:grid grid-cols-3 gap-6"
          data-ocid="testimonials.list"
        >
          {testimonials.map((t, i) => (
            <Card
              key={t.name}
              className="border-0 shadow-sm"
              data-ocid={`testimonials.item.${i + 1}`}
            >
              <CardContent className="p-6">
                <StarRow count={t.stars} />
                <p className="text-muted-foreground text-sm mb-4 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center font-bold text-brand-orange">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.location}
                    </div>
                  </div>
                  <span className="ml-auto text-xs bg-brand-orange/10 text-brand-orange px-2 py-1 rounded-full">
                    {t.service}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile slider */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <StarRow count={testimonials[active].stars} />
                  <p className="text-muted-foreground text-sm mb-4 italic">
                    "{testimonials[active].text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center font-bold text-brand-orange">
                      {testimonials[active].name[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">
                        {testimonials[active].name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonials[active].location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={() =>
                setActive(
                  (v) => (v - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
              data-ocid="testimonials.pagination_prev"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((t) => (
                <button
                  type="button"
                  key={t.name}
                  onClick={() => setActive(testimonials.indexOf(t))}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    testimonials.indexOf(t) === active
                      ? "w-6 bg-brand-orange"
                      : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActive((v) => (v + 1) % testimonials.length)}
              className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-brand-orange hover:text-brand-orange transition-colors"
              data-ocid="testimonials.pagination_next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
