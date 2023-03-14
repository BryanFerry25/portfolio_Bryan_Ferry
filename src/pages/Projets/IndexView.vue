<script setup>
// = liste-maisons.vue
import iconProjet from '@/components/iconProjet.vue'
import { supabase, user } from '@/supabase'


let {data:projets, error} = await supabase
  .from('Projets')
  .select('*')
  console.log(projets, error)
</script>

<template>
    <div class=" flex text-right justify-end">
        
        <div class=" absolute w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>
  <div class="text-4xl flex flex-col text-center">
    <h1 class="font-syncopate">Projets</h1>
    <h1 class="font-mrs-saint-delafield ml-32">Projets</h1>
  </div>
  <div class="flex justify-center flex-wrap gap-2">
    <div class=" flex text-right justify-end">
        
        <div class=" absolute w-36 h-36 sm:w-96 sm:h-96 block bg-gradient-to-t from-cyan-500 to-purple-500 rounded-full blur-3xl opacity-30"></div>
      </div>
    <div v-for="projet in projets" :key="projet.id"  
    class="relative group">
        <button 
          v-if="user"
          @click="$router.push({ name: 'Projets-Projet-edit-id', params: { id: projet.id } })"
          class=" font-unbounded hidden group-hover:block z-10 absolute top-0 right-0 p-1 border-double border-2 text-purple-500  border-purple-500">
          Editer projet
        </button>
        <iconProjet 
          v-bind="projet" 
          @click=" $router.push({ name: 'Projets-Projet-title', params: { title: projet.title } })" 
        />
    </div>
  </div>
</template>