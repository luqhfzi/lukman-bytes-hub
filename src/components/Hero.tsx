import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-primary">Lukman Hafizi</span>
                  <br />
                  <span className="text-foreground">Bin Ramli</span>
                </h1>
                <div className="space-y-2">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                    DevOps Engineer | Network Engineer | IT Support
                  </h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Dedicated and adaptable professional with experience in DevOps, IT infrastructure, and retail operations. 
                Skilled in automation, server management, and customer service. Strong analytical and teamwork abilities 
                with proven results in both technical and front-line environments.
              </p>

              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+60 11-17958647</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>lukhfzi@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground sm:col-span-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Telok Panglima Garang, Selangor, Malaysia</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  onClick={() => window.open('https://drive.google.com/file/d/1bLwxBYzM7LwLsvf5FZ5XJ82pAC1NKAnL/view?usp=sharing', '_blank')}
                  className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-glow transition-all duration-300"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => window.open('https://drive.google.com/file/d/1AqkjMOb4ZnM8h8XkTeC6hH-zcXIxhz_j/view?usp=sharing', '_blank')}
                  className="border-card-border hover:bg-card-secondary"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Retail CV
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-card-border hover:bg-card-secondary"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://www.linkedin.com/in/lukhfzi', '_blank')}
                  className="border-card-border hover:bg-card-secondary"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative animate-slide-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-3xl opacity-20 animate-glow"></div>
                <div className="relative bg-gradient-card rounded-3xl p-8 border border-card-border shadow-lg">
                  <img
                    src={profileImage}
                    alt="Lukman Hafizi Bin Ramli - DevOps Engineer"
                    className="w-full h-auto rounded-2xl shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;