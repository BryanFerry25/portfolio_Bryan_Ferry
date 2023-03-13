<script setup>
import ImgS from '../components/ImgS.vue'
defineProps({
    illustration: String,
})

</script>

<template>
    <div class="shadow_white" >
        <KinesisContainer>
            <KinesisElement
            :strength="20" 
            type="depth">
                <ImgS 
                class="w-24 h-24 sm:w-96 sm:h-96 ml-10 "
                bucket="prive-images-logiciels"
                :name="illustration"/>
            </KinesisElement>
        </KinesisContainer>
    </div>
</template>

<style>

.shadow_white{
  filter: drop-shadow(0px 0px 5px #ffffff);
}

</style>