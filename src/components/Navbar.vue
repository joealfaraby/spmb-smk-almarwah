<script setup>
  import IconMoon from './icons/IconMoon.vue'
  import IconBrightness from './icons/IconBrightness.vue'
  const logo = new URL('./../assets/img/logo.png', import.meta.url).href

  defineProps({
    isDarkMode: Boolean
  })

</script>

<template>
  <nav class="w-full fixed top-0 left-0 bg-white shadow-lg right-0 z-10 dark:bg-gray-800 dark:shadow-xl">
    <div class="container mx-auto px-5 py-3 md:px-5 md:py-4 lg:px-8 xl:px-32 flex justify-between items-center">
      <div class="flex items-center">
        <img :src="logo" class="w-10 h-10 lg:w-12 lg:h-12 mr-3" />
        
        <h1 class="text-sm md:text-base font-bold text-slate-800 leading-tight dark:text-slate-100 dark:font-medium">
          Yayasan Almarwah Bandung
        </h1>
      </div>

      <div>
        <icon-brightness 
          v-if="isDarkMode"
          size="20" 
          class="bg-blue-600 text-white w-8 h-8 rounded-full p-2 dark:bg-slate-600" 
          @click="$emit('toggleDarkMode')" 
          />

        <icon-moon 
          v-else 
          size="20" 
          class="bg-blue-600 text-white w-8 h-8 rounded-full p-2 dark:bg-slate-600" 
          @click="$emit('toggleDarkMode')" 
          />
      </div>
    </div>
  </nav>
</template>