import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Video, FileText, Target, TrendingUp, Brain } from "lucide-react";

const CourseBenefitsSection = () => {
  const benefits = [
    {
      icon: Target,
      title: "Strategic Career Planning",
      description: "Master the art of career advancement with proven strategies used by C-level executives",
      outcomes: ["Create 5-year career roadmap", "Negotiate salary increases", "Build executive presence"]
    },
    {
      icon: TrendingUp,
      title: "Business Launch Framework",
      description: "Learn the exact step-by-step process to validate, launch, and scale your business idea",
      outcomes: ["Validate business ideas", "Create MVP in 30 days", "Generate first $10K revenue"]
    },
    {
      icon: Users,
      title: "Leadership & Networking",
      description: "Develop leadership skills and build a powerful professional network that opens doors",
      outcomes: ["Lead high-performing teams", "Build strategic partnerships", "Access exclusive opportunities"]
    },
    {
      icon: Brain,
      title: "Entrepreneurial Mindset",
      description: "Transform your thinking to identify opportunities and overcome challenges like successful entrepreneurs",
      outcomes: ["Develop risk assessment skills", "Build resilience", "Think like an owner"]
    }
  ];

  const curriculum = [
    "Module 1: Career Assessment & Goal Setting",
    "Module 2: Personal Brand Development", 
    "Module 3: Business Idea Validation",
    "Module 4: Financial Planning & Investment",
    "Module 5: Sales & Marketing Fundamentals",
    "Module 6: Leadership & Team Building",
    "Module 7: Networking & Relationship Building",
    "Module 8: Scaling & Exit Strategies"
  ];

  const format = [
    { icon: Video, text: "Live weekly sessions with expert instructors" },
    { icon: FileText, text: "Comprehensive course materials and templates" },
    { icon: Users, text: "Private community of like-minded professionals" },
    { icon: Clock, text: "Lifetime access to all content and updates" }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Course Benefits</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need To Succeed
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive program combines career development and entrepreneurship 
            to give you multiple paths to success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-elegant transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gradient-primary p-3 rounded-lg">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-medium text-foreground">You'll Learn To:</p>
                {benefit.outcomes.map((outcome, outcomeIndex) => (
                  <div key={outcomeIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span className="text-sm text-muted-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Complete Curriculum
            </h3>
            <div className="space-y-3">
              {curriculum.map((module, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{module}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Learning Format
            </h3>
            <div className="space-y-6">
              {format.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-accent p-2 rounded-lg">
                    <item.icon className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="success" size="lg" className="w-full">
                View Full Course Details
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseBenefitsSection;