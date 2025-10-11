import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Food Handler Training Course",
    issuer: "Malaysia Health Certification",
    date: "9 May 2025",
    category: "Health",
    recent: true
  },
  {
    title: "Typhoid Injection Certificate",
    issuer: "Malaysia Health Certification",
    date: "13 May 2025",
    category: "Health",
    recent: true
  },
  {
    title: "Certified Information Security Awareness Manager (CISAM)",
    issuer: "Information Security Awareness",
    date: "November 2024",
    category: "Security",
    recent: true
  },
  {
    title: "CCNA v7: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "May 2024",
    category: "Networking",
    recent: true
  },
  {
    title: "CCNP Enterprise: Core Networking",
    issuer: "Cisco",
    date: "February 2024",
    category: "Networking",
    recent: true
  },
  {
    title: "CCNA R&S: Connecting Networks",
    issuer: "Cisco",
    date: "August 2020",
    category: "Networking"
  }
];

const education = [
  {
    degree: "Bachelor of Computer Science (Hons.) Computer Networking",
    institution: "Universiti Teknologi MARA (UiTM) Shah Alam",
    period: "Oct 2021 – Jan 2025",
    cgpa: "3.06",
    status: "graduated",
    achievements: [
      "Focus on advanced networking, security, and DevOps technologies",
      "Completed capstone projects on network automation"
    ]
  },
  {
    degree: "Diploma in Information Technology (Digital Technology) Networking",
    institution: "Politeknik Sultan Idris Shah (PSIS) Sabak Bernam",
    period: "Jun 2018 – Jul 2022",
    cgpa: "3.78",
    status: "graduated",
    achievements: [
      "Dean's List – Every Semester (CGPA Above 3.70)",
      "2nd Place – Regional Science Competition (Parcel Management App)",
      "Leadership Award – Cybersecurity Awareness Program (SULAM)"
    ]
  }
];

const Certifications = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Education & Certifications
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Continuous learning and professional development in networking, security, and technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="bg-gradient-card border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant="secondary"
                        className="text-xs"
                      >
                        Graduated
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground leading-tight">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-primary font-semibold">{edu.institution}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <Badge variant="outline" className="text-xs border-success text-success">
                        CGPA: {edu.cgpa}
                      </Badge>
                      {edu.achievements && (
                        <div className="space-y-1 mt-3">
                          {edu.achievements.map((achievement, idx) => (
                            <div key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Certifications</h3>
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className={`bg-gradient-card border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in ${
                    cert.recent ? 'ring-1 ring-primary/20' : ''
                  }`}
                  style={{ animationDelay: `${(index + education.length) * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge 
                        variant="secondary"
                        className={`text-xs ${
                          cert.category === 'Security' ? 'bg-destructive/10 text-destructive' :
                          cert.category === 'Networking' ? 'bg-primary/10 text-primary' :
                          cert.category === 'Health' ? 'bg-success/10 text-success' :
                          'bg-muted'
                        }`}
                      >
                        {cert.category}
                      </Badge>
                      {cert.recent && (
                        <Badge variant="outline" className="text-xs border-primary text-primary">
                          Recent
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-foreground leading-tight">
                      {cert.title}
                    </CardTitle>
                    <p className="text-primary font-semibold">{cert.issuer}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{cert.date}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;