import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, BookOpen, Video, Calendar } from "lucide-react";

const LeadMagnetSection = () => {
  const offers = [
    {
      icon: BookOpen,
      title: "Entrepreneurship Starter Guide",
      description: "Complete 50-page guide with business validation framework, financial planning templates, and market research tools",
      value: "$197 Value",
      benefits: [
        "Business idea validation checklist",
        "Financial planning templates", 
        "Market research framework",
        "Legal startup checklist"
      ]
    },
    {
      icon: CheckCircle,
      title: "Career Development Checklist", 
      description: "Step-by-step action plan to accelerate your career with salary negotiation scripts and networking templates",
      value: "$97 Value",
      benefits: [
        "Salary negotiation scripts",
        "Personal brand templates",
        "Networking conversation starters",
        "Interview preparation guide"
      ]
    },
    {
      icon: Video,
      title: "Entrepreneur Mistakes Video Series",
      description: "5-part video series revealing the most common mistakes new entrepreneurs make and how to avoid them",
      value: "$297 Value",
      benefits: [
        "5 detailed video lessons",
        "Downloadable worksheets",
        "Case study examples",
        "Expert commentary"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">
            Limited Time Offer
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            Get $591 Worth of Resources Absolutely FREE
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Download our complete entrepreneur and career development toolkit. 
            No spam, no hidden costs – just value-packed resources to accelerate your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <Card key={index} className="p-6 bg-background/10 backdrop-blur-md border-white/20 shadow-glow">
              <div className="text-center mb-6">
                <div className="bg-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <offer.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <Badge variant="secondary" className="mb-2 bg-accent text-accent-foreground">
                  {offer.value}
                </Badge>
                <h3 className="text-xl font-semibold text-primary-foreground mb-2">
                  {offer.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {offer.description}
                </p>
              </div>
              
              <div className="space-y-3">
                {offer.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-background/10 backdrop-blur-md border-white/20">
          <div className="text-center mb-6">
            <Download className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-primary-foreground mb-2">
              Download All 3 Resources Now
            </h3>
            <p className="text-primary-foreground/80">
              Enter your email below to get instant access to all resources
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                placeholder="Enter your email address" 
                className="bg-background text-foreground border-white/30 flex-1"
              />
              <Button variant="accent" size="lg" className="whitespace-nowrap">
                Get Free Access
              </Button>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-primary-foreground/70">
                ✓ No spam ever ✓ Unsubscribe anytime ✓ 10,000+ downloads
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-8">
          <div className="flex items-center justify-center space-x-4 text-primary-foreground/80">
            <Calendar className="w-5 h-5" />
            <span>Or book a free consultation call instead</span>
          </div>
          <Button variant="outline" size="lg" className="mt-4 border-white/30 text-primary-foreground hover:bg-white/10">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;