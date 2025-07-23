import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Video, FileText, Bot, Briefcase, DollarSign, Crown, Heart, BarChart3, GraduationCap, Lightbulb } from "lucide-react";

const CourseBenefitsSection = () => {
  const courseCategories = [
    {
      icon: Bot,
      title: "AI & Information Technology",
      description: "Innovate with AI & IT - Stay ahead in the digital transformation era",
      outcomes: ["Master ChatGPT for professional use", "Implement AI solutions", "Digital automation skills"]
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship & Startup",
      description: "Turn ideas into thriving businesses with proven frameworks and strategies",
      outcomes: ["Validate business ideas", "Create business plans", "Launch successful startups"]
    },
    {
      icon: Briefcase,
      title: "Business & Administration",
      description: "Master business strategy and operations for sustainable growth",
      outcomes: ["Strategic planning skills", "Operations management", "Business process optimization"]
    },
    {
      icon: DollarSign,
      title: "Finance & Accounting",
      description: "Manage money and grow your business with financial expertise",
      outcomes: ["Financial planning & analysis", "VAT compliance & returns", "Investment strategies"]
    },
    {
      icon: Crown,
      title: "Leadership & Management",
      description: "Inspire, lead, and drive success in any organizational setting",
      outcomes: ["Team leadership skills", "Performance management", "Strategic decision making"]
    },
    {
      icon: Heart,
      title: "Personal Development",
      description: "Unlock potential and achieve success through personal growth",
      outcomes: ["Goal setting & achievement", "Professional confidence", "Work-life balance"]
    },
    {
      icon: BarChart3,
      title: "Marketing & Sales",
      description: "Attract customers and boost revenue with proven marketing strategies",
      outcomes: ["Digital marketing mastery", "Sales funnel creation", "Customer acquisition"]
    },
    {
      icon: GraduationCap,
      title: "Exam Support",
      description: "Study smart, pass with ease - comprehensive exam preparation",
      outcomes: ["Effective study techniques", "Exam strategies", "Time management skills"]
    }
  ];

  const upcomingEvents = [
    "ChatGPT for Bookkeepers & Accountants",
    "Financial Literacy for Professionals", 
    "VAT Registration, Returns & Compliance",
    "Leadership Excellence Program",
    "Digital Marketing Mastery",
    "Entrepreneurship Bootcamp",
    "Personal Branding Workshop",
    "AI Tools for Business Growth"
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
          <Badge variant="outline" className="mb-4">Course Categories</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Professional Development Across 8 Key Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your future with courses, programs, and skills training designed 
            to help individuals and businesses grow, lead, and thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseCategories.slice(0, 4).map((category, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300 text-center">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.outcomes.map((outcome, outcomeIndex) => (
                  <div key={outcomeIndex} className="flex items-center space-x-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-left">{outcome}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseCategories.slice(4).map((category, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300 text-center">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mx-auto mb-4">
                <category.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.outcomes.map((outcome, outcomeIndex) => (
                  <div key={outcomeIndex} className="flex items-center space-x-2 text-xs">
                    <CheckCircle className="w-3 h-3 text-success flex-shrink-0" />
                    <span className="text-muted-foreground text-left">{outcome}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 shadow-soft">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Upcoming Training Events
            </h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{event}</span>
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
                View All Courses & Events
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseBenefitsSection;