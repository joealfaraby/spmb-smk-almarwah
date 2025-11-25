<script setup>
  const data = [
    {
      img: new URL('./../assets/img/group.png', import.meta.url).href,
      imgdesc: 'Pendidikan karakter',
      title: 'Pendidikan Karakter',
      bg: 'bg-violet-100 border-violet-100',
      content: 'Implementasi pendidikan karakter di lingkungan SMA PUQ Pameungpeuk dan SMK Almarwah secara praktis diterapkan pada penegakkan kedisiplinan, keteladanan langsung, optimalisasi bimbingan dan konseling, serta penyelenggaraan kegiatan-kegiatan keagamaan yang melibatkan peserta didik.',
    },
    {
      img: new URL('./../assets/img/mosque.png', import.meta.url).href,
      imgdesc: 'Pendidikan bernuansa pesantren',
      title: 'Pendidikan Rasa Pesantren',
      bg: 'bg-yellow-100 border-yellow-100',
      content: 'Meskipun SMA PUQ Pameungpeuk dan SMK Almarwah bukan sekolah Islam dalam arti formal, tetapi kami senantiasa berkomitmen untuk menjadikan sekaligus menerapkan nilai-nilai islami sebagai bagian penting dalam proses belajar-mengajar serta pembentukan karakter peserta didik.',
    },
    {
      img: new URL('./../assets/img/trophy-2.png', import.meta.url).href,
      imgdesc: 'Ekstrakurikuler sekolah',
      title: 'Ekskul Lebih Variatif',
      bg: 'bg-green-100 border-green-100',
      content: 'Kami menyelenggarakan beragam pilihan ekstrakurikuler yang mencakup bidang seni, olahraga, pengembangan diri, bela diri, keagamaan, bela negara, dan kebahasaan. Ekskul-ekskul tersebut diharapkan dapat lebih mengakomodasi berbagai minat peserta didik yang beragam.'
    },
    {
      img: new URL('./../assets/img/quran.png', import.meta.url).href,
      imgdesc: 'Kegiatan rutin keagamaan',
      title: 'Kegiatan Rutin Keagamaan',
      bg: 'bg-red-100 border-red-100',
      content: 'Setiap hari para peserta didik diwajibkan membaca Al-Quran bersama-sama sebelum memulai jam pelajaran pertama. Ketika waktu salat zuhur tiba, mereka diwajibkan melaksanakan salat berjamaah di masjid sekolah. Selain itu, setiap setengah atau satu semester, sekolah menyelenggarakan tablig akbar.',
    },
    {
      img: new URL('./../assets/img/suitcase.png', import.meta.url).href,
      imgdesc: 'Beasiswa pendidikan',
      title: 'Kesempatan Beasiswa',
      bg: 'bg-blue-100 border-blue-100',
      content: 'Kami menyediakan beasiswa (pembebasan SPP) baik selama periode bulan tertentu atau selama menempuh pendidikan di SMA PUQ Pameungpeuk atau SMK Almarwah bagi peserta didik dari keluarga tidak mampu, memiliki hafalan Al-Quran minimal dua juz, dan yang beprestasi secara akademik.',
    },
    {
      img: new URL('./../assets/img/building.png', import.meta.url).href,
      imgdesc: 'Fasilitas pendidikan',
      title: 'Fasilitas Pendukung',
      bg: 'bg-orange-100 border-orange-100',
      content: 'Kami menawarkan berbagai fasilitas pendukung kegiatan belajar-mengajar seperti ruang kelas yang nyaman, lapangan yang luas, laboratorium kimia dan komputer, perpustakaan, masjid, arena dan peralatan olahraga, serta ruang dan peralatan seni yang memadai.',
    },
  ]
</script>

<template>
  <section id="keunggulan" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="pt-6 pb-4 md:py-6 lg:pt-5 lg:pb-8 xl:pt-12 xl:pb-16">
        <div class="text-left lg:text-center mb-6 lg:mb-8 xl:mb-12">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Kenapa Memilih Almarwah?
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 dark:text-slate-400">
            Beberapa keunggulan kenapa memilih SMA PUQ Pameungpeuk atau SMK Almarwah sebagai tempat <span class="lg:block">untuk melanjutkan pendidikan tingkat menengah atas dan kejuruan merupakan keputusan tepat.</span>
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6">
          <div 
            v-for="(d, index) in data" :key="index" 
            class="p-4 md:p-8 border rounded-xl dark:bg-slate-700 dark:border-slate-700"
            :class="d.bg"
            >
            <div class="flex justify-center item-center bg-white dark:bg-blue-500 rounded-full mb-3 lg:mb-6 w-12 h-12 lg:w-16 lg:h-16 p-3 lg:p-4">
              <img :src="d.img" :alt="d.imgdesc" />
            </div>
            
            <h3 class="text-base font-semibold mb-2 text-slate-700 dark:text-slate-300">
              {{ d.title }}
            </h3>

            <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {{ d.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>