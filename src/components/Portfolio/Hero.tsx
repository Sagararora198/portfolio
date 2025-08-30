import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { TypingAnimation } from "./TypingAnimation";
import { CodeSnippet } from "./CodeSnippet";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const typingTexts = [
    "Full Stack Engineer",
    "MongoDB Aggregation & Performance",
    "Node.js Realtime Processing",
    "SAP Integration (OData/ABAP)",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center gradient-hero relative">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Developer Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="gradient-primary bg-clip-text text-transparent">
                Sagar Arora
              </span>
            </h1>
            
            <div className="text-xl lg:text-2xl text-muted-foreground mb-4">
              Full Stack Engineer | Node.js • Angular • MongoDB • SAP OData
            </div>
            
            <div className="text-lg mb-8 h-8">
              <TypingAnimation 
                texts={typingTexts} 
                className="text-primary font-semibold"
              />
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              I build full stack systems that move serious data. I design complex MongoDB aggregation pipelines, optimize queries on multi‑million record collections, and write efficient Node.js services that update data every minute for realtime SAP integrations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="gradient-primary text-primary-foreground hover-lift font-semibold px-8"
                onClick={() => {
                  // Create a downloadable resume PDF
                  const link = document.createElement('a');
                  link.href = '/associate_engineer.pdf';
                  link.download = 'Sagar_Arora_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover-lift border-primary/30 hover:border-primary px-8"
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Right Side - Code Snippet */}
          <div className="flex justify-center lg:justify-end">
            <CodeSnippet />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};