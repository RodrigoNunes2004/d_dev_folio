import { useState, useEffect } from "react";

interface TypingTextProps {
  text: string[];
  duration?: number;
  cursor?: boolean;
  loop?: boolean;
  holdDelay?: number;
  className?: string;
}

export const TypingText = ({
  text,
  duration = 100,
  cursor = true,
  loop = true,
  holdDelay = 1000,
  className = "",
}: TypingTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = text[currentTextIndex];

    if (!isDeleting) {
      if (currentText.length < current.length) {
        const timeout = setTimeout(() => {
          setCurrentText(current.slice(0, currentText.length + 1));
        }, duration);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, holdDelay);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(current.slice(0, currentText.length - 1));
        }, duration / 2);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        if (loop) {
          setCurrentTextIndex((prev) => (prev + 1) % text.length);
        }
      }
    }
  }, [
    currentText,
    currentTextIndex,
    isDeleting,
    text,
    duration,
    holdDelay,
    loop,
  ]);

  return (
    <span className={`${className} inline-block`}>
      {currentText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
};
