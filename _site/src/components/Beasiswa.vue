<script setup>
  const data = [
    {
      title: 'Beasiswa Dhuafa',
      content: 'Jenis beasiswa ini diberikan kepada peserta didik yang berstatus anak yatim, fakir miskin, dan dhuafa, termasuk mereka yang diterlantarkan oleh orang tua. Bentuk pemberian beasiswa ini adalah pembebasan SPP hingga peserta didik tersebut menyelesaikan pendidikannya di SMA PUQ Pameungpeuk atau SMK Almarwah.',
    },
    {
      title: 'Beasiswa Tahfiz',
      content: 'Jenis beasiswa ini diberikan kepada peserta didik yang memiliki hafalan Al-Quran, minimal dua juz. Bentuknya berupa pembebasan SPP. Untuk terus memperoleh beasiswa ini hingga lulus, peserta didik bersangkutan wajib menambah satu juz hafalan per semesternya sehingga total juz yang dihafalnya akan menjadi, minimal, delapan saat lulus.',
    },
    {
      title: 'Beasiswa Prestasi',
      content: 'Jenis beasiswa ini diberikan kepada peserta didik yang meraih rangking pertama dan kedua di kelas masing-masing untuk tiap semesternya. Bentuknya berupa pembebasan SPP selama satu semester ke depan. Apabila peserta didik bersangkutan kembali mampu, minimal, mempertahankan prestasinya tersebut, maka ia berhak memperoleh kembali beasiswa prestasi ini.',
    },
  ]
</script>

<template>
  <section id="beasiswa" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="pt-6 pb-4 lg:pt-12 lg:pb-8 xl:pt-16">
        <div class="text-left lg:text-center mb-5 lg:mb-8 xl:mb-12">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Skema Beasiswa
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 xl:px-32 dark:text-slate-400">
            Sebagai salah satu bentuk ikhtiar kami dalam membantu anak yatim (termasuk fakir miskin dan yang ditelantarkan orang tua) serta memotivasi dan mendukung para pelajar dalam menghafal Al-Quran, kami memberikan beasiswa berupa pembebasan SPP yang dibagi ke dalam tiga skema berikut.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 xl:gap-6">
          <div 
            v-for="(d, index) in data" :key="index" 
            class="bg-white bg-dots px-4 py-6 md:p-8 lg:px-10 lg:pt-16 lg:pb-10 rounded-xl dark:bg-slate-700 border border-gray-300 dark:border-slate-700"
            >
            
            <h3 class="text-md md:text-lg text-blue-600 font-bold mb-2 dark:text-slate-300">
              {{ d.title }}
            </h3>

            <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
              {{ d.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>