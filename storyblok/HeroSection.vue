<script setup lang="ts">
import { storyblokHeroSection } from "../types/heroSection";
import { PropType } from "vue";
const props = defineProps({
  blok: { type: Object as PropType<storyblokHeroSection>, default: null },
});

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Navigation, Pagination];
</script>
<template>
  <div v-editable="blok">
    <section>
      <!-- hero section slider is here -->
      <swiper
        :navigation="{ nextEl: '.nextArrow', prevEl: '.prevArrow' }"
        :slidesPerView="'auto'"
        :pagination="{ clickable: true }"
        :spaceBetween="25"
        :loop="true"
        :modules="modules"
      >
        <!-- prev and next icons -->
        <section
          class="parallax-slider-navigation cursor-pointer hidden md:block"
        >
          <article class="nav-indicator prevArrow">
            <NuxtImg
              v-if="blok.previmage.filename"
              format="webp"
              quality="100"
              :src="blok.previmage.filename"
              :alt="blok.previmage.alt"
              class="w-12 absolute z-40 top-[46%] left-3"
            />
          </article>
          <article class="nav-indicator nextArrow">
            <NuxtImg
              v-if="blok.nextimage.filename"
              format="webp"
              quality="100"
              :src="blok.nextimage.filename"
              :alt="blok.nextimage.alt"
              class="w-12 absolute z-20 top-[46%] right-3"
            />
          </article>
        </section>
        <swiper-slide
          v-for="value in blok.heroslider"
          :key="value.title"
          class="mySlider px-4 md:px-16 w-[100%] h-[100%] relative bg-cover bg-bgGray bg-center md:bg-bottom lg:center xl:bg-center bg-[url('https://storage.googleapis.com/msgsndr/MLvKvVyGos8j4OV4y4Zt/media/65cdbf71190e878f92f457ff.png')] md:bg-[url('https://storage.googleapis.com/msgsndr/YxAHM5dU3e0Y8xUZ6ldI/media/65c5fec46c059cbda18375db.png')]"
        >
          <div
            class="h-[75vh] md:h-screen md:max-h-[375px] lg:max-h-[490px] xl:max-h-[580px] flex"
          >
            <div class="self-end mb-20 md:mb-0 md:self-center px-0 md:px-4">
              <StoryblokHeading
                class="font-jakarta mt-0 md:mt-3"
                v-for="(heading, index) of value.headings"
                :key="index"
                :heading="heading"
              />
              <StoryblokBtn
                v-for="(button, index) of value.action"
                :key="index"
                :button="button"
                class="max-w-[148px] md:max-w-[170px] font-jakarta mt-4 md:mt-10 hidden md:block"
              >
              </StoryblokBtn>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  width: 11px;
  height: 11px;
  margin-right: 8px !important;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: #ff6c2b !important ; 
}
:deep(.swiper-pagination) {
  text-align: left; 
  margin-left: 80px;
  margin-bottom: 18px;
}
@media screen and (max-width: 660px) {
  :deep(.swiper-pagination) {
    margin-left: 17px;
    margin-bottom: 45px;
  }
}
</style>
