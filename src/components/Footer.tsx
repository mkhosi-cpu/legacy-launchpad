import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Free Resources", href: "#resources" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookie Policy", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary rounded-lg p-2">
                <span className="text-primary-foreground font-bold text-xl">LA</span>
              </div>
              <span className="text-2xl font-bold">Legacy Academy</span>
            </div>
            
            <p className="text-background/80 max-w-md">
              Empowering professionals and entrepreneurs to build successful careers and businesses through proven education and mentorship.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-background/90">123 Business Ave, Suite 100, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-background/90">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-background/90">info@legacyacademy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="block text-background/80 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-background/80 mb-4">
              Get weekly tips and strategies for career and business success.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Your email address" 
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="accent" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-background/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-4 text-sm">
            {legalLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-background/70 hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-background/70 hover:text-accent transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <Separator className="my-6 bg-background/20" />

        <div className="text-center text-background/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Legacy Academy. All rights reserved.</p>
          <p className="mt-2">Transforming careers and building businesses since 2020.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;