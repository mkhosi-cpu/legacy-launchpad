import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Marketing Director",
      company: "TechCorp Inc.",
      image: "/api/placeholder/100/100",
      rating: 5,
      quote: "Legacy Academy transformed my career trajectory. Within 6 months of completing the program, I was promoted to Director level with a 40% salary increase. The networking alone was worth the investment.",
      result: "40% salary increase + promotion"
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "GreenTech Solutions",
      image: "/api/placeholder/100/100", 
      rating: 5,
      quote: "I went from corporate employee to running my own $2M business in just 18 months. The business framework and mentorship provided the roadmap I needed to make it happen.",
      result: "$2M business in 18 months"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      company: "FinanceFirst",
      image: "/api/placeholder/100/100",
      rating: 5,
      quote: "The leadership training was game-changing. I now manage a team of 50+ people and feel confident in every decision. My career acceleration has been incredible.",
      result: "Manages 50+ person team"
    }
  ];

  const companies = [
    "Google", "Microsoft", "Amazon", "Apple", "Meta", "Tesla", "Netflix", "Spotify"
  ];

  const stats = [
    { number: "5,000+", label: "Successful Graduates" },
    { number: "92%", label: "Career Advancement Rate" },
    { number: "$150K", label: "Average Salary Increase" },
    { number: "500+", label: "Businesses Launched" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Success Stories</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real Results From Real People
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our students don't just learn theory – they achieve measurable results 
            in their careers and businesses.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              <div className="flex items-center space-x-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <blockquote className="text-foreground mb-4 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              <Badge variant="secondary" className="bg-success/10 text-success">
                {testimonial.result}
              </Badge>
            </Card>
          ))}
        </div>

        {/* Companies */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">
            Our graduates work at top companies worldwide:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companies.map((company, index) => (
              <div key={index} className="text-lg font-semibold text-muted-foreground">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;