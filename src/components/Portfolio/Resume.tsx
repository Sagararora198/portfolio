import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye, FileText } from "lucide-react";

export const Resume = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download my resume or view it online to see my complete professional journey, 
            skills, and achievements in detail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card border-0 shadow-medium">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 rounded-full bg-primary/10 w-fit mb-4">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Sagar Arora - Resume</CardTitle>
              <p className="text-muted-foreground">
                Associate Software Engineer specializing in SAP ERP Integration & Full Stack Development
              </p>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Resume Preview */}
              <div className="bg-card border rounded-lg p-8 text-sm space-y-6">
                <div className="text-center border-b pb-4">
                  <h3 className="text-xl font-bold">Sagar Arora</h3>
                  <p className="text-muted-foreground">Associate Software Engineer | SAP ERP Specialist</p>
                  <p className="text-muted-foreground">sagar.arora198@gmail.com | +91 XXX-XXX-XXXX</p>
                  <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">PROFESSIONAL SUMMARY</h4>
                  <p className="text-muted-foreground">
                    Results-driven Software Engineer with 1.8 years of hands-on experience in enterprise software development, 
                    ERP system integration, and full-stack web development. Expertise in SAP ERP systems, MongoDB optimization, 
                    and microservices architecture. Proven track record of reducing system dependencies by 95% and improving 
                    data processing efficiency by 70%.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">TECHNICAL SKILLS</h4>
                  <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                    <div>
                      <strong>Backend:</strong> Node.js, Express.js, MongoDB, Redis, SAP ABAP
                    </div>
                    <div>
                      <strong>Frontend:</strong> Angular, JavaScript, TypeScript, HTML5, CSS3
                    </div>
                    <div>
                      <strong>Mobile:</strong> Kotlin, Android SDK, Firebase
                    </div>
                    <div>
                      <strong>Tools:</strong> Git, Postman, VS Code, MongoDB Compass
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-2">KEY ACHIEVEMENTS</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Reduced ERP system dependencies by 95% through microservices migration</li>
                    <li>• Improved MongoDB data processing efficiency by 70% (6+ hours to 1-2 hours)</li>
                    <li>• Developed OData APIs for seamless SAP ERP enterprise integration</li>
                    <li>• Built 3 production-ready mobile and web applications</li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  Download PDF Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover-lift border-primary/30 hover:border-primary px-8"
                  onClick={() => window.open('https://www.linkedin.com/in/sagar-arora-475692234/', '_blank')}
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View LinkedIn Profile
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-center text-sm text-muted-foreground">
                <p>Resume last updated: January 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};