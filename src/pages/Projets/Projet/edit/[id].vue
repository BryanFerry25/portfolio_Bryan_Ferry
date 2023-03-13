<script setup>
import { supabase } from '@/supabase';
import {ref } from '@vue/reactivity';
import FormKitProjet from '@/components/FormKitProjet.vue'
const props = defineProps(["id"])
const projets =ref({})
const { data, error } = await supabase
  .from("Projets")
  .select()
  .eq("id", props.id)
  .single(); //ne retourne qu'un résultat
  if (error) console.error("n'a pas pu charger le table Maison :", error);
  else projets.value = data[0];
</script>

<template>
  <FormKitProjet :projet="data" />
</template>
