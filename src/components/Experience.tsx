import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Freelance",
    company: "Self-Employed",
    period: "September 2025 – Present",
    location: "Malaysia",
    type: "Freelance",
    highlights: [
      "Developing and managing websites, setting up VPN and server automation",
      "Providing digital marketing solutions for clients"
    ],
    technologies: ["Web Development", "VPN Setup", "Server Automation", "Digital Marketing"]
  },
  {
    title: "DevOps Engineer",
    company: "Nazsoft Tech Sdn Bhd",
    period: "January – August 2025",
    location: "Malaysia",
    type: "Full-time",
    highlights: [
      "Automated server deployment and Laravel application configuration using Ansible, reducing setup time by 80%",
      "Improved system reliability by troubleshooting and optimizing network and server performance"
    ],
    technologies: ["Ansible", "Laravel", "Linux", "Server Management"]
  },
  {
    title: "Intern",
    company: "Nazsoft Tech Sdn Bhd",
    period: "2024",
    location: "Malaysia",
    type: "Internship",
    highlights: [
      "Configured firewalls, routers, switches, and servers, strengthening network security and system efficiency",
      "Assisted in Proxmox virtualization setup and VM management, improving resource efficiency"
    ],
    technologies: ["Proxmox", "Networking", "Virtualization", "Security"]
  },
  {
    title: "Field Support Technician",
    company: "E-Content",
    period: "2022 – 2024",
    location: "Malaysia",
    type: "Full-time",
    highlights: [
      "Maintained IT systems across departments, supporting 3,000+ users",
      "Performed system upgrades and decommissioning of legacy equipment"
    ],
    technologies: ["IT Support", "System Maintenance", "Hardware"]
  },
  {
    title: "Field Support Technician",
    company: "UiTM Dengkil",
    period: "2022",
    location: "Malaysia",
    type: "Contract",
    highlights: [
      "Installed and configured PCs for migration projects",
      "Provided on-site support to enhance system accessibility and user experience"
    ],
    technologies: ["PC Configuration", "System Migration", "On-site Support"]
  },
  {
    title: "Project Manager (Intern)",
    company: "Loranet Technologies",
    period: "2022",
    location: "Malaysia",
    type: "Internship",
    highlights: [
      "Led a team as Project Manager to deliver a financial system prototype",
      "Managed project timelines and resources, successfully meeting all requirements"
    ],
    technologies: ["Project Management", "Financial Systems", "Team Leadership"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building robust systems and leading technical projects across diverse environments
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-gradient-card border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-foreground mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tech}
                      </Badge>
                    ))}
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

export default Experience;