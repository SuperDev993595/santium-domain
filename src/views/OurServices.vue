<script setup lang="ts">
import TitleView from '@/components/ourservice/TitleView.vue'
import ServiceItem from '@/components/ourservice/ServiceItem.vue'
import SeperatorView from '@/components/lib/SeperatorView.vue'
import FinalDecided from '@/components/contact/FinalDecided.vue'
</script>
<template>
  <TitleView />
  <div class="w-full lg:px-10 py-10 lg:pb-50 lg:pt-100">
    <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
    <div class="lg:flex w-full">
      <div class="lg:flex w-full lg:w-1/2">
        <div class="relative h-full flex justify-center items-center hidden lg:block">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
        <ServiceItem
          title="Branding"
          sub-title-icon="https://em-content.zobj.net/source/apple/419/brain_1f9e0.png"
          sub-title="Branding"
          class="p-[30px]"
        >
          <div class="text-[12px] lg:text-[20px] text-white x-font-small">
            Créez une marque qui a du sens.
            <br />
            <br />
            Votre image de marque, c’est votre premier contact avec le monde. On s’assure qu’il soit
            <br />
            <br />
            mémorable. Nom, logo, slogan, charte graphique, ton de voix, storytelling… On façonne
            une
            <br />
            <br />
            identité cohérente, forte et sur mesure, qui raconte votre histoire et capte
            l’attention.
            <br />
            <br />
            Ce qu’on vous livre :
            <br />
          </div>
          <div class="text-[12px] lg:text-[20px] pl-[30px] items-center text-white">
            ●&nbsp Logo et déclinaisons
            <br />
            ●&nbsp Charte graphique complète
            <br />
            ●&nbsp Slogans et messages clés
            <br />
            ●&nbsp Guide de ton / storytelling
            <br />
            ●&nbsp Moodboards et univers visuel
          </div>
        </ServiceItem>
        <div class="relative h-full flex justify-center items-center">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
      </div>
      <SeperatorView class="w-full h-0.5 bg-white block lg:hidden" />
      <div class="lg:flex w-full lg:w-1/2">
        <div class="relative h-flex flex justify-center items-center hidden lg:block">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
        <ServiceItem
          title="Sites internet"
          sub-title="page web"
          sub-title-icon="https://em-content.zobj.net/source/apple/419/laptop_1f4bb.png"
          class="p-[30px]"
        >
          <div class="text-[12px] lg:text-[20px] text-white x-font-small">
            Un site rapide, beau, et taillé pour performer.
            <br />
            <br />
            Que ce soit un site vitrine ou e-commerce, on conçoit et développe un site aligné avec
            votre image, vos objectifs et votre audience.
            <br />
            <br />
            Design sur mesure, intégration soignée, responsive, et optimisé pour charger vite et
            bien.
            <br />
            <br />
            Ce qu’on vous livre :
          </div>
          <div class="text-[12px] lg:text-[20px] pl-[30px] items-center text-white">
            ●&nbsp Design UX/UI personnalisé
            <br />
            ●&nbsp Développement front-end & intégration
            <br />
            ●&nbsp Version mobile responsive
            <br />
            ●&nbsp Formulaires, galeries, e-commerce, etc.
            <br />
            ●&nbsp Optimisation des performances
          </div>
        </ServiceItem>
        <div class="relative h-flex flex justify-center items-center hidden lg:block">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
      </div>
    </div>

    <SeperatorView class="w-full h-0.5 bg-white" />
    <div class="w-full lg:w-1/2">
      <div class="lg:flex w-full">
        <div class="relative h-flex flex justify-center items-center hidden lg:block">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
        <ServiceItem
          title="SEO"
          sub-title-icon="https://em-content.zobj.net/source/apple/419/magnifying-glass-tilted-left_1f50d.png"
          sub-title="Référencement (SEO)"
          class="p-[30px]"
        >
          <div class="text-[12px] lg:text-[20px] text-white x-font-small">
            Votre site, visible là où ça compte.
            <br />
            <br />
            Un beau site, c’est bien. Un site visible sur Google, c’est mieux.
            <br />
            <br />
            On optimise votre structure, vos contenus et vos balises pour vous placer devant vos
            concurrents.
            <br />
            <br />
            On s’assure que les bonnes personnes vous trouvent, au bon moment.
            <br />
            <br />
            Ce qu’on vous livre :
          </div>
          <div class="text-[12px] lg:text-[20px] pl-[30px] items-center text-white">
            ●&nbsp Audit SEO technique
            <br />
            ●&nbsp Optimisation on-page (titres, balises, vitesses)
            <br />
            ●&nbsp Mots-clés stratégiques
            <br />
            ●&nbsp Conseils de contenu
            <br />
            ●&nbsp Suivi de positionnement (sur demande)
          </div>
        </ServiceItem>
        <div class="relative h-flex flex justify-center items-center hidden lg:block">
          <SeperatorView orientation="vertical" class="bg-white" />
        </div>
      </div>
      <SeperatorView class="w-full h-0.5 bg-white hidden lg:block" />
    </div>
  </div>
  <div
    class="relative h-[200px] lg:h-[700px] pb-[50px] lg:pb-[200px] flex justify-center items-center"
  >
    <SeperatorView orientation="vertical" class="bg-white" />
  </div>
  <FinalDecided />
</template>
