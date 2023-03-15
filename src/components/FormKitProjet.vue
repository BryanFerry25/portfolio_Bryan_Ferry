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
      "Impossible de mettre à jour le projet : ",
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
  value: logiciel.logo,
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
  <div class=" text-center flex justify-center font-unbounded ">
    <FormKit
 
        id="form"
        type="form" 
        :config="{ classes:{input:'text-black', actions: 'justify-self-end', form: '$reset grid grid-cols-1 gap-2', }}"
        :submit-attrs="{
        inputClass: 'mr-[190px] rounded-md shadow-sm focus-style p-5 bg-blue-300 mt-10 ',
        wrapperClass: '',
        outerClass: '',
      }"
        @submit="upsertProjet" 
        v-model="offre"
        :submit-label="offre ? 'Mettre à jour projet' : 'Créer nouveau projet'">
        <FormKit type="hidden" name="id" />
        <FormKit name="title" style="color: white;height: 50px;width:500px;" label="Nom du Projet"/>
        <FormKit :type="imgUploadSupabase" name="illustration"  label="Illustration du Projet"/>



        <div class=" custom-label text-white ">
        <FormKit class="  " style="color: white; height: 300px; width:600px; text-align: justify; text-justify: inter-word; " name="paragraphe" label="Présentation du Projet"/>
        </div>

        <FormKit
        style="color: white;height: 50px;width:500px;"
        type="select"
        name="logiciel1"
        label="Logiciel"
        placeholder="Selectionner un logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit
        style="color: white;height: 50px;width:500px;"
        type="select"
        name="logiciel2"
        label="Logiciel"
        placeholder="Selectionner un logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit
        style="color: white;height: 50px;width:500px;"
        type="select"
        name="logiciel3"
        label="Logiciel"
        placeholder="Selectionner un logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit
        style="color: white;height: 50px;width:500px;"
        type="select"
        name="logiciel4"
        label="Logiciel"
        placeholder="Selectionner un logiciel"
        :options="optionsLogiciel">
        </FormKit>
        <FormKit :type="imgUploadSupabase" name="photo1" label="Photos du Projet"/>
        <FormKit :type="imgUploadSupabase" name="photo2"/>
        <FormKit :type="imgUploadSupabase" name="photo3"/>
        <FormKit :type="imgUploadSupabase" name="photo4"/>
        <FormKit :type="imgUploadSupabase" name="photo5"/>
        <FormKit :type="imgUploadSupabase" name="photo6"/>
        <FormKit :type="imgUploadSupabase" name="photo7"/>
        <div class=" text-center mb-14">
        <button
        type="button"
        @click="$formkit.reset('form')"
        class="rounded-md shadow-sm focus-style p-3 bg-red-800 justify-self-end font-unbounded"
      >
      Réinitialiser
      </button>
    </div>
      <div class=" text-center">
      <button
        v-if="offre"
          type="button"
          @click="supprimerOffre()"
          class="rounded-md shadow-sm focus-style p-4 bg-red-500 justify-self-end hover:bg-red-900 font-unbounded"
        >
Supprimer le projet        </button>
</div>
    </FormKit>
  </div>
</template>


<style>

label {
  height: 50px;
  width: 200px;
  color: white;
  fill: white;
}

</style>