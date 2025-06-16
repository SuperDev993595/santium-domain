import React, { useState, useEffect } from "react";

export const OurSlogan = (): JSX.Element => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [cycleCount, setCycleCount] = useState(0);

  const textLines = [
    "Votre succès,",
    "Notre accomplissement."
  ];

  // Fixed height calculation (2 lines of text + margin)
  const lineHeight = 68; // Your text-[68px]
  const margin = 12; // mt-3 = 12px
  const fixedHeight = (lineHeight * 2) + margin;

  const resetAnimation = () => {
    setFirstLine("");
    setSecondLine("");
    setCycleCount(prev => prev + 1);
  };

  useEffect(() => {
    let timers: NodeJS.Timeout[] = [];
    let cursorTimer: NodeJS.Timeout;

    // Typing logic
    if (firstLine.length < textLines[0].length) {
      timers.push(setTimeout(() => {
        setFirstLine(textLines[0].substring(0, firstLine.length + 1));
      }, 50));
    } 
    else if (secondLine.length < textLines[1].length) {
      timers.push(setTimeout(() => {
        setSecondLine(textLines[1].substring(0, secondLine.length + 1));
      }, 50));
    }
    else {
      timers.push(setTimeout(resetAnimation, 30000)); // Pause before restart
    }

    // Cursor blink effect
    cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Force reset every 30s
    const cycleTimer = setTimeout(resetAnimation, 30000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(cursorTimer);
      clearTimeout(cycleTimer);
    };
  }, [firstLine, secondLine, cycleCount]);

  return (
    <section 
      className="w-full flex flex-col items-center justify-center mb-10"
      style={{ height: `${fixedHeight}px` }} // Fixed height container
    >
      <div className="relative">
        {/* First Line */}
        <div className="w-full [font-family:'Libre_Baskerville',Helvetica] font-normal text-white text-[68px] text-center tracking-[0] leading-[normal]">
          {firstLine}
          <span 
            className={`absolute ml-1 h-[68px] w-1 bg-white transition-opacity duration-300 ${showCursor ? "opacity-100" : "opacity-0"}`}
            style={{ display: firstLine.length < textLines[0].length ? "inline-block" : "none" }}
          />
        </div>
        
        {/* Second Line */}
        <div className="mt-3 w-full [font-family:'Libre_Baskerville',Helvetica] text-white text-[68px] text-center font-normal tracking-[0] leading-[normal]">
          {secondLine}
          <span 
            className={`absolute ml-1 h-[68px] w-1 bg-white transition-opacity duration-300 ${showCursor ? "opacity-100" : "opacity-0"}`}
            style={{ 
              display: firstLine === textLines[0] && secondLine.length < textLines[1].length ? "inline-block" : "none" 
            }}
          />
        </div>
      </div>
    </section>
  );
};