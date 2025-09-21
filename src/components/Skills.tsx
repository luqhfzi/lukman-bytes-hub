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
    title: "Networking & Configuration",
    icon: Network,
    color: "text-primary",
    skills: ["Cisco", "VLANs", "Firewalls", "Routing & Switching", "Router", "Switch", "Server", "Cloudflared", "OpenVPN"]
  },
  {
    title: "DevOps & Virtualization",
    icon: Server,
    color: "text-accent",
    skills: ["Ansible", "Proxmox", "VMware", "Docker", "Linux/Unix", "Windows Server", "Elasticsearch"]
  },
  {
    title: "Monitoring & Tools",
    icon: Monitor,
    color: "text-success",
    skills: ["Zabbix", "ELK Stack", "Git", "Supervisor", "Wireshark", "Nmap", "Autopsy"]
  },
  {
    title: "Databases & Systems",
    icon: Database,
    color: "text-warning",
    skills: ["MySQL", "Redis", "Linux", "System Administration", "Troubleshooting", "Automation"]
  },
  {
    title: "Cybersecurity Tools",
    icon: Shield,
    color: "text-destructive",
    skills: ["Wireshark", "Nmap", "Autopsy", "Locust", "Zaproxy", "Security Analysis"]
  },
  {
    title: "Programming",
    icon: Code,
    color: "text-primary",
    skills: ["Bash", "Python", "C", "C++", "HTML", "Scripting", "Automation"]
  },
  {
    title: "Design & Tools",
    icon: Palette,
    color: "text-accent",
    skills: ["Canva", "Photoshop", "Draw.io", "Documentation", "System Design"]
  },
  {
    title: "Languages",
    icon: Globe,
    color: "text-success",
    skills: ["Bahasa Melayu (Fluent)", "English (Fluent)", "Mandarin (Basic)"]
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