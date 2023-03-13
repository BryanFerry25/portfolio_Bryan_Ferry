<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {user} from '@/supabase'

import { ref } from 'vue'
const menuOuvert = ref(false)
</script>

<template>
  <header>
    <nav class="flex justify-between px-6 font-unbounded text-xl">
      <RouterLink to="/">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="200"/>
      </RouterLink>
      <div class="hidden sm:flex items-center gap-3">
        <RouterLink to="/projets">Projets</RouterLink>
        <a href="/#about">À propos</a>
        <a href="/#contact">Contact</a>
        <div v-if="user" class="dropdown">
          <label tabindex="0" class="btn m-1">Menu admin</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-gray-900 rounded-box w-52">
              <li><RouterLink to="/connexion">Compte</RouterLink></li>
              <li><RouterLink to="/newprojet">Ajout de projet</RouterLink></li>
              <li><RouterLink to="/newlogiciel">Ajout de logiciel </RouterLink></li>
              <li><RouterLink to="/logiciels">Modification de logiciel </RouterLink></li>
            </ul>
        </div>
        <a href="https://www.instagram.com/bryanf.pro/"><img src="@/assets/instagram.webp" alt="Logo instagram"></a>
        <a href="https://www.linkedin.com/in/bryan-ferry-523546216/"><img src="@/assets/LinkedIn.webp" alt="Logo LinkedIn"></a>
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
</template>