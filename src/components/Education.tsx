import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

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

const Education = () => {
  return (
    <section className="py-20 bg-background-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Education
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Academic foundation in computer science and networking
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="bg-gradient-card border-card-border hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.2}s` }}
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
        </div>
      </div>
    </section>
  );
};

export default Education;