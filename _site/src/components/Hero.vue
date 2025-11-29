<script setup>
  const image = new URL('./../assets/img/hero.png', import.meta.url).href
</script>

<template>
  <section id="hero" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 pt-16 pb-8 md:px-5 md:pt-24 md:pb-12 lg:px-8 xl:px-32 xl:pt-28 xl:pb-20">
      <div class="flex flex-col md:flex-row items-center">
        <div class="flex-1 w-full md:w-5/12">
          <h1 class="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-slate-800 font-bold mb-2 dark:text-blue-500">
            Sistem Penerimaan <span class="block">Murid Baru</span>
          </h1>
        
          <p class="text-sm md:text-sm lg:text-base xl:text-lg text-slate-600 mb-10 md:mb-10 lg:mb-14 dark:text-slate-400">
            SMA PUQ Pameungpeuk kembali membuka Sistem Penerimaan Murid Baru (SPMB) untuk tahun ajaran <strong>2026-2027</strong>.
          </p>

          <div class="mb-12 md:mb-0">
            <a
              href="https://drive.google.com/drive/folders/1dlh6sTvx4pKjp4lnn4cVDO_whF0Jkvff"
              class="bg-blue-600 hover:bg-blue-700 border border-2 border-blue-600 hover:border-blue-700 rounded-md inline text-sm text-white px-4 py-2.5 mr-3 lg:text-md lg:px-6 lg:py-4 lg:mr-5" 
              >
              Unduh Formulir
            </a>

            <a
              href="#"
              class="bg-white hover:bg-blue-700 border border-2 border-blue-600 hover:border-blue-700 rounded-md text-sm text-blue-600 hover:text-white px-4 py-2.5 lg:text-md lg:px-6 lg:py-4 dark:border-slate-500 dark:bg-slate-500 dark:text-white dark:hover:bg-slate-600 dark:hover:border-slate-600" 
              >
              Unduh Brosur
            </a>
          </div>
        </div>
        
        <div class="flex-none w-full md:w-1/12">
        </div>

        <div class="flex-none md:w-6/12">
          <img :src="image" alt="Example from Assets" class="w-full h-auto" />
        </div>
      </div>
    </div>
  </section>
</template>
