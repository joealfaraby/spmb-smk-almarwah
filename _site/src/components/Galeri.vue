<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
  import PhotoSwipeLightbox from 'photoswipe/lightbox'
  import 'photoswipe/style.css'

  // Import Swiper styles
  import 'swiper/css'
  // import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        visible: false,
        currentIndex: 0,
        modules: [Pagination, Navigation],
        images: [
          { 
            src: new URL('./../assets/img/galeri-12.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-12-thumb.jpg', import.meta.url).href,
            alt: "Image 12", 
            title: "Card 12",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-09.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-09-thumb.jpg', import.meta.url).href, 
            alt: "Image 9", 
            title: "Card 9",
            width: 1280,
            height: 768, 
          },
          { 
            src: new URL('./../assets/img/galeri-10.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-10-thumb.jpg', import.meta.url).href, 
            alt: "Image 10", 
            title: "Card 10",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-03.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-03-thumb.jpg', import.meta.url).href, 
            alt: "Image 3", 
            title: "Card 3",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-02.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-02-thumb.jpg', import.meta.url).href, 
            alt: "Image 2", 
            title: "Card 2",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-13.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-13-thumb.jpg', import.meta.url).href, 
            alt: "Image 1", 
            title: "Card 1",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-04.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-04-thumb.jpg', import.meta.url).href, 
            alt: "Image 4", 
            title: "Card 4",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-05.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-05-thumb.jpg', import.meta.url).href, 
            alt: "Image 5", 
            title: "Card 5",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-06.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-06-thumb.jpg', import.meta.url).href, 
            alt: "Image 6", 
            title: "Card 6",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-07.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-07-thumb.jpg', import.meta.url).href, 
            alt: "Image 7", 
            title: "Card 7",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-08.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-08-thumb.jpg', import.meta.url).href, 
            alt: "Image 8", 
            title: "Card 8",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-11.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-11-thumb.jpg', import.meta.url).href, 
            alt: "Image 11", 
            title: "Card 11",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-01.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-01-thumb.jpg', import.meta.url).href, 
            alt: "Image 11", 
            title: "Card 11",
            width: 1280,
            height: 768,
          },
          { 
            src: new URL('./../assets/img/galeri-14.jpg', import.meta.url).href, 
            thumbnail: new URL('./../assets/img/galeri-14-thumb.jpg', import.meta.url).href, 
            alt: "Image 11", 
            title: "Card 11",
            width: 1280,
            height: 768,
          },
        ],
        breakpoints: {
          '640': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          '1280': {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        },
      }
    },
    mounted() {
      // Initialize PhotoSwipe
      const lightbox = new PhotoSwipeLightbox({
        // mainClass: 'pswp--custom-bg',
        bgOpacity: 1,
        gallery: '.gallery-swiper',
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });

      lightbox.init();
    },
  }
</script>

<template>
  <section id="galeri" class="bg-gray-100 dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="dark:border-y dark:border-slate-700 pt-6 pb-4 sm:pb-8 lg:pt-10 lg:pb-8 xl:py-16">
        <div class="text-left lg:text-center mb-5 lg:mb-12">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Dokumentasi Foto
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 xl:px-52 dark:text-slate-400">
            Foto-foto kegiatan penyelenggaraan pendidikan di lingkungan SMA dan SMK Almarwah.
          </p>
        </div>

        <swiper
          class="gallery-swiper"
          :modules="modules"
          :lazy="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            '640': {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }"
        >
        
        <!-- Slide Cards -->
        <swiper-slide
          v-for="(image, index) in images"
          :key="index"
          >

          <!-- Thumbnail -->
          <a
            :href="image.src"
            :data-pswp-width="image.width"
            :data-pswp-height="image.height"
            >
            <img 
              :src="image.thumbnail" 
              :alt="image.alt" 
              class="rounded-xl" 
              />
          </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>