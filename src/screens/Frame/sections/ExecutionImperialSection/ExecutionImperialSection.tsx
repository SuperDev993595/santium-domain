import React from "react";

export const ExecutionImperialSection = (): JSX.Element => {
  // Create an array of items to map through instead of repeating the same code
  const missionItems = Array(9).fill(null);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-marquee">
        {missionItems.map((_, index) => (
          <div
            key={index}
            className="mx-4 [-webkit-text-stroke:2px_#ffffff] [font-family:'Clash_Display-Regular',Helvetica] text-transparent text-6xl font-normal tracking-[0] leading-[normal] whitespace-nowrap"
          >
            <span className="[font-family:'Clash_Display-Regular',Helvetica] font-normal text-transparent text-6xl tracking-[0]">
              NOTRE MISSION{" "}
            </span>
            <span className="text-white">🎯</span>
          </div>
        ))}
      </div>
    </div>
  );
};
