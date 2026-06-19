import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Network Support Engineer",
    company: "Cet Development Sdn Bhd",
    period: "November 2026 – Present",
    location: "Malaysia",
    type: "Full-time",
    highlights: [
      "Maintained hospital network using Cisco and TRENDnet devices to ensure stable connectivity",
      "Monitored and resolved network issues using Zabbix and PRTG",
      "Automated network configuration tasks using Python (Netmiko)"
    ],
    technologies: ["Cisco", "TRENDnet", "Zabbix", "PRTG", "Python", "Netmiko"]
  },
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
    period: "September 2024 – January 2025",
    location: "Malaysia",
    type: "Internship",
    highlights: [
      "Configured firewalls, routers, switches, and servers, improving security and efficiency",
      "Assisted in Proxmox virtualization setup and VM management"
    ],
    technologies: ["Proxmox", "Networking", "Virtualization", "Security"]
  },
  {
    title: "F&B / Retail Crew",
    company: "MyNews",
    period: "June – July 2025",
    location: "Malaysia",
    type: "Part-time",
    highlights: [
      "Provided excellent customer service and handled POS transactions",
      "Maintained cleanliness and ensured food preparation met hygiene standards",
      "Assisted in daily store operations and inventory management"
    ],
    technologies: ["Customer Service", "POS Systems", "Inventory Management"]
  },
  {
    title: "Promoter",
    company: "BITC",
    period: "January – August 2024",
    location: "Malaysia",
    type: "Part-time",
    highlights: [
      "Assisted customers with product selection and inquiries",
      "Handled stock arrangement, restocking, and cashier duties",
      "Maintained store organization and ensured smooth daily operations"
    ],
    technologies: ["Customer Service", "Sales", "Retail Operations"]
  },
  {
    title: "Retail Assistant",
    company: "Econsave Supermarket",
    period: "August 2023",
    location: "Malaysia",
    type: "Part-time",
    highlights: [
      "Achieved top sales performance, exceeding monthly targets by 25%",
      "Delivered strong customer service and product knowledge to drive loyalty",
      "Organized stock and maintained a clean, efficient retail environment"
    ],
    technologies: ["Sales", "Customer Service", "Inventory Management"]
  },
  {
    title: "Field Support Technician",
    company: "E-Content (M) Sdn. Bhd.",
    period: "2023 – 2024",
    location: "Malaysia",
    type: "Full-time",
    highlights: [
      "Maintained IT systems across departments supporting 3,000+ users",
      "Upgraded and decommissioned systems and hardware efficiently"
    ],
    technologies: ["IT Support", "System Maintenance", "Hardware"]
  },
  {
    title: "Field Support Technician",
    company: "UiTM Dengkil",
    period: "March 2023",
    location: "Malaysia",
    type: "Contract",
    highlights: [
      "Installed and configured PCs for migration",
      "Provided on-site support to ensure accessibility and smooth operations"
    ],
    technologies: ["PC Configuration", "System Migration", "On-site Support"]
  },
  {
    title: "Project Manager (Intern)",
    company: "Loranet Technologies PLT",
    period: "January – May 2021",
    location: "Malaysia",
    type: "Internship",
    highlights: [
      "Led a team in developing a financial system prototype",
      "Managed project timelines and successfully met all deliverables"
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