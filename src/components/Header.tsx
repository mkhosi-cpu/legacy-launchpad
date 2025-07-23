import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-primary rounded-lg p-2">
              <span className="text-primary-foreground font-bold text-xl">LA</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Legacy Academy</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#courses" className="text-foreground hover:text-primary transition-colors">Courses</a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">Success Stories</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@legacyacademy.com</span>
              </div>
            </div>
            <Button variant="hero" size="default">
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;