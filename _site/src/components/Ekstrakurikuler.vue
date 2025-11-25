<script setup>
  const image = new URL('./../assets/img/galeri-15.jpg', import.meta.url).href
</script>

<template>
  <section id="ekstrakurikuler" class="dark:bg-slate-800">
    <div class="container px-5 lg:px-8 xl:px-32 pb-4 lg:mb-0">
      <div class="bg-dots-l-b-lg border border-gray-300 flex flex-col-reverse lg:flex-row rounded-xl dark:bg-slate-700 dark:border-none">
        <div class="w-full lg:w-7/12 p-4 pb-16 md:p-8 md:pb-20 lg:px-8 lg:py-10">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-slate-300">
            Ekstrakurikuler
          </h2>

          <p class="text-sm text-slate-500 leading-relaxed md:leading-relaxed mb-4 md:mb-6 dark:text-slate-400">
            Ekstrakurikuler merupakan kegiatan non-pelajaran formal bagi para peserta didik mengembangkan bakat dan keterampilannya pada bidang-bidang non-akademik seperti olahraga, seni, keagamaan, serta pengembangan kepribadian.
          </p>

          <p class="text-sm text-slate-500 leading-relaxed md:leading-relaxed mb-4 md:mb-6 dark:text-slate-400">
            Adapun ekskul-ekskul yang diselenggarakan di lingkungan SMA PUQ Pameungpeuk dan SMK Almarwah ialah <span class="font-semibold">Marching Band</span>, 
            <span class="font-semibold">Paskibra</span>, 
            <span class="font-semibold">Pramuka</span>,
            <span class="font-semibold">Alquds</span>, 
            <span class="font-semibold">Palang Merah Remaja</span>, 
            <span class="font-semibold">Angklung</span>, 
            <span class="font-semibold">Biola</span>, 
            <span class="font-semibold">Bahasa Jepang</span>, 
            <span class="font-semibold">Bola Voli</span>, 
            <span class="font-semibold">Bola Basket</span>, 
            <span class="font-semibold">Futsal</span>, 
            <span class="font-semibold">Karate</span>, 
            <span class="font-semibold">Silat</span>, 
            <span class="font-semibold">Paduan Suara</span>, 
            <span class="font-semibold">Melukis</span>.
          </p>
        </div>

        <div class="lg:w-5/12 w-full h-auto lg:h-96">
          <img :src="image" class="w-full h-full object-cover rounded-t-xl lg:rounded-r-xl lg:rounded-tl-none" alt="Sidang Akuntansi" />
        </div>
      </div>
    </div>
  </section>
</template>