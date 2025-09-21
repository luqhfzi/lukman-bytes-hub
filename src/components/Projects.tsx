import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Automated Laravel Deployment using Ansible",
    description: "Complete automation solution for Laravel application deployment with server configuration, reducing setup time by 80%.",
    technologies: ["Ansible", "Laravel", "Linux", "DevOps", "Automation"],
    category: "DevOps",
    featured: true
  },
  {
    title: "Advanced Server Monitoring System",
    description: "Comprehensive monitoring system using Elasticsearch for real-time server performance tracking and alerting.",
    technologies: ["Elasticsearch", "ELK Stack", "Monitoring", "Linux"],
    category: "Infrastructure",
    featured: true
  },
  {
    title: "Bash Port Monitoring System",
    description: "Custom bash script solution for monitoring network ports and service availability with automated alerts.",
    technologies: ["Bash", "Networking", "Monitoring", "Linux"],
    category: "Networking"
  },
  {
    title: "Automated OSPF Network Configuration in GNS3",
    description: "Advanced network automation project for OSPF protocol configuration in virtualized network environments.",
    technologies: ["GNS3", "OSPF", "Networking", "Automation"],
    category: "Networking"
  },
  {
    title: "SULAM Smart Flood (Kami Peduli App)",
    description: "Community disaster relief application for flood relief supplies & donations management. Recognized community impact project.",
    technologies: ["Mobile Development", "Community Service", "Disaster Management"],
    category: "Community",
    award: "Recognized Project"
  },
  {
    title: "Parcel Management App",
    description: "Comprehensive parcel tracking and management system. Won 2nd Place in Regional Science Competition.",
    technologies: ["App Development", "Database", "Management System"],
    category: "Application",
    award: "2nd Place - Regional Science Competition"
  },
  {
    title: "Automatic Cat Feeder using ESP32",
    description: "IoT-based automated pet feeding system with remote monitoring and scheduling capabilities.",
    technologies: ["ESP32", "IoT", "C++", "Hardware"],
    category: "IoT"
  }
];

const Projects = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Innovative solutions spanning DevOps automation, network engineering, and community impact applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`bg-gradient-card border-card-border hover:shadow-lg transition-all duration-300 group animate-fade-in ${
                  project.featured ? 'ring-1 ring-primary/20' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${
                        project.category === 'DevOps' ? 'bg-primary/10 text-primary' :
                        project.category === 'Infrastructure' ? 'bg-accent/10 text-accent' :
                        project.category === 'Networking' ? 'bg-success/10 text-success' :
                        project.category === 'Community' ? 'bg-warning/10 text-warning' :
                        'bg-muted'
                      }`}
                    >
                      {project.category}
                    </Badge>
                    {project.featured && (
                      <Badge variant="outline" className="text-xs border-primary text-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </CardTitle>
                  {project.award && (
                    <Badge variant="outline" className="text-xs border-success text-success w-fit">
                      🏆 {project.award}
                    </Badge>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs border-card-border hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-card-border hover:bg-card-secondary"
                    >
                      <Github className="mr-2 h-3 w-3" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-card-border hover:bg-card-secondary"
                    >
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;