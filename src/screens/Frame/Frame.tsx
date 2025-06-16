import React, { useState, useMemo } from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { AboutUsSection } from "./sections/AboutUsSection";
import { ActionTeamSection } from "./sections/ActionTeamSection";
import { OurSlogan } from "./sections/OurSlogan";
import { ServicesSection } from "./sections/ServicesSection";
import markImage from "./../../assets/images/mark.png";
import linkImage from "./../../assets/images/link.png";
import avecSvg from "./../../assets/images/avec-heart.png";

export const Frame = (): JSX.Element => {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  // Navigation items data
  const navigationItems = [
    { text: "À propos", position: "left-[949px]" },
    { text: "Nos services", position: "left-[939px]" },
    { text: "Pourquoi nous?", position: "left-[1178px]" },
    { text: "Contact", position: "left-[1384px]" },
  ];

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  // Calculate dynamic gradient based on cursor position
  const calculateGradient = useMemo(() => {
    const { x, y } = mousePosition;

    // Base gradient stops
    const baseValues = {
      black1: 4,
      red1: 30,
      black2: 48,
      red2: 75,
      black3: 91
    };

    // Dynamic offsets based on cursor position
    const dynamicOffsets = {
      black1: -y * 15,
      red1: (x - 0.5) * 40,
      black2: (y - 0.5) * 20,
      red2: (x - 0.5) * 30 + y * 10,
      black3: y * 10
    };

    // Calculate final stops with constraints
    const blackStop1 = Math.max(0, Math.min(baseValues.black1 + dynamicOffsets.black1, 20));
    const redStop1 = Math.max(10, Math.min(baseValues.red1 + dynamicOffsets.red1, 50));
    const blackStop2 = Math.max(30, Math.min(baseValues.black2 + dynamicOffsets.black2, 60));
    const redStop2 = Math.max(60, Math.min(baseValues.red2 + dynamicOffsets.red2, 85));
    const blackStop3 = Math.max(85, Math.min(baseValues.black3 + dynamicOffsets.black3, 95));

    // Dynamic red intensity based on X position
    const redIntensity = Math.floor(9 + x * 50);

    return `linear-gradient(180deg, 
      rgba(0,0,0,1) 0%, 
      rgba(0,0,0,1) ${blackStop1}%, 
      rgba(204,${redIntensity},9,1) ${redStop1}%, 
      rgba(0,0,0,1) ${blackStop2}%, 
      rgba(204,${redIntensity},9,1) ${redStop2}%, 
      rgba(0,0,0,1) ${blackStop3}%, 
      rgba(0,0,0,1) 100%)`;
  }, [mousePosition.x, mousePosition.y]);

  // Background style with parallax effect
  const backgroundStyle = useMemo(() => ({
    backgroundImage: calculateGradient,
    backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
    backgroundSize: '100% 500%',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  }), [calculateGradient, mousePosition.x, mousePosition.y]);

  return (
    <div
      className="bg-black flex flex-row justify-center w-full h-full min-h-screen"
      data-model-id="23:116"
      onMouseMove={handleMouseMove}
    >
      <div className="bg-black overflow-hidden w-[1729px] relative h-full">
        <div className="relative w-full h-full">
          <div 
            className="w-full h-full transition-all duration-200 ease-out"
            style={backgroundStyle}
          >
            {/* Header with logo and navigation */}
            <header className="relative">
              <img
                className="w-[271px] h-[271px] object-cover"
                alt="Santium logo"
                src={markImage}
              />

              <NavigationMenu className="absolute top-[120px] right-[72px]">
                <NavigationMenuList className="flex gap-8">
                  {navigationItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <div className="
                        [font-family:'Clash_Display',Helvetica] 
                        text-white 
                        hover:text-red-500 
                        text-[26px] 
                        text-center 
                        tracking-[0] 
                        leading-[normal]
                        transition-colors 
                        duration-300
                        cursor-pointer
                        hover:scale-105
                      ">
                        {item.text}
                      </div>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </header>

            {/* Hero section */}
            <section className="flex flex-col items-center mt-20">
              <OurSlogan/>
              <div className="w-[1107px] mt-8 [font-family:'Clash_Display-medium',Helvetica] font-medium text-white text-[36px] text-center tracking-[0] leading-[normal]">
                SOLUTIONS WEB ET SEO
              </div>

              <div className="relative mt-8">
                <Button
                  variant="outline"
                  className="group w-[448px] h-[83px] rounded-[9px] border-4 border-solid border-white bg-transparent hover:text-black transition-colors"
                >
                  <span className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[36px] text-center tracking-[0] leading-[normal] group-hover:text-black">
                    ÉCRIVEZ-NOUS!
                  </span>
                </Button>
              </div>
            </section>
            <div className="h-[150px]"></div>
            <Separator className="w-full h-0.5 mt-40 bg-white" />

            {/* Services and About section */}
            <section className="flex">
              <div className="w-1/2 border-r border-white">
                <div className="pt-24 w-full font-bold text-white text-[48px] text-center tracking-[4px] leading-[normal] mt-20">
                  Fait par SANTIUM...
                </div>
                <div className="w-full flex items-center justify-center mt-4 mb-8">
                  <img
                    alt="Avec 🤍"
                    src={avecSvg}
                  />
                </div>
                <div className="w-full mx-auto p-8 text-white text-[20px] tracking-[1px] leading-[32px]">
                  Notre mission chez Santium est non seulement de développer les
                  meilleurs sites web et d&apos;implémenter les techniques et
                  optimisations SEO les plus efficaces,
                  <br />
                  <br />
                  mais aussi de réaliser chaque projet avec une attention
                  minutieuse au moindre détail.
                  <br />
                  <br />
                  <br />
                  Ce qui fait notre force, ce n&apos;est pas uniquement la
                  qualité du travail, mais surtout l&apos;excellence de son
                  exécution.
                </div>
                <div className="w-full mx-auto p-8 font-copperplate font-medium text-white text-[22px] tracking-[0] leading-[normal]">
                  UNE RAISON DE PLUS POUR TRAVAILLER AVEC NOUS!
                </div>
                <div className="flex justify-center mt-20">
                  <Button
                    variant="outline"
                    className="group w-[448px] h-[83px] rounded-[9px] border-4 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors"
                  >
                    <span className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-[normal] group-hover:text-black">
                      POURQUOI NOUS?
                    </span>
                  </Button>
                </div>
              </div>

              <div className="w-1/2">
                <div className="w-full pl-8 font-copperplate font-bold text-white text-[48px] text-left tracking-[4px] leading-[normal] mt-20">
                  Nos Services
                </div>
                <div className="w-full mx-auto p-8 font-copperplate font-medium text-white text-[20px] tracking-[1px] leading-[32px]">
                  Nous accompagnons les entreprises dans la création de sites
                  web performants, l&apos;optimisation de leur visibilité en
                  ligne, ainsi que la réalisation de solutions visuelles et
                  événementielles.
                  <br />
                  <br />
                  Chaque projet est conçu sur-mesure, avec une attention
                  particulière portée à la qualité et aux résultats.
                </div>
  
                <div className="flex justify-center mt-8">
                  <Button
                    variant="outline"
                    className="group w-[448px] h-[83px] rounded-[9px] border-4 border-solid border-white bg-transparent hover:bg-white hover:text-black transition-colors"
                  >
                    <span className="[font-family:'Clash_Display-Medium',Helvetica] font-medium text-white text-[40px] text-center tracking-[0] leading-[normal] group-hover:text-black">
                      NOS SERVICES
                    </span>
                  </Button>
                </div>

                <Separator className="w-full h-0.5 mt-20 bg-white" />

                <AboutUsSection />
              </div>
            </section>

            <Separator className="w-full h-0.5 bg-white" />
            <ServicesSection />
            <Separator className="w-full h-0.5 bg-white" />
            <ActionTeamSection />

            <Separator className="w-full h-0.5 mt-20 bg-white" />
            <ServicesSection />
            <Separator className="w-full h-0.5 bg-white" />

            {/* Logo section */}
            <section className="flex justify-center mt-[-40px]">
              <img
                className="w-[500px] h-[454px] object-cover"
                alt="Chatgpt image"
                src={linkImage}
              />
            </section>

            {/* Footer */}
            <footer className="flex justify-center py-8 mt-[-72px]">
              <div className="w-full [font-family:'Clash_Display-medium',Helvetica] font-normal text-white text-xl text-center tracking-[1px] leading-[normal]">
                FAIT PAR SANTIUM, AVEC 🤍
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};