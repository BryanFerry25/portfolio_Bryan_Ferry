<script setup>
import { supabase } from '@/supabase';
import {ref } from '@vue/reactivity'
import Projet from '@/components/Projet.vue'
const props = defineProps(["title"])
const projets =ref({})
const { data, error } = await supabase
  .from("Projets")
  .select()
  .eq("title", props.title)
  .single(); //ne retourne qu'un résultat
  if (error) console.error("n'a pas pu charger le table Maison :", error);
  else projets.value = data[0];
</script>

<template>
  <Projet v-bind="data"/>
</template>
