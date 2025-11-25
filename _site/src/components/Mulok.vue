<script setup>
  const image = new URL('./../assets/img/galeri-16.jpg', import.meta.url).href
</script>

<template>
  <section id="mulok" class="dark:bg-slate-800 pb-8 md:pb-10 lg:pb-10 xl:pb-16">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="bg-dots-r-b-lg border border-gray-300 flex flex-col lg:flex-row rounded-xl dark:bg-slate-700 dark:border-none">
        <div class="lg:w-5/12 w-full h-auto lg:h-96">
          <img :src="image" class="w-full h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none" alt="Example from Assets" />
        </div>

        <div class="w-full lg:w-7/12 p-4 pb-16 md:p-8 md:pb-20 lg:px-8 lg:py-10">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-slate-300">
            Muatan Lokal
          </h2>

          <p class="text-sm text-slate-500 leading-relaxed md:leading-relaxed mb-4 md:mb-6 dark:text-slate-400">
            Tujuan dari penyelenggaraan muatan lokal (mulok) di sebuah lembaga pendidikan ialah untuk membekali para peserta didik pengetahuan, keterampilan, serta sikap yang mereka perlukan untuk mengenali dan mencintai lingkungan alam, sosial, budaya, dan spriritual di daerah tempat mereka tinggal.
          </p>

          <p class="text-sm text-slate-500 leading-relaxed md:leading-relaxed mb-2 lg:mb-0 dark:text-slate-400">
            Adapun muatan-muatan lokal yang diselenggarakan di SMA PUQ Pameungpeuk dan SMK Almarwah ialah <strong>Al-Quran</strong>, <strong>Hadis</strong>, <strong>Tahfiz Quran</strong>, <strong>Ekonomi Syariah</strong>, <strong>Bahasa Sunda</strong>, dan <strong>Pendidikan Lingkungan Hidup</strong>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>