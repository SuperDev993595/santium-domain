import React from "react";

export const ServicesSection = (): JSX.Element => {
  // Create an array of repeated mission text items for better code maintainability
  const missionItems = Array(9).fill({
    text: "NOTRE MISSION",
    emoji: "🎯",
  });

  return (
    <section className="w-full py-8 overflow-hidden scrollingBanner">
      {/* Marquee container with horizontal scroll effect */}
      <div className="relative w-full overflow-hidden scrollingContent">
        <div className="flex animate-[scroll_20s_linear_infinite]">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-shrink-0 mx-4 [-webkit-text-stroke:2px_#ffffff] [font-family:'ClashDisplay-Bold',Helvetica] text-transparent text-[60px] font-normal tracking-[0] leading-[normal] items-center justify-center"
            >
              <div className="[font-family:'ClashDisplay-Bold',Helvetica] font-normal text-transparent text-[60px] tracking-[0]">
                {item.text}{" "}
              </div>
              <img 
                src="https://em-content.zobj.net/source/apple/81/direct-hit_1f3af.png" 
                loading="lazy" 
                className="w-[80px] h-[80px] object-contain mt-[-22px] ml-[15px]"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
