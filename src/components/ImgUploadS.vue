<script setup>
import { ref } from "vue";
import { supabase } from "../supabase";
import ImgS from "./ImgS.vue";

const props = defineProps({
  context: Object,
});

const image = ref(props.context._value);

async function supprimeImage() {
  const { data, error } = await supabase.storage
    .from("prive-images-logiciels")
    .remove([image.value]);
  if (error) {
    console.error(
      "Impossible de supprimer l'image : ",
      image.value,
      " raison : ",
      error
    );
  } else {
    image.value = null;
  }
}
async function ajouterImage(evt) {
  const file = evt.target.children.fichier.files[0];
  const { data, error } = await supabase.storage
    .from("prive-images-logiciels")
    .upload(file.name, file, {
      cacheControl: "3600",
      upsert: false,
    });
  if (error) {
    console.error("Impossible d'uploader :", error);
  } else {
    image.value = file.name;
    props.context.node.input(image.value);
  }
}
</script>

<template>
  <div v-if="image">
    <ImgS
      class="rounded-t-lg object-cover"
      bucket="prive-images-logiciels"
      :name="image"
    />
    <button
      class="bg-red-500 rounded-lg p-2 mt-2 ml-auto block"
      @click="supprimeImage()"
    >
      Supprimer l'image
    </button>
  </div>
  <div v-else>
    <form @submit.prevent="ajouterImage">
      <input type="file" name="fichier" />
      <button
        type="submit"
        class="bg-green-500 rounded-lg p-2 mt-2 ml-auto block"
      >
        Ajouter l'image
      </button>
    </form>
  </div>
</template>
