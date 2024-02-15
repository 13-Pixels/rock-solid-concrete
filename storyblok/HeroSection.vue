<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div
    v-editable="blok"
    class="bg-cover bg-[#F6F7FA] bg-center md:bg-bottom bg-[url('https://storage.googleapis.com/msgsndr/MLvKvVyGos8j4OV4y4Zt/media/65cdbf71190e878f92f457ff.png')] md:bg-[url('https://storage.googleapis.com/msgsndr/YxAHM5dU3e0Y8xUZ6ldI/media/65c5fec46c059cbda18375db.png')]"
  >
    <section class="max-w-[1200px] mx-auto h-screen flex">
      <div class="self-center mt-4 px-4">
        <StoryblokHeading
          class=" font-jakarta"
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
