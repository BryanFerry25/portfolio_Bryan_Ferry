<script setup>
import { ref } from "vue";
import { supabase } from "@/supabase";
const props = defineProps({ bucket: String, name: String, public: Boolean });
const src = ref("");
if (props.public) {
  src.value = supabase.storage
    .from(props.bucket)
    .getPublicUrl(props.name).data.publicUrl;
  console.log("public :", src.value);
} else {
  src.value = "dataUriSpinner ?"; // valeur d'attente
  const { data, error } = await supabase.storage
    .from(props.bucket)
    // .download(props.name);
    .createSignedUrl(props.name, 60);
  if (error)
    console.error(
      `imposible de charger du bucket "${props.bucket}" le chemin "${props.name}"`,
      error
    );
  // src.value = URL.createObjectURL(data);
  src.value = data.signedUrl;
  console.log(src)
}
</script>
<template>
  <img :src="src" alt="src" />
</template>
