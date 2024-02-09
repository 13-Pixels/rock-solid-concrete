<template>
  <div class="bg-[#2F6CC8] px-4 py-10" v-editable="blok">
    <section class="max-w-[1200px] mx-auto flex justify-between items-center">
      <StoryblokHeading
        class="my-1.5 px-10 sm:px-3 md:px-0 sm:my-3 font-jakarta max-w-[300px]"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <div>
        <div class="flex items-center">
          <NuxtImg :src="blok.image.filename" class="h-16 mr-10"></NuxtImg>
          <StoryblokBtn
            v-for="button of blok.action"
            :button="button"
            class=" font-jakarta"
          >
          </StoryblokBtn>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
