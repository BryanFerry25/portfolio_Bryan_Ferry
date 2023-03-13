<script setup>
    import { supabase } from '@/supabase'
    import ImgS from '@/components/ImgS.vue'

    let {data:logiciels, error} = await supabase
    .from('Logiciels')
    .select('*')

    defineProps({
        logo: String,
    })
</script>

<template>
    <div v-for="logiciel in logiciels" :key="logiciel.id">
        <div v-bind="logiciel">
            <ImgS 
                class="w-24 h-24 sm:w-64 sm:h-64"
                bucket="prive-images-logiciels"
                :name="logo"/>
        </div>
    </div>
</template>