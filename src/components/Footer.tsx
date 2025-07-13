import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, Music, Mail, Phone, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Subsidiaries", href: "/#subsidiaries" },
    { name: "Contact", href: "/contacts" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Booking Terms", href: "/booking-terms" },
  ];
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-white" },
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-white" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-white" },
  ];
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          {/* Brand */}
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <Music className="w-7 h-7 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">K-GROUP KENYA</h3>
              <p className="text-sm text-secondary">Empowering Industries. Nurturing Creativity. Driving Innovation.</p>
            </div>
          </div>
          {/* Quick Links */}
          <nav className="flex flex-wrap gap-6 items-center">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm opacity-90 hover:opacity-100 hover:text-secondary transition-opacity"
              >
                {link.name}
              </a>
            ))}
          </nav>
          {/* Socials */}
          <div className="flex space-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors`}
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </a>
              );
            })}
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm opacity-80">
          © {new Date().getFullYear()} K-GROUP KENYA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer