import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Users, TrendingUp, Target, BookOpen, Briefcase } from "lucide-react";

const AboutSection = () => {
  const credentials = [
    { icon: Award, text: "Harvard Business School Executive Education" },
    { icon: Briefcase, text: "20+ Years Corporate Leadership Experience" },
    { icon: TrendingUp, text: "Built and Sold 3 Successful Companies" },
    { icon: BookOpen, text: "Bestselling Author of 'The Legacy Mindset'" },
    { icon: Users, text: "Mentored 500+ Entrepreneurs" },
    { icon: Target, text: "Featured in Forbes, WSJ, and Harvard Business Review" }
  ];

  const achievements = [
    { number: "20+", label: "Years Experience" },
    { number: "5,000+", label: "Students Trained" },
    { number: "92%", label: "Success Rate" },
    { number: "$50M+", label: "Student Revenue Generated" }
  ];

  const certifications = [
    "Certified Executive Coach (ICF)",
    "Strategic Business Planning Certificate",
    "Leadership Development Certification",
    "Entrepreneurship Teaching Credential"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Legacy Academy</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Learn From Proven Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Founded by successful entrepreneurs and executives who've been where you want to go.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <Card className="p-8 shadow-elegant">
              <div className="flex items-center space-x-6 mb-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/api/placeholder/150/150" alt="Dr. Michael Thompson" />
                  <AvatarFallback>MT</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Dr. Michael Thompson</h3>
                  <p className="text-lg text-primary">Founder & Lead Instructor</p>
                  <p className="text-muted-foreground">Harvard MBA, Serial Entrepreneur</p>
                </div>
              </div>
              
              <p className="text-foreground mb-6 leading-relaxed">
                After 20 years climbing the corporate ladder at Fortune 500 companies and building 
                multiple successful businesses, I founded Legacy Academy to share the exact strategies 
                that transformed my career and life. I believe everyone deserves access to the knowledge 
                that creates extraordinary success.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Certifications & Recognition:</h4>
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Why Choose Legacy Academy?
              </h3>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <Card key={index} className="p-4 shadow-soft hover:shadow-elegant transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-primary p-2 rounded-lg">
                        <credential.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-foreground font-medium">{credential.text}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-gradient-accent shadow-glow">
              <h4 className="text-xl font-semibold text-accent-foreground mb-4">
                Our Mission
              </h4>
              <p className="text-accent-foreground/90 leading-relaxed">
                To empower professionals and aspiring entrepreneurs with the knowledge, 
                skills, and network they need to create lasting success and build their legacy. 
                We believe in practical education that delivers real results.
              </p>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            Ready to Transform Your Future?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've accelerated their careers and built successful businesses through our proven programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Enroll in Course
            </Button>
            <Button variant="outline" size="lg">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;