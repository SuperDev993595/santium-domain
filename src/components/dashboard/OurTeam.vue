<script setup lang="ts">
import Santana from '@/assets/images/mates/santana.png'
import Shukreet from '@/assets/images/mates/shukreet.png'
import William from '@/assets/images/mates/william.png'
import Antonio from '@/assets/images/mates/antonio.png'
import Reymark from '@/assets/images/mates/reymark.png'

import MemberInfoCard from '@/components/card/MemberInfoCard.vue'
import MemberInfoRtlCard from '@/components/card/MemberInfoRtlCard.vue'
import SeperatorView from '@/components/lib/SeperatorView.vue'
</script>

<template>
  <div class="w-full h-full lg:pt-30">
    <div
      class="text-[45px] font-bold text-white mt-[100px] pl-[60px] pb-[70px] hidden lg:block x-font-large"
    >
      Notre équipe gagnante
    </div>

    <MemberInfoCard
      title="Directeur créatif"
      :imageSrc="Santana"
      animation-type="image_down_content_down"
    >
      <br />
      Muhammad "Santana" Ba est le fondateur et directeur de Santium,
      <br /><br />
      une agence créative fondée en octobre 2024 avec une mission claire : offrir aux entreprises
      une présence digitale puissante, cohérente et sur-mesure.
      <br /><br />
      À la tête de l'exécution web, il transforme chaque vision en plateforme performante et
      élégante, tout en assurant l’alignement parfait entre identité visuelle, stratégie de marque
      et expérience utilisateur.
      <br /><br />
      Exigeant sur les détails et engagé dans chaque projet, Santana garantit une direction claire,
      une rigueur d’exécution et une approche humaine.
      <br /><br />
      Son objectif : positionner chaque client avec impact et crédibilité dans un univers digital
      saturé.
    </MemberInfoCard>

    <div
      class="relative h-[100px] lg:h-[440px] pt-[20px] lg:py-[50px] flex justify-center items-center !mb-[-20px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>

    <MemberInfoRtlCard
      title="UI/UX Designer chez Santium"
      :imageSrc="Shukreet"
      animation-type="image_down_content_up"
    >
      <br />
      Shukreet Kaur est UI/UX Designer chez Santium.
      <br /><br />
      Elle est en charge de concevoir des interfaces web modernes, fonctionnelles et centrées sur
      l'utilisateur.
      <br /><br />
      Spécialisée dans la création de maquettes sur mesure, elle veille à ce que chaque site combine
      clarté, esthétisme et efficacité. Son travail repose sur une compréhension fine des besoins
      des utilisateurs et des objectifs de chaque client.
      <br /><br />
      Avec un œil affûté pour le détail et une approche structurée, Shukreet pose les bases
      visuelles de chaque projet web signé Santium.
    </MemberInfoRtlCard>

    <div
      class="relative h-[100px] lg:h-[440px] pt-[20px] lg:py-[50px] flex justify-center items-center !mb-[-20px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>

    <MemberInfoCard
      title="Graphiste & Responsable Branding chez Santium"
      :imageSrc="William"
      animation-type="image_up_content_down"
    >
      <br />
      William est le graphiste en charge du branding chez Santium.
      <br /><br />
      Il crée des identités visuelles fortes et cohérentes qui reflètent parfaitement l’essence de
      chaque marque.
      <br /><br />
      Son expertise couvre la création de logos, chartes graphiques et supports visuels,
      garantissant une image professionnelle et impactante.
      <br /><br />
      William travaille en étroite collaboration avec l’équipe pour aligner le branding avec la
      stratégie digitale globale.
      <br /><br />
      Son approche créative et rigoureuse permet à chaque client de Santium de se démarquer
      durablement sur son marché.
    </MemberInfoCard>

    <div
      class="relative h-[100px] lg:h-[440px] pt-[20px] lg:py-[50px] flex justify-center items-center !mb-[-20px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>

    <MemberInfoRtlCard
      title="Responsable Commercial & Rédacteur chez Santium"
      :imageSrc="Antonio"
      animation-type="image_up_content_down"
    >
      <br />
      Antonio est en charge du développement commercial et de la rédaction chez Santium. À la fois
      stratège et communicant, il s’occupe de présenter l’agence, de comprendre les besoins des
      clients et de les guider vers la solution la plus adaptée.
      <br /><br />
      En tant que copywriter, il élabore des messages clairs, percutants et alignés avec l’identité
      de chaque marque.
      <br /><br />
      Qu’il s’agisse de slogans, de textes web ou de contenus promotionnels, son objectif est
      d’attirer, convaincre et fidéliser.
      <br /><br />
      Charismatique, à l’écoute et orienté résultats, Antonio incarne le lien direct entre Santium
      et ses futurs clients.
    </MemberInfoRtlCard>

    <div
      class="relative h-[100px] lg:h-[440px] pt-[20px] lg:py-[50px] flex justify-center items-center !mb-[-20px] lg:!mb-[0]"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>

    <MemberInfoCard
      title="Développeur Full-Stack & Intégrateur chez Santium"
      :imageSrc="Reymark"
      animation-type="image_up_content_down"
    >
      <br />
      Reymark est le développeur full-stack de Santium, avec une spécialisation marquée en front-end
      et en intégration.
      <br /><br />
      Il transforme chaque maquette en une interface web fluide, responsive et fidèle au design
      original, tout en garantissant une structure technique solide côté back-end.
      <br /><br />
      Expert en intégration pixel-perfect, optimisation des performances et accessibilité, il veille
      à ce que chaque site soit rapide, stable et compatible sur tous les appareils.
      <br /><br />
      Exigeant sur les détails, rigoureux dans l’exécution et toujours à jour des meilleures
      pratiques du développement web, Reymark joue un rôle central dans la fiabilité et la qualité
      des projets livrés par l’agence.
    </MemberInfoCard>
  </div>
  <div class="lg:h-[300px]"></div>
</template>
