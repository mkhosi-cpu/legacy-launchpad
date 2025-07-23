import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Shield, Phone, Mail, MessageCircle } from "lucide-react";

const FinalCTASection = () => {
  const urgencyFactors = [
    "Only 50 spots available per cohort",
    "Early bird pricing ends in 7 days", 
    "Next cohort starts Monday",
    "Bonus mentorship sessions for first 25 enrollees"
  ];

  const guarantees = [
    "30-day money-back guarantee",
    "Lifetime access to all materials",
    "Free course updates and new content",
    "Access to private alumni network"
  ];

  const contactOptions = [
    { icon: Phone, text: "Call us: (555) 123-4567", action: "Call Now" },
    { icon: Mail, text: "Email: info@legacyacademy.com", action: "Send Email" },
    { icon: MessageCircle, text: "Live chat support available", action: "Chat Now" }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground animate-pulse">
              Limited Time Offer
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              Don't Let Another Year Pass Without Taking Action
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Your future self is counting on the decision you make today. 
              Join thousands who've transformed their careers and built successful businesses.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 bg-background/10 backdrop-blur-md border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Act Fast - Limited Availability
                </h3>
              </div>
              <div className="space-y-3">
                {urgencyFactors.map((factor, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">{factor}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-background/10 backdrop-blur-md border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-primary-foreground">
                  Risk-Free Investment
                </h3>
              </div>
              <div className="space-y-3">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-primary-foreground/90">{guarantee}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="text-center mb-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button variant="accent" size="lg" className="text-lg px-8 py-4 shadow-glow hover:scale-105">
                Enroll Now - Save $500
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-primary-foreground hover:bg-white/10">
                Schedule Free Consultation
              </Button>
            </div>
            
            <p className="text-primary-foreground/80 mb-8">
              Regular price $1,997 | Early bird price $1,497 | Payment plans available
            </p>
          </div>

          <Card className="p-8 bg-background/5 backdrop-blur-md border-white/10">
            <h3 className="text-2xl font-semibold text-primary-foreground text-center mb-8">
              Questions? We're Here to Help
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <div key={index} className="text-center">
                  <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-primary-foreground/90 mb-3">{option.text}</p>
                  <Button variant="outline" size="sm" className="border-white/30 text-primary-foreground hover:bg-white/10">
                    {option.action}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center mt-12">
            <p className="text-primary-foreground/70 italic text-lg">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </p>
            <p className="text-primary-foreground/80 mt-2">- Chinese Proverb</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;