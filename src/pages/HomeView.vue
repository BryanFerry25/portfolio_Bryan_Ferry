<script setup>
  import listProjet from '@/components/listProjets.vue'
  
</script>

<template>
  <main id="curseur">
    <div class="text-4xl sm:text-8xl flex flex-col text-center">
      <h1 class="font-portico-inline uppercase ">Bryan Ferry</h1>
      <h1 class="font-portico-outline ml-8 -mt-14 uppercase">BRYAN FERRY</h1>
      <div class="w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t -ml-16 from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-60"></div>
      <img class=" -mt-72 sm:-mt-96" src="@/assets/3danim.gif" alt="3d anim">
    </div>  
    <div class="font-mrs-saint-delafield text-white text-sm text-center sm:text-6xl sm:text-left sm:flex">
      <div class="sm:ml-10">
        <h2 class=" text-5xl ml-10">Rendre ses idées concrètes en créant un </h2>
        <h2 class=" text-5xl ml-10">univers unique...</h2>
      </div>
      <img class="sm:w-1/2 " src="@/assets/bubble.webp" alt="bubble">
    </div>
    <div class="text-center sm:text-left">
      <div class="sm:ml-20">
        <h2 class="font-syncopate text-2xl sm:text-5xl text-center mt-10">Projets</h2>
        <h2 class="font-mrs-saint-delafield text-3xl ml-28 sm:ml-40 sm:text-7xl text-center">projets</h2>
      </div>
      <div class="w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-60"></div>
      <div>
        <div class="py-5 bg-[url('src/assets/new_bg.gif')] bg-no-repeat">
          <listProjet :max="9" />
        </div>
      </div>
      <div class="w-max m-auto bg-gradient-to-t from-cyan-500 to-purple-500 text-xs sm:text-2xl rounded-2xl p-1">
        <div class="bg-black-light h-full w-full rounded-xl px-4 py-1">
          <RouterLink to="/projets" class="font-unbounded font-regular ">
            <span> Autres projets</span>
          </RouterLink>  
        </div>    
      </div>
    </div>
    <div>
      <div id="about" class="text-center sm:text-left sm:ml-20 mt-28 sm:">
        <h2 class="font-syncopate text-2xl sm:text-5xl text-center">À propos de moi</h2>
        <h2 class="font-mrs-saint-delafield text-3xl ml-52 sm:ml-96 sm:text-7xl text-center">à propos de moi</h2>
      </div>
      <div class="flex flex-col sm:flex-row items-center ">
        <div>
          <div class="w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-60 -ml-16 -mb-52"></div>

        <KinesisContainer>
            <KinesisElement
            :strength="10" 
            type="depth">
        <img class="bg-gray-700 rounded-3xl ml-5  mb-36" src="@/assets/bryan.webp" alt="">
        
        </KinesisElement>
        </KinesisContainer>
      </div>
        <div class="text-xs mx-10 sm:mr-10 sm:text-2xl">
          <p class="font-unbounded mb-10">Je m'appelle Bryan Ferry et je suis actuellement un étudiant en <strong class="text-purple-500">2ème année de BUT Métier du Multimédia et de l'Internet</strong> à Montbéliard</p>
          <p class="font-unbounded mb-10">Je suis spécialisé dans le domaine du design et plus précisément sur l'UI Design, la création d'affiche, de logo et de tout ce qui est lié à la <strong class="text-cyan-400">création graphique d'une marque</strong></p>
          <div class="w-max m-auto bg-gradient-to-t from-cyan-500 to-purple-500 rounded-2xl p-1">
            <div class="bg-black-light h-full w-full rounded-xl px-4 py-1">
              <a href="src/assets/cv.pdf" class="font-unbounded font-medium" download="cv_Bryan_Ferry.pdf"> 
                <span>Télécharger mon CV</span>
              </a>
            </div>    
          </div>
        </div>
      </div>
    </div>
    <div>
      <div id="contact" class="text-center sm:ml-20">
        <h2 class="font-syncopate text-2xl sm:text-5xl">Contact</h2>
        <h2 class="font-mrs-saint-delafield text-3xl sm:text-7xl ml-32 sm:ml-48">Contact</h2>
      </div>
      <div class="flex justify-between sm:justify-evenly items-center sm:w-auto">
        <a href="https://www.instagram.com/bryanf.pro/"><img src="@/assets/Instagram.svg" alt="Logo instagram"></a>
        <a href="https://www.linkedin.com/in/bryan-ferry-523546216/"><img src="@/assets/LinkedIn.svg" alt="Logo LinkedIn"></a>
        <a href="#"><img src="@/assets/Facebook.svg" alt="Logo Facebook"></a>
      </div>
      <div>
        <div class="w-max m-auto bg-purple-500 rounded-full p-1">
          <div class="bg-black-light h-full w-full rounded-full px-4 py-1">
            <a class="flex items-center font-unbounded font-bold" href="mailto:ferrybryan25@gmail.com"> 
              <span class="bg-black-light px-4 py-2 rounded-xl"> Envoyer un mail</span>
              <img class="w-1/4" src="@/assets/paper_Plane_new.svg" alt="">
            </a>
          </div>    
        </div>
      </div>  
    </div>
  
  </main>
</template>

<style>
#curseur{
  cursor: url('/src/assets/curseur.svg')  54 57, auto;
}
</style>
