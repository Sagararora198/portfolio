import { useState, useEffect } from "react";
import { Home, User, Zap, FolderOpen, Briefcase, FileText, Mail } from "lucide-react";

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "resume", label: "Resume", icon: FileText },
    { id: "contact", label: "Contact", icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="relative">
        {/* Compact Navigation */}
        <div className={`
          relative bg-card/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-medium
          transition-all duration-300 ease-out
          ${isExpanded ? 'p-3 pr-6' : 'p-2'}
        `}>
          {/* Progress Indicator */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-border/30 rounded-full"></div>
          <div 
            className="absolute left-2 w-0.5 gradient-primary rounded-full transition-all duration-500 ease-out"
            style={{
              height: `${(navItems.findIndex(item => item.id === activeSection) + 1) / navItems.length * 100}%`,
              top: 0
            }}
          ></div>
          
          {/* Navigation Items */}
          <div className="relative space-y-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              
              return (
                <div key={item.id} className="relative">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative flex items-center gap-3 rounded-xl transition-all duration-300 ease-out group
                      ${isExpanded ? 'px-3 py-2 w-full' : 'p-2 justify-center'}
                      ${isActive 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                      }
                    `}
                    title={!isExpanded ? item.label : undefined}
                  >
                    {/* Icon */}
                    <div className={`
                      flex items-center justify-center transition-all duration-300
                      ${isActive ? 'text-primary-foreground' : 'text-current'}
                      ${isExpanded ? 'w-5 h-5' : 'w-4 h-4'}
                    `}>
                      <Icon className="w-full h-full" />
                    </div>
                    
                    {/* Label - Only show when expanded */}
                    {isExpanded && (
                      <span className={`
                        font-medium text-sm transition-all duration-300 whitespace-nowrap
                        ${isActive ? 'text-primary-foreground' : 'text-current'}
                      `}>
                        {item.label}
                      </span>
                    )}
                  </button>
                  
                  {/* Section Dot Indicator */}
                  <div className={`
                    absolute -left-1 top-1/2 transform -translate-y-1/2 -translate-x-1/2
                    w-3 h-3 rounded-full border transition-all duration-300 z-10
                    ${isActive 
                      ? 'bg-primary border-primary scale-125' 
                      : 'bg-card border-border scale-100'
                    }
                  `}></div>
                </div>
              );
            })}
          </div>
          
          {/* Expand Hint */}
          {!isExpanded && (
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
              <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg px-2 py-1">
                <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Quick Actions - Only show when expanded */}
        {isExpanded && (
          <div className="mt-2 space-y-1 animate-fade-in">
            <button
              onClick={() => scrollToSection("hero")}
              className="w-full bg-primary/10 backdrop-blur-sm hover:bg-primary/20 
                         border border-primary/20 rounded-xl p-2 text-primary 
                         transition-all duration-300 hover-lift text-xs font-medium"
              title="Back to Top"
            >
              ↑ Top
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};