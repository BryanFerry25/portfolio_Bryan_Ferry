<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {user} from '@/supabase'

import { ref } from 'vue'
const menuOuvert = ref(false)
</script>

<template >
  <body id="curseur">
    
  
  <header class=" mb-10">
    <nav class="flex justify-between px-6 font-unbounded text-xl">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="200"/>
      </RouterLink>
      <div class="hidden sm:flex items-center gap-10">
        <RouterLink class="nav__link" to="/projets">Projets</RouterLink>
        <a class="nav__link" href="/#about">À propos</a>
        <a class="nav__link" href="/#contact">Contact</a>
        <div v-if="user" class="dropdown">
          <label tabindex="0" class="btn m-1">Menu admin</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-gray-900 rounded-box w-52">
              <li><RouterLink to="/connexion">Compte</RouterLink></li>
              <li><RouterLink to="/newprojet">Ajout de projet</RouterLink></li>
              <li><RouterLink to="/newlogiciel">Ajout de logiciel </RouterLink></li>
              <li><RouterLink to="/logiciels">Modification de logiciel </RouterLink></li>
            </ul>
        </div>
        <div class=" hidden sm:flex items-center ml-5 mr-5 gap-6">
        <a class=" scale-75 hover-image" href="https://www.instagram.com/bryanf.pro/"><img src="@/assets/Instagram_white.svg" alt="Logo instagram"></a>
        <a  class=" scale-75 hover-image" href="https://www.linkedin.com/in/bryan-ferry-523546216/"><img src="@/assets/LinkedIn_white.svg" alt="Logo LinkedIn"></a>
      </div>
      </div>
      <button class="relative sm:hidden"
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert"
        >
        <img src="@/assets/menu.svg" alt="">
        <span class="sr-only">Menu</span>
      </button>  
    </nav>
    <div 
    id="menu"
    class="
        fixed
        inset-0
        flex
        z-10
        translate-x-full
        flex-col
        bg-black-light
        justify-center
        motion-safe:transition-transform motion-safe:duration-1000
      "
      :class="{ 'translate-x-0': menuOuvert }">
      <button class="absolute top-3 left-3 " 
        aria-haspopup="true"
        aria-controls="menu"
        :aria-expanded="menuOuvert"
        @click="menuOuvert = !menuOuvert">
          Remplacer par flèche        
        <span class="sr-only">Fermer menu</span> 
      </button> 
      <nav class="font-unbounded flex flex-col items-center border-t-8 border-red-500">
        <RouterLink @click="menuOuvert = !menuOuvert" class="" to="/projets">Projets</RouterLink>
        <a @click="menuOuvert = !menuOuvert" href="/#about">À propos</a>
        <a @click="menuOuvert = !menuOuvert" href="/#contact">Contact</a>
        <RouterLink v-if="user" @click="menuOuvert = !menuOuvert" to="/connexion">Compte</RouterLink>
      </nav>
    </div>
  </header>
  <suspense>
    <RouterView />
  </suspense>
  <footer class="mt-10 bottom-0">
    <p class="font-unbounded text-center text-gray-500 text-xs sm:text-xl">2023 portfolio - Conception et développement par Bryan Ferry</p>
  </footer>
</body>
</template>

<style>

#curseur{
  cursor: url('/src/assets/curseur.svg')  54 57, auto;
}

.nav__link {
    position: relative;
    display: inline-block;
    padding: 1rem 0;
    text-decoration: none;
    color: inherit;
    transition: all .1s;
    text-shadow: 0px 0px 2px #E5E5E6;
}

.nav__link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 100%;
    display: inline-block;
    height: 1rem;
    background: white;
    transition: all 0.25s cubic-bezier(1, 0.68, 0.16, 0.9);
}

.nav__link:hover {
    color: #9022CF;
    text-shadow: 0px 0px 2px #9022CF;
}

.nav__link:hover::after {
    right: 0;
    height: 2px;
    background: #9022CF;
}

.hover-image {
  transition: transform 0.3s ease;
}

.hover-image:hover {
  transform: scale(1);
}
</style>