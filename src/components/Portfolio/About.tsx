import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Server } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Full Stack Engineering",
      description: "Node.js and Angular apps with clean, scalable TypeScript and robust CI/CD"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "MongoDB at Scale",
      description: "Designed complex aggregations, optimized million+ record collections, cut runtime 70%"
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Realtime Integrations",
      description: "Efficient Node services syncing SAP via OData/ABAP with minute‑level updates"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Full Stack engineering across APIs, data, and realtime flows
            </h3>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I deliver pragmatic full stack solutions: expressive REST/OData APIs, resilient Node.js services, and polished Angular frontends—supported by strong observability and performance baselines.
              </p>
              <p>
                On the data layer, I write and tune complex MongoDB aggregation pipelines, optimize compound indexes, and batch/process datasets with millions of documents reliably.
              </p>
              <p>
                For integrations, I build efficient Node workers that parallelize I/O with promises, implement backpressure, and keep SAP data in near‑realtime with minute‑level update cycles.
              </p>
            </div>
          </div>
          
          {/* Right Side - Highlights */}
          <div className="space-y-6 animate-slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-lift gradient-card border-0 shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
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