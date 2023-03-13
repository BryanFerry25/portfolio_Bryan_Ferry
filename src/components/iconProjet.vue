<script setup>
import ImgS from '../components/ImgS.vue'
defineProps({
    illustration: String,
})

</script>

<template>
    <div >
        <KinesisContainer>
            <KinesisElement
            :strength="20" 
            type="depth">
                <ImgS 
                class="w-24 h-24 sm:w-96 sm:h-96 ml-10"
                bucket="prive-images-logiciels"
                :name="illustration"/>
            </KinesisElement>
        </KinesisContainer>
    </div>
</template>

