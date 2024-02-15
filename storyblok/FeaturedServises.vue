<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});
</script>
<template>
  <div v-editable="blok" class="bg-[#F6F7FA]">
    <section class="max-w-[1200px] mx-auto py-14 px-4">
      <StoryblokHeading
        class=" font-jakarta text-center"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <!-- service cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        <div class="mt-12" v-for="value in blok.cards">
          <NuxtImg
            :src="value.image.filename"
            class="w-[82%] mx-auto"
          ></NuxtImg>
          <div class="bg-white p-5 pt-52 mt-[-193px]">
            <StoryblokHeading
              class="font-jakarta text-center font-semibold"
              v-for="heading of value.headings"
              :heading="heading"
            />
            <StoryblokBtn
              v-for="button of value.actions"
              :button="button"
              class="max-w-[180px] font-jakarta mx-auto mt-3"
            >
            </StoryblokBtn>
          </div>
        </div>
      </div>
      <StoryblokBtn
        v-for="button of blok.actions"
        :button="button"
        class="max-w-[180px] font-jakarta mt-14 mx-auto"
      >
      </StoryblokBtn>
    </section>
  </div>
</template>
