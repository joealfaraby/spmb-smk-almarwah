<script setup>
  const data = [
    {
      img: new URL('./../assets/img/group.png', import.meta.url).href,
      imgdesc: 'Image description',
      title: 'Tahfiz Quran',
      content: 'Secara praktis, pendidikan karakter diterapkan pada penegakkan kedisiplinan, teladan langsung, optimalisasi bimbingan dan konseling, serta penyelenggaraan kegiatan-kegiatan keagamaan yang melibatkan peserta didik secara langsung.',
    },
    {
      img: new URL('./../assets/img/mosque.png', import.meta.url).href,
      imgdesc: 'Image description',
      title: 'Ulumul Quran',
      content: 'Meski bukan sekolah Islam, tapi kami senantiasa berkomitmen untuk menjadikan sekaligus menerapkan nilai-nilai islami sebagai bagian penting dalam pembentukan karakter peserta didik.',
    },
    {
      img: new URL('./../assets/img/trophy-2.png', import.meta.url).href,
      imgdesc: 'Image description',
      title: 'Bahasa Arab',
      content: 'Ada banyak ekstrakurikuler yang dapat dipilih peserta didik SMA dan SMK Almarwah yang mencakup bidang seni, olahraga, pengembangan diri, bela diri, keagamaan, bela negara, dan kebahasaan.',
    },
  ]
</script>

<template>
  <section id="keunggulan">
    <div class="bg-gray-100 py-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl text-center font-bold text-gray-800 tracking-tight mb-4">
          Program Unggulan
        </h2>
          
        <p class="text-gray-600 text-center mb-12">
          Kenapa harus memilih SMA dan SMK Almarwah sebagai tempat melanjutkan 
          pendidikan menengah atas?
        </p>

        <div class="grid md:grid-cols-3 gap-6">
          <div 
            v-for="(d, index) in data" :key="index" 
            class="border border-slate-300 bg-white p-12 rounded-xl transition ease-in-out delay-50 hover:shadow-xl hover:-translate-y-1"
            >
            <div class="flex justify-center item-center bg-blue-100 rounded-full mb-5 w-16 h-16 p-4">
              <img :src="d.img" :alt="d.imgdesc" />
            </div>
            
            <h3 class="text-xl text-slate-800 font-semibold mb-4">
              {{ d.title }}
            </h3>

            <p class="text-sm text-gray-500 leading-relaxed">
              {{ d.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>