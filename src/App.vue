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
        <img alt="Vue logo" class="logo w-1/3 sm:w-2/3 animate__animated animate__rollIn " src="@/assets/logo_bryan_ferry.svg" />
      </RouterLink>
      <div class="hidden sm:flex items-center gap-10 sm:text-sm sm:justify-end lg:text-xl md:text-lg ">
        <RouterLink class="nav__link" to="/projets">Projets</RouterLink>
        <a class="nav__link" href="/#about">À propos</a>
        <a class="nav__link" href="/#contact">Contact</a>
        <div v-if="user" class="dropdown">
          <label tabindex="0" class="btn m-1">Menu admin</label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-gray-900 rounded-box w-52">
              <li><RouterLink to="/connexion">Compte</RouterLink></li>
              <li><RouterLink to="/newprojet">Ajout de projet</RouterLink></li>
              <li><RouterLink to="/newlogiciel">Ajout de logiciel </RouterLink></li>
              
            </ul>
        </div>
        <div class=" hidden sm:flex items-center ml-5 mr-5 gap-6">
        <a class=" hover-image shadow_pink  " href="https://www.instagram.com/bryanf.pro/" target="_blank"><img src="@/assets/Instagram_white.svg" alt="Logo instagram"></a>
        <a  class="  hover-image shadow_blue " href="https://www.linkedin.com/in/bryan-ferry-523546216/" target="_blank"><img src="@/assets/LinkedIn_white.svg" alt="Logo LinkedIn"></a>
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
        <div class=" w-1/2 mt-6 ml-6">
          <img src="@/assets/Slide_Up.svg" alt="">
        </div>       
        <span class="sr-only">Fermer menu</span> 
      </button> 
      <nav class="font-unbounded flex flex-col justify-center text-2xl ">

<div class="space-x-10  text-center">
        <RouterLink @click="menuOuvert = !menuOuvert" class="" to="/projets">   
          <div class="sign mb-20"><span class="fast-flicker">P</span>RO<span class="flicker">JET</span>S</div>
    
    </RouterLink>


        <a @click="menuOuvert = !menuOuvert" href="/#about" class="">   
          <div class="sign mb-20 "><span class="fast-flicker ">À  </span>PR<span class="flicker">OPO</span>S</div>
          
          </a>


        <a @click="menuOuvert = !menuOuvert" href="/#contact">
          <div class="sign mb-20"><span class="fast-flicker ">C</span>ON<span class="flicker">TA</span>CT</div>
          
          </a>
        </div>

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

.sign {
  font-family: "Unbounded";
  background-image: radial-gradient(
    ellipse 50% 35% at 50% 50%,
    #1013c4,
    transparent
  );
  


  font-family: "Unbounded";
  text-transform: uppercase;
  font-size: 1.5em;
  color: #ffe6ff;
  text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #65afff,
    -0.2rem 0.1rem 1rem #65a8ff, 0.2rem 0.1rem 1rem #65a8ff,
    0 -0.5rem 2rem #24a7ff, 0 0.5rem 3rem #24a7ff;
  animation: shine 2s forwards, flicker 3s infinite;
}

@keyframes blink {
  0%,
  22%,
  36%,
  75% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #65afff,
      -0.2rem 0.1rem 1rem #65a8ff, 0.2rem 0.1rem 1rem #65a8ff,
      0 -0.5rem 2rem #24a7ff, 0 0.5rem 3rem #24a7ff;
  }
  28%,
  33% {
    color: #65a8ff;
    text-shadow: none;
  }
  82%,
  97% {
    color: #24a7ff;
    text-shadow: none;
  }
}

.flicker {
  animation: shine 2s forwards, blink 3s 2s infinite;
}

.fast-flicker {
  animation: shine 2s forwards, blink 10s 1s infinite;
}

@keyframes shine {
  0% {
    color: #7c19a3;
    text-shadow: none;
  }
  100% {
    color: #ffe6ff;
    text-shadow: 0 0 0.6rem #ffe6ff, 0 0 1.5rem #65a8ff,
      -0.2rem 0.1rem 1rem #65a8ff, 0.2rem 0.1rem 1rem #65a8ff,
      0 -0.5rem 2rem #24a7ff, 0 0.5rem 3rem #24a7ff;
  }
}

@keyframes flicker {
  from {
    opacity: 1;
  }

  4% {
    opacity: 0.9;
  }

  6% {
    opacity: 0.85;
  }

  8% {
    opacity: 0.95;
  }

  10% {
    opacity: 0.9;
  }

  11% {
    opacity: 0.922;
  }

  12% {
    opacity: 0.9;
  }

  14% {
    opacity: 0.95;
  }

  16% {
    opacity: 0.98;
  }

  17% {
    opacity: 0.9;
  }

  19% {
    opacity: 0.93;
  }

  20% {
    opacity: 0.99;
  }

  24% {
    opacity: 1;
  }

  26% {
    opacity: 0.94;
  }

  28% {
    opacity: 0.98;
  }

  37% {
    opacity: 0.93;
  }

  38% {
    opacity: 0.5;
  }

  39% {
    opacity: 0.96;
  }

  42% {
    opacity: 1;
  }

  44% {
    opacity: 0.97;
  }

  46% {
    opacity: 0.94;
  }

  56% {
    opacity: 0.9;
  }

  58% {
    opacity: 0.9;
  }

  60% {
    opacity: 0.99;
  }

  68% {
    opacity: 1;
  }

  70% {
    opacity: 0.9;
  }

  72% {
    opacity: 0.95;
  }

  93% {
    opacity: 0.93;
  }

  95% {
    opacity: 0.95;
  }

  97% {
    opacity: 0.93;
  }

  to {
    opacity: 1;
  }
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
    color: #6CB6DE;
    text-shadow: 0px 0px 2px #6CB6DE;
}

.nav__link:hover::after {
    right: 0;
    height: 2px;
    background: #6CB6DE;
}

.hover-image {
  transition: transform 0.3s ease;
}

.hover-image:hover {
  transform: scale(2);
}

.shadow_pink{
  filter: drop-shadow(0px 0px 5px #9022CF);
}

.shadow_blue{
  filter: drop-shadow(0px 0px 5px #2FAAF0);
}

</style>