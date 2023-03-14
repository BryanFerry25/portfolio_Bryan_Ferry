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
        <div class="patterns font-unbounded -mt-10 sm:-mt-20 text-center">
            <svg class=" svg_anim" width="100%" height="100%">
            <text class="text_svg" x="48%" y="50%"  text-anchor="middle"   >
                     {{ title }}
            </text>
            </svg>
        </div>
  
        <ImgS v-if="illustration" class="w-4/5 sm:w-1/2 m-auto" bucket="prive-images-logiciels" :name="illustration" />
</div>
    <div class="my-5">
        <h2 class="font-unbounded font-medium text-2xl">Logiciel(s) utilisé(s)</h2>
        <div>
            
            <ImgS v-if="logiciel1" bucket="prive-images-logiciels" :name="logiciel1" />
            <ImgS v-if="logiciel2" bucket="prive-images-logiciels" :name="logiciel2" />
            <ImgS v-if="logiciel3" bucket="prive-images-logiciels" :name="logiciel3" />
            <ImgS v-if="logiciel4" bucket="prive-images-logiciels" :name="logiciel4" />
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

<style>

.patterns {
  height: 35vh;
  z-index: 1000;
}



.text_svg {
  font-family: "Metal Mania";
  letter-spacing: 10px;
  stroke: #437de8;
  font-size: 200px;
  font-weight: 700;
  stroke-width: 1;
 
  animation: textAnimate 7s infinite alternate;
  
}

@media only screen and (max-width: 768px) {
.text_svg {
  font-size: 120px;
  
}



}


@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset:  30%;
    
    fill:hsl(0, 0%, 100%)

  }
  
  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: hsla(347, 100%, 51%, 0)
  }
  
}

</style>