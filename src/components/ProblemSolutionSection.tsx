import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Target, TrendingUp, Users } from "lucide-react";

const ProblemSolutionSection = () => {
  const problems = [
    "Feeling stuck in your current career with no clear path forward",
    "Having great business ideas but no roadmap to execute them",
    "Lacking the skills and confidence to make the entrepreneurial leap",
    "Missing the network and mentorship needed for success"
  ];

  const solutions = [
    {
      icon: Target,
      title: "Clear Career Roadmap",
      description: "Get a personalized step-by-step plan to achieve your professional goals"
    },
    {
      icon: TrendingUp,
      title: "Proven Business Framework",
      description: "Learn the exact strategies successful entrepreneurs use to build profitable businesses"
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Access to industry leaders and successful entrepreneurs who guide your journey"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Are You Ready To Break Through These Barriers?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Most professionals and aspiring entrepreneurs face the same challenges. 
            Legacy Academy provides the proven solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <AlertCircle className="w-6 h-6 text-destructive mr-3" />
              Common Challenges You're Facing:
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-foreground">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
              <Target className="w-6 h-6 text-success mr-3" />
              How Legacy Academy Solves This:
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-primary p-3 rounded-lg">
                      <solution.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Start Your Transformation Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;