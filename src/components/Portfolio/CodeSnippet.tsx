import { useState, useEffect } from "react";

export const CodeSnippet = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const codeSnippet = `const developer = {
  name: "Full Stack Developer",
  stack: ["MongoDB", "Express", "Angular", "Node.js"],
  experience: "1.8+ years",
  passion: "Backend Architecture & Database Optimization"
};

console.log("Building scalable solutions...");`;

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < codeSnippet.length) {
        setDisplayedCode(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="bg-code-bg border border-border rounded-lg p-6 font-mono text-sm max-w-md animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-destructive"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="text-muted-foreground ml-2 text-xs">portfolio.js</span>
      </div>
      <pre className="text-foreground whitespace-pre-wrap">
        {displayedCode}
        <span className="animate-pulse border-r-2 border-primary ml-1">|</span>
      </pre>
    </div>
  );
};