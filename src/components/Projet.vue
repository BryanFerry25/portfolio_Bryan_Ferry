<script setup>
// = ficheoffremaison
import ImgS from "@/components/ImgS.vue"


defineProps({
    id: String,
    title: String,
    illustration: String,
    logiciel1: String,
    logiciel2: String,
    logiciel3: String,
    logiciel4: String,
    paragraphe: String,
    photo1: String,
    photo2: String,
    photo3: String,
    photo4: String,
    photo5: String,
    photo6: String,
    photo7: String,
})
</script>

<template>
    <div>
        <div class="text-center">
            <h1 class="font-portico-inline text-3xl sm:text-8xl uppercase">{{ title }}</h1>
            <h1 class="font-portico-outline text-3xl sm:text-8xl  ml-8 -mt-6 uppercase">{{ title }}</h1>
        </div>    
        <ImgS v-if="illustration" class="w-4/5 sm:w-1/2 m-auto" bucket="prive-images-logiciels" :name="illustration" />
</div>
    <div class="my-5">
        <h2 class="font-unbounded font-medium text-2xl">Logiciel(s) utilisé(s)</h2>
        <div>
            <p>À FAIRE</p>
            <ImgS v-if="logiciel1" bucket="prive-images-logiciels" :name="logiciel1" />
            <ImgS v-if="logiciel2" bucket="prive-images-logiciels" :name="logiciel2" />
        </div>
    </div>
    <div>
        <p class="font-unbounded">{{ paragraphe }}</p>
    </div>
    <div>
        <h2 class="font-unbounded text-xl my-5">Photos supplémentaires</h2>
            <div class="flex flex-wrap gap-5 justify-center">
                <ImgS v-if="photo1" bucket="prive-images-logiciels" :name="photo1" />
                <ImgS v-if="photo2" bucket="prive-images-logiciels" :name="photo2" />
                <ImgS v-if="photo3" bucket="prive-images-logiciels" :name="photo3" />
                <ImgS v-if="photo4" bucket="prive-images-logiciels" :name="photo4" />
                <ImgS v-if="photo5" bucket="prive-images-logiciels" :name="photo5" />
                <ImgS v-if="photo6" bucket="prive-images-logiciels" :name="photo6" />
                <ImgS v-if="photo7" bucket="prive-images-logiciels" :name="photo7" />
            </div>
    </div>
</template>