<script setup lang="ts">
import TitleView from '@/components/whyus/TitleView.vue'
import ItemContent from '@/components/whyus/ItemContent.vue'
import SeperatorView from '@/components/lib/SeperatorView.vue'
import FinalDecided from '@/components/contact/FinalDecided.vue'
</script>

<template>
  <TitleView />
  <ItemContent
    imageSrc="https://em-content.zobj.net/source/apple/419/light-bulb_1f4a1.png"
    title="1. Parce que nous faisons ce que les autres ne font pas."
    animation="fade-diagonal-in-bottom2top"
  >
    Chez Santium, vous n’êtes pas un numéro. Nous prenons le temps de vous écouter, de comprendre
    vos besoins, et de créer une solution sur mesure.
    <br />
    <br />
    Design, stratégie, branding et web s’alignent pour vous donner une présence forte, cohérente et
    authentique.
  </ItemContent>
  <div
    class="relative h-[250px] lg:h-[700px] flex justify-center items-center pt-[50px] pb-[50px] lg:pt-[120px] lg:pb-[150px] !mb-[-50px] lg:!mb-0"
  >
    <SeperatorView orientation="vertical" class="bg-white" />
  </div>

  <ItemContent
    imageSrc="https://em-content.zobj.net/source/apple/419/gear_2699-fe0f.png"
    title="2. Une méthode claire. Des résultats concrets."
    top="-50px"
    animation="fade-diagonal-in-top2bottom"
  >
    Chaque projet commence par un vrai diagnostic. Nous identifions ensemble vos objectifs, vos
    points faibles et vos opportunités.
    <br />
    <br />
    Ensuite, nous exécutons avec précision, transparence et exigence. Pas de surprise, juste de
    l’efficacité.
  </ItemContent>
  <div
    class="relative h-[250px] lg:h-[700px] flex justify-center items-center pt-[50px] pb-[50px] lg:pt-[120px] lg:pb-[150px] !mb-[-50px] lg:!mb-0"
  >
    <SeperatorView orientation="vertical" class="bg-white" />
  </div>

  <ItemContent
    imageSrc="https://em-content.zobj.net/source/apple/419/brain_1f9e0.png"
    title="3. Une équipe humaine, créative et stratégique."
    top="-50px"
    animation="fade-diagonal-in-bottom2top"
  >
    Nos talents sont complémentaires : designers, développeurs, stratèges, rédacteurs.
    <br />
    <br />
    Mais ce qui fait la différence, c’est notre manière de collaborer avec vous.
    <br />
    <br />
    Santium, c’est un accompagnement de proximité, humain et toujours orienté résultats.
  </ItemContent>
  <div
    class="relative h-[250px] lg:h-[700px] flex justify-center items-center pt-[50px] pb-[50px] lg:pt-[120px] lg:pb-[150px] !mb-[-50px] lg:!mb-0"
  >
    <SeperatorView orientation="vertical" class="bg-white" />
  </div>

  <ItemContent
    imageSrc="https://em-content.zobj.net/source/apple/419/rocket_1f680.png"
    title="4. Une vision moderne, ancrée dans le concret."
    top="-50px"
    animation="fade-diagonal-in-top2bottom"
  >
    Nous connaissons les codes du digital d’aujourd’hui.
    <br />
    <br />
    Notre mission : les mettre au service de votre image, de votre visibilité, et de votre
    croissance. Votre marque ne sera plus jamais perçue comme avant.
  </ItemContent>
  <div
    class="relative h-[250px] lg:h-[700px] flex justify-center items-center pt-[50px] pb-[50px] lg:pt-[120px] lg:pb-[150px] !mb-[-50px] lg:!mb-0"
  >
    <SeperatorView orientation="vertical" class="bg-white" />
  </div>

  <ItemContent
    imageSrc="https://em-content.zobj.net/source/apple/419/fire_1f525.png"
    title="5. Parce que votre succès est notre accomplissement."
    top="-50px"
    animation="fade-diagonal-in-bottom2top"
  >
    Nous ne cherchons pas simplement à livrer un site ou une charte graphique. Nous cherchons à vous
    faire gagner : en crédibilité, en impact, en résultats. Quand vous avancez, nous avons accompli
    notre
  </ItemContent>
  <div
    class="relative h-[250px] lg:h-[700px] flex justify-center items-center pt-[50px] pb-[50px] lg:pt-[120px] lg:pb-[150px] !mb-[-50px] lg:!mb-0"
  >
    <SeperatorView orientation="vertical" class="bg-white" />
  </div>

  <FinalDecided />
</template>
