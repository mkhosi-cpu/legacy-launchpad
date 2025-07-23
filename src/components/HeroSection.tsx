import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Award, Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Career & Build Your 
                <span className="text-accent"> Business Legacy</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Join thousands of professionals who've accelerated their careers and built successful businesses through our proven entrepreneurship and career development programs.
              </p>
            </div>
            
            <Card className="bg-background/10 backdrop-blur-md border-white/20 p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-foreground">
                Get Your FREE Entrepreneurship Starter Guide
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Input 
                  placeholder="Enter your email address" 
                  className="bg-background text-foreground border-white/30 flex-1"
                />
                <Button variant="accent" size="lg" className="whitespace-nowrap">
                  Download Now
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/80 mt-2">
                No spam, unsubscribe anytime. Join 10,000+ entrepreneurs.
              </p>
            </Card>
            
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">5,000+</span>
                </div>
                <p className="text-sm text-primary-foreground/80">Students Enrolled</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">92%</span>
                </div>
                <p className="text-sm text-primary-foreground/80">Success Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 mr-2" />
                  <span className="text-2xl font-bold">4.9</span>
                  <Star className="w-4 h-4 fill-accent text-accent ml-1" />
                </div>
                <p className="text-sm text-primary-foreground/80">Average Rating</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Legacy Academy Students" 
              className="rounded-2xl shadow-glow w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;