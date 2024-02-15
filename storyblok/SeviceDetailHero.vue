<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok">
    <section class="py-20 lg:pt-32 px-4 bg-[#F6F7FA]">
      <StoryblokHeading
        class="font-jakarta mt-4 max-w-[660px] mx-auto"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <div class="flex max-w-[356px] mx-auto">
        <StoryblokBtn
              v-for="button of blok.actions"
              :button="button"
              class="font-jakarta mt-6 m-2"
            />
      </div>
    </section>
  </div>
</template>
