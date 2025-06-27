
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, Award, Users, Clock, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "John Anderson",
      role: "Chief Technology Officer",
      experience: "15+ years",
      specialties: ["Network Security", "Cloud Infrastructure", "Enterprise Solutions"]
    },
    {
      name: "Sarah Mitchell",
      role: "Senior IT Consultant",
      experience: "12+ years",
      specialties: ["System Integration", "Cybersecurity", "Business IT Strategy"]
    },
    {
      name: "Michael Chen",
      role: "Lead Support Engineer",
      experience: "10+ years",
      specialties: ["Hardware Troubleshooting", "Software Solutions", "Remote Support"]
    }
  ];

  const certifications = [
    "Microsoft Certified Solutions Expert (MCSE)",
    "CompTIA Security+ Certified",
    "Cisco Certified Network Professional (CCNP)",
    "VMware Certified Professional (VCP)",
    "AWS Certified Solutions Architect"
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Security First",
      description: "We prioritize the security and integrity of your data and systems above all else."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Client-Focused",
      description: "Your success is our success. We tailor solutions to meet your specific needs."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Reliable Support",
      description: "24/7 availability when you need us most, with rapid response times."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from service to solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ZyberNetSolutions</h1>
            <p className="text-xl text-blue-200">
              Your trusted partner in IT excellence for over 15 years
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2009, ZyberNetSolutions began with a simple mission: to provide reliable, 
                professional IT support that businesses and individuals could depend on. What started 
                as a small team of passionate technicians has grown into a comprehensive IT solutions 
                provider serving hundreds of satisfied clients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we've evolved alongside technology, continuously expanding our expertise 
                to cover emerging trends like cloud computing, cybersecurity, and digital transformation. 
                Our commitment to excellence and client satisfaction has remained constant throughout our journey.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be a trusted partner for businesses of all sizes, from startups 
                to enterprises, helping them leverage technology to achieve their goals and stay competitive 
                in an ever-changing digital landscape.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop" 
                alt="Our team at work"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to empowering businesses and individuals through reliable, 
              innovative IT solutions that drive success and peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your IT success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-medium">
                    {member.role}
                  </CardDescription>
                  <CardDescription className="text-gray-500">
                    {member.experience} Experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {member.specialties.map((specialty, idx) => (
                        <li key={idx}>• {specialty}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Expertise</h2>
            <p className="text-xl text-gray-600">
              Our team holds industry-leading certifications to ensure top-quality service
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-blue-200">
            Let's discuss how we can help your business succeed with the right IT solutions.
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

export default About;
