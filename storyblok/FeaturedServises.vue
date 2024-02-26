<script setup lang="ts">
const props = defineProps({
  blok: { type: Object, default: null },
});

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Navigation, Pagination];
</script>
<template>
  <div v-editable="blok" class="bg-[#F6F7FA]">
    <section class="max-w-[1200px] mx-auto py-14 px-4">
      <StoryblokHeading
        class="font-jakarta text-center mt-2"
        v-for="heading of blok.headings"
        :heading="heading"
      />
      <!-- srvice sliders -->
      <swiper
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        
        :pagination="{ clickable: true }"
        :loop="true"
        :spaceBetween="20"
        :modules="modules"
        class="w-[100%] h-[100%] relative"
        :breakpoints="{ 
          768: { slidesPerView: 1 }, // 1 slide on screens less than 768px
          1024: { slidesPerView: 3 }, // 3 slides on screens 768px and above
        }"
      >
        <div class="parallax-slider-navigation cursor-pointer hidden md:block">
          <div class="nav-indicator prevArrow">
            <NuxtImg
              :src="blok.previmage.filename"
              :alt="blok.previmage.alt"
              class="w-14 absolute z-40 top-[50%] left-[-20px]"
            />
          </div>
          <div class="nav-indicator nextArrow">
            <NuxtImg
              :src="blok.nextimage.filename"
              :alt="blok.nextimage.alt"
              class="w-14 absolute z-20 top-[50%] right-[-20px]"
            />
          </div>
        </div>
        <swiper-slide
          v-for="value in blok.services"
          :key="value.title"
          class="mt-14 pb-12 md:pb-0"
        >
          <NuxtImg
            :src="value.content.image.filename"
            class="w-[82%] mx-auto"
          ></NuxtImg>
          <div class="bg-white p-5 pt-52 mt-[-193px]">
            <StoryblokHeading
              class="font-jakarta text-center font-semibold"
              v-for="heading of value.content.headings"
              :heading="heading"
            />
            <StoryblokBtn
              v-for="button of value.content.actions"
              :button="button"
              class="max-w-[180px] font-jakarta mx-auto mt-3"
            >
            </StoryblokBtn>
          </div>
        </swiper-slide>
      </swiper>

      <StoryblokBtn
        v-for="button of blok.actions"
        :button="button"
        class="max-w-[180px] font-jakarta mt-6 md:mt-14 mx-auto"
      >
      </StoryblokBtn>
    </section>
  </div>
</template>
<style scoped>
::v-deep .swiper-pagination-bullet {
width: 11px;
height: 11px;
margin-right: 8px !important;
}
::v-deep .swiper-pagination-bullet-active {
background-color: #FF6C2B !important ; /* Replace with your desired color */
}
::v-deep .swiper-pagination {
  margin-bottom: 0px;

}
</style>