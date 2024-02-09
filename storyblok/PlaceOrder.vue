<template>
  <div class="bg-[#2F6CC8] px-4 py-10" v-editable="blok">
    <section class="max-w-[1200px] mx-auto flex justify-between">
      <StoryblokHeading
        class="my-1.5 px-10 sm:px-3 md:px-0 sm:my-3 font-jakarta"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <div>
        <div>
          <p class="ml-8 text-white text-lg font-jakarta">
            {{ blok.subtitle }}
          </p>
          <div class="flex mt-3">
            <NuxtImg
              :src="blok.icon.filename"
              class="h-7 w-7 mr-3 mt-1"
            ></NuxtImg>
            <p class="text-white font-jakarta text-3xl">
              {{ blok.phoneNumber }}
            </p>
          </div>
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
