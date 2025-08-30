import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Database, Server, Smartphone } from "lucide-react";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "PALTU - Street Animal Welfare App",
      category: "Mobile",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Kotlin-based mobile application for street animal adoption with Tinder-like UI",
      longDescription: "Developed comprehensive mobile application in collaboration with NGO to facilitate street animal adoption and welfare. Implemented intuitive Tinder-like UI/UX for animal adoption matching system using Kotlin and modern mobile development practices. Built integrated veterinary consultation platform connecting pet parents with licensed veterinarians.",
      techStack: ["Kotlin", "Firebase", "Android SDK", "Material Design", "REST APIs"],
      features: [
        "Tinder-like matching system for adoptions",
        "Integrated veterinary consultation platform",
        "Real-time messaging between adopters and NGOs",
        "Location-based animal discovery",
        "Firebase authentication and database"
      ],
      github: "https://github.com/Sagararora198",
      demo: "#",
      status: "Production"
    },
    {
      id: 2,
      title: "WorkPlaceWonders - Asset Management",
      category: "Mobile",
      icon: <Database className="h-6 w-6" />,
      description: "Enterprise digital asset management solution replacing manual tracking methods",
      longDescription: "Architected and developed comprehensive digital asset management solution for large organizations, replacing traditional manual tracking methods with automated inventory management, real-time tracking, and reporting capabilities. Designed feedback and communication modules enabling organization-wide collaboration and asset review processes.",
      techStack: ["Kotlin", "Firebase", "Android SDK", "Material Design", "Cloud Functions"],
      features: [
        "Automated inventory management system",
        "Real-time asset tracking and reporting",
        "Organization-wide collaboration tools",
        "Asset review and feedback modules",
        "Cloud-based data synchronization"
      ],
      github: "https://github.com/Sagararora198",
      demo: "#",
      status: "Production"
    },
    {
      id: 3,
      title: "Sales Prediction Analytics Platform",
      category: "Full Stack",
      icon: <Server className="h-6 w-6" />,
      description: "Machine learning web application with SARIMAX model for sales forecasting",
      longDescription: "Developed intelligent sales forecasting web application utilizing SARIMAX (Seasonal Auto-Regressive Integrated Moving Average with eXogenous factors) time series model for accurate future sales prediction. Created interactive web dashboard using Angular, Flask and Node enabling business stakeholders to visualize sales trends and generate forecasts.",
      techStack: ["Python", "Angular", "Node.js", "Flask", "MongoDB", "SARIMAX", "Chart.js"],
      features: [
        "SARIMAX time series forecasting model",
        "Interactive web dashboard for data visualization",
        "Business stakeholder reporting tools",
        "Offline prediction capabilities",
        "Strategic decision-making analytics"
      ],
      github: "https://github.com/Sagararora198",
      demo: "#",
      status: "Complete"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing full stack projects with MongoDB aggregations, efficient Node.js services, and realtime integrations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`hover-lift cursor-pointer transition-all duration-300 gradient-card border-0 shadow-soft ${
                selectedProject === project.id ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {project.icon}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${
                      project.status === 'Production' ? 'bg-green-100 text-green-700' :
                      project.status === 'Live' ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge className="w-fit bg-primary/10 text-primary border-primary/20">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {selectedProject === project.id ? project.longDescription : project.description}
                </p>
                
                {selectedProject === project.id && (
                  <div className="animate-fade-in space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button 
                        size="sm" 
                        className="flex-1 gradient-primary"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.slice(0, selectedProject === project.id ? project.techStack.length : 3).map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs border-primary/20 text-primary"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {selectedProject !== project.id && project.techStack.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.techStack.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg" 
            className="hover-lift"
            onClick={() => window.open('https://github.com/Sagararora198', '_blank')}
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};