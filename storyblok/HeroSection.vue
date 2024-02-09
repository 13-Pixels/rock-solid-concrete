<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div
    v-editable="blok"
    class="bg-cover bg-center bg-[url('https://storage.googleapis.com/msgsndr/YxAHM5dU3e0Y8xUZ6ldI/media/65c5fec46c059cbda18375db.png')]"
  >
    <section class="max-w-[1200px] mx-auto h-[600px] flex">
      <div class="self-center mt-4">
        <StoryblokHeading
          class="my-1.5 px-10 sm:px-3 md:px-0 sm:my-3 font-jakarta"
          v-for="heading of blok.headings"
          :heading="heading"
        />
        <StoryblokBtn
          v-for="button of blok.actions"
          :button="button"
          class="max-w-[170px] font-jakarta mt-10"
        >
        </StoryblokBtn>
      </div>
    </section>
  </div>
</template>
