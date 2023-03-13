<script setup>
    import {ref} from '@vue/reactivity';
    import {supabase} from '@/supabase';
    import FormKitLogiciel from '@/components/FormKitLogiciel.vue';
    const props = defineProps(["id"])
    const logiciels =ref({})
    const { data, error } = await supabase
      .from("Logiciels")
      .select()
      .eq("Code_Logiciel", props.id)
      .single(); //ne retourne qu'un résultat
      if (error) console.error("n'a pas pu charger le table Maison :", error);
      else logiciels.value = data[0];
</script>

<template>
  <FormKitLogiciel :logiciel="data" />
</template>
