import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, MessageCircle, Download } from "lucide-react";

const references = [
  {
    name: "Wan Fairuz Bin Wan Ismail",
    title: "Chief Technology Officer",
    company: "Nazsoft Tech Sdn. Bhd.",
    phone: "+60 13-6252699",
    email: "fairuz@nazsoftech.com"
  },
  {
    name: "Noor Azri Bin Abd Wahab",
    title: "Chief Information Officer",
    company: "E-Content Sdn. Bhd.",
    phone: "+60 19-2805234",
    email: "azri@nazsoftech.com"
  },
  {
    name: "Mohd Faeiz Bin Azmi",
    title: "Supervisor",
    company: "Loranet Technologies PLT",
    phone: "+60 11-33296971",
    email: ""
  },
  {
    name: "Shamry Bin Mubdi",
    title: "Chief Executive Officer",
    company: "Nazsoft Tech Sdn. Bhd.",
    phone: "+60 19-2350585",
    email: ""
  }
];

const Contact = () => {
  const handleContactClick = (type: string, value: string) => {
    if (type === 'email') {
      window.open(`mailto:${value}`, '_blank');
    } else if (type === 'phone') {
      window.open(`tel:${value}`, '_blank');
    }
  };

  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to new opportunities and collaborations. Let's discuss how I can contribute to your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-gradient-card border-card-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div 
                      className="flex items-center gap-3 p-3 rounded-lg bg-card-secondary hover:bg-muted cursor-pointer transition-colors"
                      onClick={() => handleContactClick('email', 'lukhfzi@gmail.com')}
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">lukhfzi@gmail.com</p>
                      </div>
                    </div>
                    
                    <div 
                      className="flex items-center gap-3 p-3 rounded-lg bg-card-secondary hover:bg-muted cursor-pointer transition-colors"
                      onClick={() => handleContactClick('phone', '+60 11-17958647')}
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Phone</p>
                        <p className="text-sm text-muted-foreground">+60 11-17958647</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-card-secondary">
                      <MapPin className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-sm font-medium text-foreground">Location</p>
                        <p className="text-sm text-muted-foreground">Telok Panglima Garang, Selangor, Malaysia</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-card-border space-y-2">
                    <Button 
                      className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                      onClick={() => window.open('https://drive.google.com/file/d/1bLwxBYzM7LwLsvf5FZ5XJ82pAC1NKAnL/view?usp=sharing', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download CV
                    </Button>
                    <Button 
                      className="w-full"
                      variant="outline"
                      onClick={() => window.open('https://drive.google.com/file/d/1AqkjMOb4ZnM8h8XkTeC6hH-zcXIxhz_j/view?usp=sharing', '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Retail CV
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-card-border">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground">
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="default" className="bg-success text-white">
                    Available for new opportunities
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-2">
                    Open to full-time DevOps and Network Engineering roles
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* References */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional References</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {references.map((ref, index) => (
                  <Card 
                    key={index}
                    className="bg-gradient-card border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-foreground">
                        {ref.name}
                      </CardTitle>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-primary">{ref.title}</p>
                        <p className="text-sm text-muted-foreground">{ref.company}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div 
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                        onClick={() => handleContactClick('phone', ref.phone)}
                      >
                        <Phone className="h-3 w-3" />
                        <span>{ref.phone}</span>
                      </div>
                      {ref.email && (
                        <div 
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                          onClick={() => handleContactClick('email', ref.email)}
                        >
                          <Mail className="h-3 w-3" />
                          <span>{ref.email}</span>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;