import React, { useEffect, useRef, useState } from "react";

export const ChezSantiumSection = (): JSX.Element => {
  const [isPromiseVisible, setIsPromiseVisible] = useState(false);
  const promiseRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start 1-second delay before animation
          timeoutRef.current = setTimeout(() => {
            setIsPromiseVisible(true);
          }, 300);
          
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (promiseRef.current) {
      observer.observe(promiseRef.current);
    }

    return () => {
      if (promiseRef.current) {
        observer.unobserve(promiseRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full py-8 font-copperplate font-normal text-white text-[24px]">
      <div className="w-full mx-auto">
        <p className="font-bold text-[22px] tracking-[2px] mb-6">
          Chez Santium, chaque mandat est abordé avec une rigueur impériale.
          <br />
          <br />
          Nous ne nous contentons pas de créer des sites web ou d&apos;optimiser
          des stratégies digitales : nous orchestrons des projets où chaque
          détail est méticuleusement pensé, chaque choix est stratégique, chaque
          ligne de code sert un objectif précis.
        </p>

        <p className="font-bold text-[22px] tracking-[2px] mb-6">
          Notre expertise s&#39;étend bien au-delà de la technique. Nous
          sculptons des présences digitales durables, pensées pour dominer leur
          marché et inspirer la confiance.
        </p>

        <p className="font-bold text-[22px] tracking-[2px] mb-16">
          Basés à Montréal, nous accompagnons une clientèle exigeante qui
          recherche l&apos;excellence dans l&apos;exécution, la précision dans
          la stratégie et l&apos;élégance dans le résultat.
        </p>

        <div className="flex flex-wrap items-baseline mb-6">
          <span className="font-bold text-[45px]">NOTRE </span>
          <span 
            ref={promiseRef}
            className={`pl-4 [font-family:'Cinzel_Decorative',Helvetica] text-[64px] transition-all duration-700 ease-out ${
              isPromiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            PROMESSE
          </span>
        </div>

        <div className="w-full mx-auto font-copperplate font-bold text-white text-[22px] tracking-[0] leading-[normal]">
          Chez Santium, chaque projet est exécuté avec le même engagement
          absolu :<br />
          Excellence, précision et résultats mesurables
          <br />
          <br />
          Nous nous engageons à concevoir des solutions digitales
          sur-mesure, à anticiper chaque détail stratégique et à dépasser
          les standards de qualité attendus.
          <br />
          <br />
          <br />
          Votre ambition devient notre responsabilité.
        </div>
      </div>
    </section>
  );
};