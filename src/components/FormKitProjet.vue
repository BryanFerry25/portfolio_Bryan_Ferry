<script setup>
// = new.vue et formkitoffremaison
import { ref } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "@/supabase";
import { createInput } from "@formkit/vue";
import ImgUploadS from "@/components/ImgUploadS.vue";

const router = useRouter();
const props = defineProps({projet: Object});
const offre = ref( props.projet );
const imgUploadSupabase = createInput(ImgUploadS);

async function upsertProjet(dataForm) {
  const { data, error } = await supabase
    .from("Projets")
    .upsert(dataForm);
  if (error) {
    console.error(
      "Impossible de mettre à jour l'offre : ",
      offre,
      " erreur : ",
      error
    );
  } else {
    router.push({ name: "Projets-Projet-title", params: { id: data.id } });
  }
}

const { data: listeLogiciel, error } = await supabase
  .from("Logiciels")
  .select("*");
if (error) {console.log("n'a pas pu charger la table Logiciels :", error)}
else {  console.log(listeLogiciel)};
const optionsLogiciel = listeLogiciel?.map((logiciel) => ({
  value: logiciel.Code_Logiciel,
  label: logiciel.libelle,
}));

async function supprimerOffre(dataForm) {
  console.log("Dans suppression offre");
  const { data, error } = await supabase
    .from("Projets")
    .delete(dataForm)
    .match({ id: offre.value.id });
  if (error) {
    console.error("Erreur à la suppression de ", offre, "erreur :", error);
  } else {
    router.push("/newprojet");
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
        @submit="upsertProjet" 
        v-model="offre"
        :submit-label="offre ? 'Mettre à jour projet' : 'Créer nouveau projet'">
        <FormKit type="hidden" name="id" />
        <FormKit name="title" label="Nom du Projet"/>
        <FormKit :type="imgUploadSupabase" name="illustration" label="Illustration du Projet"/>
        <FormKit name="paragraphe" label="Présentation du Projet"/>
        <FormKit
        type="select"
        name="logiciel1"
        label="Logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit
        type="select"
        name="logiciel2"
        label="Logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit
        type="select"
        name="logiciel3"
        label="Logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit
        type="select"
        name="logiciel4"
        label="Logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit :type="imgUploadSupabase" name="photo1" label="Photos du Projet"/>
        <FormKit :type="imgUploadSupabase" name="photo2"/>
        <FormKit :type="imgUploadSupabase" name="photo3"/>
        <FormKit :type="imgUploadSupabase" name="photo4"/>
        <FormKit :type="imgUploadSupabase" name="photo5"/>
        <FormKit :type="imgUploadSupabase" name="photo6"/>
        <FormKit :type="imgUploadSupabase" name="photo7"/>
        <button
        type="button"
        @click="$formkit.reset('form')"
        class="rounded-md shadow-sm focus-style p-2 bg-green-300 justify-self-end"
      >
        Reset
      </button>
      <button
        v-if="offre"
          type="button"
          @click="supprimerOffre()"
          class="rounded-md shadow-sm focus-style p-2 bg-red-500 justify-self-end"
        >
Supprimer l'offre        </button>
    </FormKit>
</template>