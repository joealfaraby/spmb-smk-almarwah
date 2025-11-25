<script setup>
  const image = new URL('./../assets/img/map-almarwah.webp', import.meta.url).href
</script>

<template>
  <section id="peta" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="border-b border-gray-300 dark:border-slate-700 pt-8 pb-10 lg:pt-10 lg:pb-12 xl:py-16">
        <div class="text-left lg:text-center mb-6 lg:mb-8 xl:mb-12">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Lokasi Kampus
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 dark:text-slate-400">
            Jl. Sindangreret Bojong Pulus No. 30 Desa Sukasari Kec. Pameungpeuk Kab. Bandung 40376.
          </p>
        </div>

        <div class="relative group rounded-xl">
          <img 
            :src="image" 
            class="rounded-xl" 
            alt="Lokasi kampus SMA dan SMK Almarwah" 
            />
            <div class="absolute inset-0 bg-slate-700 opacity-20 group-hover:opacity-0 transition-opacity rounded-xl"></div>
        </div>
      </div>
    </div>
  </section>
</template>