import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      company: "Innovapptive Inc",
      role: "Associate Software Engineer",
      duration: "January 2024 - Present",
      location: "Hyderabad, Telangana",
      type: "Full-time",
      description: "Developing enterprise-grade business solutions with SAP ERP integration and full-stack web applications",
      achievements: [
        "Built full stack features across Angular frontends and Node.js services",
        "Designed and optimized complex MongoDB aggregations on million+ document collections",
        "Reduced heavy jobs from 6+ hours to ~1–2 hours (70% faster) via indexes and pipeline tuning",
        "Implemented minute‑level realtime sync jobs with SAP OData/ABAP and robust retry/parallelism",
        "Reduced ERP dependencies by 95% by moving to microservices and local caches"
      ],
      technologies: ["TypeScript", "Angular", "Node.js", "MongoDB", "Redis", "SAP OData/ABAP", "Express", "RxJS"]
    },
    {
      company: "MIT Academy of Engineering",
      role: "Computer Science Student & Project Developer",
      duration: "2020 - 2024",
      location: "Pune, Maharashtra",
      type: "Education",
      description: "Completed Bachelor of Technology in Computer Science with 8.2/10.0 CGPA while developing innovative projects",
      achievements: [
        "Data Structures and Algorithms",
        "Machine Learning",
      ],
      technologies: ["Kotlin", "Python", "Angular", "Node.js", "Flask", "Firebase", "Android SDK", "Machine Learning"]
    }
  ];

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Full stack engineer focused on performant Node.js services, scalable MongoDB, and realtime SAP integrations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="hover-lift gradient-card border-0 shadow-soft animate-slide-up">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary">{exp.role}</h3>
                          <h4 className="text-lg font-semibold">{exp.company}</h4>
                        </div>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          {exp.type}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div className="space-y-3 mb-6">
                        <h5 className="font-semibold flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1 font-bold">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs border-primary/20 text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};