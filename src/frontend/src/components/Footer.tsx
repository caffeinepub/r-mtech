import {
  Facebook,
  Globe,
  Instagram,
  MapPin,
  Phone,
  Twitter,
  Wrench,
} from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-bold text-lg tracking-tight text-white">
                  HOME
                </div>
                <div className="font-bold text-lg tracking-tight text-brand-orange -mt-1">
                  FIXER
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Delhi NCR's trusted appliance repair service. Fast, affordable,
              and reliable.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand-orange transition-colors flex items-center justify-center"
                  data-ocid="footer.link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                "AC Repair & Service",
                "Refrigerator Repair",
                "Washing Machine Repair",
                "Annual Maintenance",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/60 hover:text-brand-orange transition-colors"
                    data-ocid="footer.link"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Book a Service", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-brand-orange transition-colors"
                    data-ocid="footer.link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <div className="text-white/70">
                  <a
                    href="tel:8851017494"
                    className="hover:text-brand-orange transition-colors block"
                  >
                    8851017494
                  </a>
                  <a
                    href="tel:9354593300"
                    className="hover:text-brand-orange transition-colors block"
                  >
                    9354593300
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Delhi NCR, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <a
                  href="https://homefixer.store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-brand-orange transition-colors"
                >
                  homefixer.store
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-white/50">
          <span>© {year} Home Fixer. All rights reserved.</span>
          <span>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-orange transition-colors"
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
