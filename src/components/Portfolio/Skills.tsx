import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("backend");

  const skillCategories = {
    backend: {
      title: "Backend & Database",
      color: "bg-primary",
      skills: [
        { name: "Node.js", level: 90, description: "Server-side JavaScript runtime" },
        { name: "Express.js", level: 85, description: "Web application framework" },
        { name: "MongoDB", level: 95, description: "Advanced aggregation & optimization" },
        { name: "Redis", level: 80, description: "Caching and session management" },
        { name: "RESTful APIs", level: 90, description: "OData API design & development" },
        { name: "SAP ABAP", level: 75, description: "Enterprise system integration" }
      ]
    },
    frontend: {
      title: "Frontend Technologies",
      color: "bg-blue-500",
      skills: [
        { name: "Angular", level: 85, description: "Component-based framework" },
        { name: "JavaScript", level: 90, description: "Modern ES6+ features" },
        { name: "TypeScript", level: 85, description: "Type-safe development" },
        { name: "HTML5", level: 90, description: "Semantic markup" },
        { name: "CSS3", level: 80, description: "Modern styling & animations" },
        { name: "Responsive Design", level: 85, description: "Mobile-first approach" }
      ]
    },
    tools: {
      title: "Tools & DevOps",
      color: "bg-green-500",
      skills: [
        { name: "Docker", level: 85, description: "Version control & collaboration" },
        { name: "Kubernetes", level: 90, description: "Primary development environment" },
        { name: "microservices", level: 80, description: "API testing & documentation" },
        { name: "MongoDB Compass", level: 85, description: "Database management" },
        { name: "Linux", level: 75, description: "Server administration" },
        { name: "AWS/Cloud", level: 70, description: "Cloud deployment basics" }
      ]
    }
  };

  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across the full development stack, with a particular focus 
            on backend architecture and database optimization.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-2 bg-card rounded-lg border">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Skills */}
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Card className="gradient-card border-0 shadow-medium">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-3">
                <div className={`w-4 h-4 rounded-full ${skillCategories[activeCategory as keyof typeof skillCategories].color}`}></div>
                {skillCategories[activeCategory as keyof typeof skillCategories].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{skill.name}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                    <Badge variant="secondary" className="text-sm font-semibold">
                      {skill.level}%
                    </Badge>
                  </div>
                  <Progress value={skill.level} className="h-3" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Key Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["MongoDB", "Express.js", "Angular", "Node.js", "SAP ERP", "TypeScript", "Redis", "Git"].map((tech) => (
              <Badge 
                key={tech} 
                className="px-4 py-2 text-sm font-medium hover-lift bg-primary/10 text-primary border-primary/20"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};