import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { ChezSantiumSection } from "./../../sections/ChezSantiumSection";

export const ActionTeamSection = (): JSX.Element => {
  const [isImperialVisible, setIsImperialVisible] = useState(false);
  const imperialRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start 1-second delay before animation
          timeoutRef.current = setTimeout(() => {
            setIsImperialVisible(true);
          }, 300);
          
          // Immediately unobserve to prevent retriggering
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    if (imperialRef.current) {
      observer.observe(imperialRef.current);
    }

    return () => {
      if (imperialRef.current) {
        observer.unobserve(imperialRef.current);
      }
      // Clear timeout if component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <CardContent className="py-8 px-16">
        <div className="flex items-baseline mt-10">
          <div className="font-copperplate font-bold text-white text-[45px] text-left tracking-[4px] leading-[normal]">
            UNE EXÉCUTION
          </div>
          <div 
            ref={imperialRef}
            className={`pl-4 [font-family:'Cinzel_Decorative',Helvetica] font-normal text-white text-[64px] text-left tracking-[4px] leading-[normal] transition-all duration-700 ease-out ${
              isImperialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            IMPÉRIALE
          </div>
        </div>

        <ChezSantiumSection />
      </CardContent>
    </div>
  );
};