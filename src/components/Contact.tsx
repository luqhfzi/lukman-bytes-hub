import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

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

          <div className="max-w-2xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
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

                  <div className="pt-4 border-t border-card-border">
                    <Button 
                      className="w-full bg-success hover:bg-success/90 text-white"
                      onClick={() => window.open('https://wa.me/601117958647', '_blank')}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Chat on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;