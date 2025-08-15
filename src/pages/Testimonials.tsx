
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Star, Quote, Building, Home, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      type: "Business",
      rating: 5,
      text: "ZyberNetSolutions transformed our IT infrastructure completely. Their team's expertise and 24/7 support have been invaluable to our growing business. We've seen a 40% improvement in system uptime since partnering with them.",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Michael Rodriguez",
      company: "Global Manufacturing Corp",
      role: "IT Director",
      type: "Enterprise",
      rating: 5,
      text: "As an enterprise client, we needed a partner who could handle complex IT challenges. ZyberNetSolutions exceeded our expectations with their scalable solutions and proactive approach to cybersecurity.",
      icon: <Users className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Emily Chen",
      company: "Homeowner",
      role: "Remote Worker",
      type: "Home",
      rating: 5,
      text: "Working from home became seamless after ZyberNetSolutions set up my home office network. Their remote support is fantastic - I can get help whenever I need it without any hassle.",
      icon: <Home className="h-6 w-6 text-blue-600" />
    },
    {
      name: "David Thompson",
      company: "Creative Design Agency",
      role: "Creative Director",
      type: "Business",
      rating: 5,
      text: "Our creative work demands reliable technology. ZyberNetSolutions keeps our systems running smoothly so we can focus on what we do best. Their cloud solutions have been a game-changer for our collaboration.",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Lisa Martinez",
      company: "Healthcare Solutions Inc",
      role: "Practice Manager",
      type: "Business",
      rating: 5,
      text: "In healthcare, we can't afford downtime. ZyberNetSolutions' proactive monitoring and rapid response have kept our systems secure and operational. Their compliance expertise is exceptional.",
      icon: <Building className="h-6 w-6 text-blue-600" />
    },
    {
      name: "Robert Kim",
      company: "Financial Services Group",
      role: "COO",
      type: "Enterprise",
      rating: 5,
      text: "Security is paramount in our industry. ZyberNetSolutions' cybersecurity solutions and ongoing monitoring give us complete peace of mind. Their enterprise-level support is unmatched.",
      icon: <Users className="h-6 w-6 text-blue-600" />
    }
  ];

  const caseStudies = [
    {
      client: "Regional Law Firm",
      challenge: "Legacy system migration and security upgrade",
      solution: "Complete infrastructure overhaul with cloud migration",
      results: ["50% faster document processing", "Zero security incidents", "30% cost reduction"],
      timeline: "3 months"
    },
    {
      client: "Manufacturing Company",
      challenge: "Network downtime affecting production",
      solution: "24/7 monitoring and redundant systems implementation",
      results: ["99.9% uptime achieved", "Production delays eliminated", "Remote monitoring capabilities"],
      timeline: "6 weeks"
    },
    {
      client: "Home Office Setup",
      challenge: "Unreliable internet and poor connectivity",
      solution: "Professional home network optimization",
      results: ["3x faster internet speeds", "Seamless video conferencing", "Improved WiFi coverage"],
      timeline: "1 week"
    }
  ];

  const stats = [
    { number: "500+", label: "Satisfied Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "Expert IT Support", label: "Backed by Years of Success" },
    { number: "24/7", label: "Support Available" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-blue-200">
              Hear what our clients have to say about our IT solutions and support
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real feedback from businesses, enterprises, and home users we've helped
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {testimonial.icon}
                      <span className="ml-2 text-sm font-medium text-blue-600">{testimonial.type}</span>
                    </div>
                    <div className="flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-blue-200 mb-2" />
                  <CardDescription className="text-gray-700 italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-t pt-4">
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm font-medium text-blue-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real-world examples of how we've helped our clients succeed
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">{study.client}</CardTitle>
                  <CardDescription className="text-gray-600">
                    <strong>Challenge:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                      <ul className="space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <Star className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <span className="text-sm font-medium text-blue-600">
                        Timeline: {study.timeline}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8 text-blue-200">
            Ready to experience the ZyberNetSolutions difference? Get in touch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
              <Phone className="mr-2 h-5 w-5" />
              <a href="tel:+1234567890">Call (123) 456-7890</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
              <Mail className="mr-2 h-5 w-5" />
              <a href="mailto:info@zybernetsolutions.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
