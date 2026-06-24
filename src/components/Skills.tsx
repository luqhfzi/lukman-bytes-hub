import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Shield, 
  Code, 
  Palette, 
  Globe, 
  Server,
  Database,
  Monitor
} from "lucide-react";

const skillCategories = [
  {
    title: "DevOps & Systems",
    icon: Server,
    color: "text-primary",
    skills: ["Ansible", "Docker", "Proxmox", "Linux", "Elasticsearch"]
  },
  {
    title: "Networking",
    icon: Network,
    color: "text-accent",
    skills: ["Router & Switch Configuration", "OpenVPN", "Cloudflared"]
  },
  {
    title: "Programming & Scripting",
    icon: Code,
    color: "text-success",
    skills: ["Bash", "Python", "C/C++", "HTML"]
  },
  {
    title: "Security & Tools",
    icon: Shield,
    color: "text-warning",
    skills: ["Wireshark", "Nmap", "Autopsy", "Zaproxy"]
  },
  {
    title: "Design & Documentation",
    icon: Palette,
    color: "text-primary",
    skills: ["Canva", "Photoshop", "Draw.io"]
  },
  {
    title: "AI Tools",
    icon: Monitor,
    color: "text-warning",
    skills: ["Claude Code", "Claude AI", "ChatGPT"]
  },
  {
    title: "Soft Skills",
    icon: Globe,
    color: "text-accent",
    skills: ["Teamwork", "Communication", "Customer Service", "Problem Solving"]
  },
  {
    title: "Languages",
    icon: Globe,
    color: "text-success",
    skills: ["Bahasa Melayu (Fluent)", "English (Fluent)", "Indonesian (Intermediate)", "Mandarin (Basic)"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive expertise across networking, DevOps, security, and development technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={index}
                  className="bg-gradient-card border-card-border hover:shadow-lg transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-card-secondary border border-card-border`}>
                        <Icon className={`h-5 w-5 ${category.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="text-xs bg-muted hover:bg-card-secondary transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;