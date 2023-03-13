<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";
import { createInput } from "@formkit/vue";
import ImgUploadS from "@/components/ImgUploadS.vue";

const router = useRouter();
const props = defineProps({logiciel: Object});
const offre = ref( props.logiciel );
const imgUploadSupabase = createInput(ImgUploadS);

async function upsertLogiciel(dataForm) {
  const { data, error } = await supabase
    .from("Logiciels")
    .upsert(dataForm);
  if (error) {
    console.error(
      "Impossible de mettre à jour le logiciel : ",
      offre,
      " erreur : ",
      error
    );
  } else {
    router.push({ name: "Logiciels-Logiciel-edit-id", params: { id: data.id } });
  }
}

async function supprimerLogiciel(dataForm) {
  console.log("Dans suppression offre");
  const { data, error } = await supabase
    .from("Logiciels")
    .delete(dataForm)
    .match({ id: offre.value.id });
  if (error) {
    console.error("Erreur à la suppression de ", offre, "erreur :", error);
  } else {
    router.push("/");
  }
}
</script>

<template>
     <FormKit
        id="form"
        type="form" 
        :config="{ classes:{input:'text-black', actions: 'justify-self-end', form: '$reset grid grid-cols-1 gap-2', }}"
        :submit-attrs="{
        inputClass: 'rounded-md shadow-sm focus-style p-2 bg-blue-300 ',
        wrapperClass: '',
        outerClass: '',
      }"
        @submit="upsertLogiciel" 
        v-model="offre"
        :submit-label="offre ? 'Mettre à jour logiciel' : 'Créer nouveau logiciel'">
        <FormKit type="hidden" name="Code_Logiciel" />
        <FormKit name="libelle" label="Nom du logiciel"/>
        <FormKit :type="imgUploadSupabase" name="logo" label="Logo du logiciel"/>
        <button
        type="button"
        @click="$formkit.reset('form')"
        class="rounded-md shadow-sm focus-style p-2 bg-green-300 justify-self-end">
        Reset
        </button>
        <button
        v-if="offre"
        type="button"
        @click="supprimerLogiciel()"
        class="rounded-md shadow-sm focus-style p-2 bg-red-500 justify-self-end">
        Supprimer le logiciel
        </button>
    </FormKit>
</template>