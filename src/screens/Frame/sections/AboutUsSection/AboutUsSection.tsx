import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";

export const AboutUsSection = (): JSX.Element => {
  return (
    <Card className="w-full p-8 mx-auto text-white bg-transparent border-none">
      <CardContent className="p-0">
        <div className="w-full font-bold text-white text-[44px] text-left tracking-[4px] leading-[normal] mt-20">
          Une équipe d’action
        </div>
        <div className="p-0 text-[20px] tracking-[0] leading-normal mt-8">
          <p className="mb-4">
            Chez Santium, nous concevons des expériences digitales sur-mesure,
            pensées pour sublimer votre image et propulser votre visibilité.
          </p>
          <p className="mb-4">
            Stratégie, design, performance : nous orchestrons l&apos;ensemble
            avec rigueur et précision.
          </p>
          <p className="font-bold">
            Prenez contact dès maintenant et confiez votre projet à des experts
            dédiés à votre succès.
          </p>
        </div>
        <div className="flex justify-center mt-20 mb-20">
          <Button
            variant="outline"
            className="group w-[448px] h-[83px] rounded-[9px] border-4 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors"
          >
            <span className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-[normal] group-hover:text-black">
              ÉCRIVEZ-NOUS!
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
