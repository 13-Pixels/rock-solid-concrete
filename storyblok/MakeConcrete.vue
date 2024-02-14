<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>  
<template>
    <div v-editable="blok" class="bg-white">
        <div class="px-4 py-16">
            <NuxtImg :src="blok.image.filename" class="max-w-[1000px] mx-auto w-full" ></NuxtImg>
        </div>
    </div>
</template>