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
            :strength="10" 
            type="depth">
                <ImgS 
                class="w-24 h-24 sm:w-96 sm:h-96"
                bucket="prive-images-logiciels"
                :name="illustration"/>
            </KinesisElement>
        </KinesisContainer>
    </div>
</template>

