<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div
    v-editable="blok"
    class=""
  >
    <section class="max-w-[1200px] mx-auto py-14">
        <StoryblokHeading
          class="my-1.5 px-10 sm:px-3 md:px-0 sm:my-3 font-jakarta text-center"
          v-for="heading of blok.headings"
          :heading="heading"
        />
        <StoryblokBtn
          v-for="button of blok.actions"
          :button="button"
          class="max-w-[180px] font-jakarta mt-10 mx-auto"
        >
        </StoryblokBtn>
    </section>
  </div>
</template>
