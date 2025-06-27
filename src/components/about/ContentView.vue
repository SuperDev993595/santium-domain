<script setup lang="ts">
import AboutItemCard from '@/components/card/AboutItemCard.vue'
import AboutItemRtlCard from '@/components/card/AboutItemRtlCard.vue'
import about1 from '@/assets/images/about/about1.png'
import about2 from '@/assets/images/about/about2.png'
import about3 from '@/assets/images/about/about3.png'
import about4 from '@/assets/images/about/about4.png'
import about5 from '@/assets/images/about/about5.png'
import about6 from '@/assets/images/about/about6.png'
import SeperatorView from '@/components/lib/SeperatorView.vue'
</script>

<template>
  <div class="w-full h-full pt-0 lg:pt-60 !mb-[200px]">
    <AboutItemRtlCard :imageSrc="about1" card-title="Réduire vos frustrations" x-padding="060px">
      <div class="lg:pt-[50px]">
        Le monde du digital évolue vite, mais il tourne souvent en rond.
        <br />
        <br />
        Sites web standardisés, identités visuelles sans âme, branding construit sur des modèles
        copiés-collés…
        <br />
        <br />
        L’essence même de la création semble s’être diluée dans des automatismes.
        <br />
        <br />
        Trop souvent, les entrepreneurs se retrouvent face à des agences qui proposent des solutions
        toutes faites, sans véritable sens, sans attention particulière à leur réalité, à leur
        vision ou à leur histoire.
        <br />
        <br />
        C’est ce constat qui a mené à la naissance de Santium.
      </div>
    </AboutItemRtlCard>
    <div
      class="relative h-[150px] lg:h-[250px] flex justify-center items-center py-[20px] !mb-[-70px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>
    <AboutItemCard :imageSrc="about2" card-title="Personnaliser" x-padding="60px">
      <div class="lg:pt-[40px]">
        En octobre 2024, Santana fonde Santium avec une idée claire en tête : créer une agence qui
        allie créativité, précision technique et proximité humaine.
        <br />
        <br />
        Ayant lui-même été confronté à l’opacité du monde digital — des prix trop élevés, un manque
        d’écoute, des résultats souvent déconnectés de la demande réelle — il décide de réunir une
        équipe capable de changer la donne.
        <br />
        <br />
        Plutôt que d’automatiser, Santium choisit de personnaliser.
        <br />
        <br />
        Plutôt que de suivre les tendances aveuglément, l’agence propose des concepts originaux,
        alignés sur chaque marque. Plutôt que d'imposer, elle accompagne et construit avec.
      </div>
    </AboutItemCard>
    <div
      class="relative h-[150px] lg:h-[250px] flex justify-center items-center py-[20px] !mb-[-70px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>
    <AboutItemRtlCard
      :imageSrc="about3"
      card-title="Une équipe Á votre écoute"
      card-top="60px"
      x-padding="50px"
    >
      <div>
        Santium, c’est avant tout une équipe complémentaire.
        <br />
        <br />
        ●&nbsp Muhammad “Santana” Ba dirige les projets et assure la cohérence entre stratégie,
        identité visuelle et développement web.
        <br />
        <br />
        ●&nbsp Shukreet Kaur, UI/UX designer, conçoit des interfaces sur mesure qui allient
        esthétique et expérience utilisateur.
        <br />
        <br />
        &nbsp&nbsp&nbsp●&nbsp William, graphiste et responsable du branding, crée des identités
        visuelles fortes, mémorables et cohérentes.
        <br />
        <br />
        ●&nbsp Antonio, en charge du commercial et du copywriting, porte la voix de chaque marque à
        travers des messages clairs, percutants et bien positionnés.
        <br />
        <br />
        ●&nbsp Reymark, développeur front-end, donne vie aux maquettes avec rigueur, fluidité et
        sens du détail.
        <br />
        <br />
        Chaque membre apporte sa sensibilité, sa rigueur et sa créativité.
        <br />
        <br />
        Et surtout, chacun partage la même vision : faire les choses bien, en profondeur, et avec
        sens.
      </div>
    </AboutItemRtlCard>
    <div
      class="relative h-[150px] lg:h-[250px] flex justify-center items-center py-[20px] !mb-[-70px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>
    <AboutItemCard :imageSrc="about4" card-title="Guidance" card-top="80px">
      <div class="lg:pt-[70px]">
        Santium n’a pas été créé pour plaire à tout le monde.
        <br />
        <br />
        Nous nous adressons à celles et ceux qui veulent bâtir quelque chose de durable, qui
        cherchent une identité qui leur ressemble vraiment, et qui veulent travailler avec des gens
        passionnés, honnêtes et investis.
        <br />
        <br />
        Nous croyons qu’un bon design ne se contente pas d’être beau.
        <br />
        <br />
        Il doit parler, refléter, convaincre.
        <br />
        <br />
        Nous croyons qu’un bon site ne se limite pas à fonctionner.
        <br />
        <br />
        Il doit raconter une histoire, captiver, et performer.
        <br />
        <br />
        Nous croyons que chaque entreprise, qu’elle démarre ou qu’elle soit établie, mérite un
        accompagnement clair, humain et de qualité.
      </div>
    </AboutItemCard>
    <div
      class="relative h-[150px] lg:h-[250px] flex justify-center items-center py-[20px] !mb-[-70px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>
    <AboutItemRtlCard
      :imageSrc="about5"
      :type="'type3'"
      card-title="Nos 3 principes"
      x-padding="50px"
    >
      <div class="!mt-0 lg:!mt-[60px]">
        Faire mieux, pas plus
        <br />
        <br />
        Notre approche repose sur trois principes fondamentaux :
        <br />
        <br />
        &nbsp &nbsp &nbsp ●&nbsp Créativité sur mesure : chaque projet est pensé à partir de vous,
        pas d’un modèle.
        <br />
        <br />
        &nbsp &nbsp ●&nbsp Exécution rigoureuse : le détail compte. La performance aussi.
        <br />
        <br />
        &nbsp &nbsp ●&nbsp Transparence et accessibilité : on
        <br />
        travaille sérieusement, mais sans <br />complexifier. Nos tarifs sont clairs, <br />justes,
        et adaptés à votre réalité.
      </div>
    </AboutItemRtlCard>
    <div
      class="relative h-[150px] lg:h-[250px] flex justify-center items-center py-[20px] !mb-[-70px] lg:!mb-0"
    >
      <SeperatorView orientation="vertical" class="h-full bg-white" />
    </div>
    <AboutItemCard :imageSrc="about6" card-title="Propulsion de votre entreprise" x-padding="90px">
      <div class="lg:pt-[90px]">
        Ce que nous construisons
        <br />
        <br />
        Chez Santium, nous ne livrons pas des “prestations”.
        <br />
        <br />
        Nous construisons des expériences, des images de marque solides, et des plateformes qui
        portent des ambitions réelles
        <br />
        <br />
        Notre objectif est simple : que chaque client reparte avec un outil puissant, une identité
        claire, et la confiance de se présenter au monde avec fierté.
      </div>
    </AboutItemCard>
  </div>
</template>
