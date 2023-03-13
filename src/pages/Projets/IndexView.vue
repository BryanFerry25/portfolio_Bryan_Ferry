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
  <div class="text-4xl flex flex-col text-center">
    <h1 class="font-syncopate">Projets</h1>
    <h1 class="font-mrs-saint-delafield ml-32">Projets</h1>
  </div>
  <div class="flex justify-center flex-wrap gap-2">
    <div v-for="projet in projets" :key="projet.id"  
    class="relative group">
        <button 
          v-if="user"
          @click="$router.push({ name: 'Projets-Projet-edit-id', params: { id: projet.id } })"
          class="hidden group-hover:block z-10 absolute top-0 right-0 p-1 border-double border-2">
          Editer offre
        </button>
        <iconProjet 
          v-bind="projet" 
          @click=" $router.push({ name: 'Projets-Projet-title', params: { title: projet.title } })" 
        />
    </div>
  </div>
</template>