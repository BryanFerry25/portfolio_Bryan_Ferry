<script setup>
import {supabase, user} from '../supabase'
import {ref} from '@vue/reactivity'
async function connexion(data, node) {
  const { user, error } = await ( nvlUtilisateur.value
    ? supabase.auth.signUp(data)
    :  supabase.auth.signInWithPassword(data));    
    console.log("Connexion de l'utilisateur", user, error);
  if (error) {
    console.error(error);
    node.setErrors([error.message]);
  }
}
const nvlUtilisateur = ref(false);
console.log("test", user)

</script>

<template>
  <div class="about text-center justify-center font-unbounded text-xl -mt-96 ">
   
    <button v-if="user" @pointerdown="supabase.auth.signOut()">
        Se déconnecter ({{user.email}})
    </button>
    <FormKit
    v-else
    type="form" 
    :submit-label="nvlUtilisateur ? 'S\'inscrire' : 'Se connecter'"
      @submit="connexion">
      <FormKit name="email" label="mail" type="email" />
      <div class=" p-14">
      <FormKit name="password" label="Mot de passe" type="password" />
    </div>
      <formKit
        label="  nouveau compte"
        name="nvlUtilisateur"
        type="checkbox"
        v-model="nvlUtilisateur"
        wrapper-class="w-full flex text-xl "
      />
    </FormKit>

  </div>
  
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
