import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Clock, Loader2, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { useSubmitServiceRequest } from "../hooks/useQueries";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mutation = useSubmitServiceRequest();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !serviceType) {
      toast.error("Please fill in all required fields.");
      return;
    }
    try {
      await mutation.mutateAsync({ name, phone, serviceType, message });
      setSubmitted(true);
      toast.success("Booking submitted! We'll call you shortly.");
    } catch {
      toast.error("Submission failed. Please try again or call us directly.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mt-2">
            Book a Service
          </h2>
          <p className="text-muted-foreground mt-3">
            Fill in the form below and we'll get back to you within the hour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-brand-dark mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">
                      Phone Numbers
                    </div>
                    <a
                      href="tel:8851017494"
                      className="text-brand-orange font-medium hover:underline block"
                    >
                      +91 8851017494
                    </a>
                    <a
                      href="tel:9354593300"
                      className="text-brand-orange font-medium hover:underline block"
                    >
                      +91 9354593300
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">
                      Service Area
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Delhi NCR — Delhi, Noida, Gurgaon,
                      <br />
                      Faridabad, Ghaziabad
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-dark text-sm">
                      Working Hours
                    </div>
                    <div className="text-muted-foreground text-sm">
                      Monday – Sunday: 8 AM – 8 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-brand-orange/5 border border-brand-orange/20"
                data-ocid="contact.success_state"
              >
                <CheckCircle2 className="w-16 h-16 text-brand-orange mb-4" />
                <h3 className="text-xl font-bold text-brand-dark mb-2">
                  Booking Submitted!
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Thank you! Our team will call you shortly to confirm your
                  appointment.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  className="rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white"
                >
                  Book Another Service
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                data-ocid="contact.modal"
              >
                <div>
                  <Label
                    htmlFor="name"
                    className="text-brand-dark font-medium text-sm"
                  >
                    Your Name <span className="text-brand-orange">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Kumar"
                    className="mt-1.5 focus-visible:ring-brand-orange"
                    required
                    autoComplete="name"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="phone"
                    className="text-brand-dark font-medium text-sm"
                  >
                    Phone Number <span className="text-brand-orange">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="mt-1.5 focus-visible:ring-brand-orange"
                    required
                    autoComplete="tel"
                    data-ocid="contact.input"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="serviceType"
                    className="text-brand-dark font-medium text-sm"
                  >
                    Service Type <span className="text-brand-orange">*</span>
                  </Label>
                  <Select
                    value={serviceType}
                    onValueChange={setServiceType}
                    required
                  >
                    <SelectTrigger
                      id="serviceType"
                      className="mt-1.5 focus:ring-brand-orange"
                      data-ocid="contact.select"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="AC Repair & Service">
                        AC Repair & Service
                      </SelectItem>
                      <SelectItem value="Refrigerator Repair">
                        Refrigerator Repair
                      </SelectItem>
                      <SelectItem value="Washing Machine Repair">
                        Washing Machine Repair
                      </SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="text-brand-dark font-medium text-sm"
                  >
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your issue..."
                    className="mt-1.5 resize-none focus-visible:ring-brand-orange"
                    rows={3}
                    data-ocid="contact.textarea"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full rounded-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-5"
                  data-ocid="contact.submit_button"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />{" "}
                      Submitting...
                    </>
                  ) : (
                    "Book Service Now"
                  )}
                </Button>
                {mutation.isPending && (
                  <div data-ocid="contact.loading_state" className="hidden" />
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
