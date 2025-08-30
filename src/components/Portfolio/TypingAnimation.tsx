import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  className?: string;
}

export const TypingAnimation = ({ texts, className = "" }: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let index = 0;

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (index < currentText.length) {
          setDisplayedText(currentText.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setDisplayedText("");
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          }, 2000);
          clearInterval(typingInterval);
        }
      }, 100);

      return () => clearInterval(typingInterval);
    }
  }, [currentTextIndex, isTyping, texts]);

  return (
    <span className={`${className} font-mono`}>
      {displayedText}
      <span className="animate-pulse border-r-2 border-primary ml-1">|</span>
    </span>
  );
};