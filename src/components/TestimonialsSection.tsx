
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      text: "ZyberNetSolutions transformed our IT infrastructure completely. Their 24/7 support has been invaluable to our growing business.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      company: "Global Manufacturing Corp",
      role: "IT Director", 
      text: "Professional, reliable, and always available when we need them most. Their cybersecurity expertise saved us from potential threats.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      company: "Creative Design Agency",
      role: "Operations Manager",
      text: "Working from home became seamless after their network setup. Outstanding remote support and quick response times.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      company: "Healthcare Plus",
      role: "Administrator",
      text: "Their compliance expertise helped us meet HIPAA requirements effortlessly. Highly recommend their consultancy services.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Parker",
      company: "Retail Chain Solutions",
      role: "CTO",
      text: "The digital transformation strategy they provided increased our efficiency by 40%. Exceptional strategic thinking.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      company: "Financial Services Group",
      role: "Security Officer",
      text: "Best cybersecurity implementation we've experienced. Their team is knowledgeable and responsive to our industry needs.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Maria Garcia",
      company: "Education Institute",
      role: "IT Coordinator",
      text: "Their training programs helped our staff become more tech-savvy. Great investment in our team's development.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Kim",
      company: "Startup Ventures",
      role: "Founder",
      text: "As a startup, we needed scalable solutions. They provided exactly what we needed within our budget constraints.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Jennifer Lee",
      company: "Home Office",
      role: "Remote Worker",
      text: "Their home technology setup made my remote work setup professional and reliable. Excellent personal service.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 mb-8">
            Trusted by businesses, enterprises, and professionals nationwide
          </p>
          <div className="flex justify-center items-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/95 backdrop-blur-sm border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-primary mb-4" />
                <CardDescription className="text-gray-700 text-base italic">
                  "{testimonial.text}"
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-t border-primary/20 pt-4 flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-gray-800 text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
