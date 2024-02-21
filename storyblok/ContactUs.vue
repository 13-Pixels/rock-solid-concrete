<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok" class="lg:pt-20 pt-10">
    <section class="max-w-[1200px] mx-auto py-14 px-4">
      <div class="grid grid-cols-5 gap-16">
        <div class="self-center col-span-2">
          <StoryblokHeading
            class="font-jakarta mb-3 font-semibold "
            v-for="heading of blok.headings"
            :heading="heading"
          />
          <p class="font-jakarta">{{ blok.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
