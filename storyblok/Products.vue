<script setup lang="ts">
import { storyblokProducts } from "../types/products";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<storyblokProducts>,default: null },
});
</script>

<template>
  <div
    v-editable="blok"
    class="pt-20 pb-28 md:pt-40 border-secondary border-b-4"
  >
    <section class="block md:flex gap-10 px-4 max-w-[1200px] md:mx-auto">
      <article class="w-[100%] md:w-[45%]">
        <NuxtImg :src="blok.image.filename" class="w-full"></NuxtImg>
      </article>
      <article class="w-[100%] md:w-[55%] self-center mt-10 md:mt-0">
        <StoryblokHeading
          class="font-jakarta font-semibold"
          v-for="(heading, index) of blok.headings"
          :key="index"
          :heading="heading"
        />
        <p class="text-[15px] mt-4 text-[#8e9196] max-w-[550px]">
          {{ blok.subTitle }}
        </p>
      </article>
    </section>
  </div>
</template>
