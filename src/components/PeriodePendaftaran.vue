<script setup>
  import CheckCircle from './icons/CheckCircle.vue'
  import CalendarCheck from './icons/CalendarCheck.vue'

  const periode = [
    {
      nama: 'Gelombang Pertama',
      waktu: '01 Januari - 28 Februari 2025'
    },
    {
      nama: 'Gelombang Kedua',
      waktu: '02 Maret - 30 April 2025'
    },
    {
      nama: 'Gelombang Ketiga',
      waktu: '03 Mei - 31 Juli 2025'
    }
  ]
</script>

<template>
  <section id="syarat-pendaftaran" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="pt-6 pb-8 lg:pt-8 lg:pb-16 border-b border-gray-300 dark:border-slate-700">
        <div class="text-left lg:text-center mb-5 lg:mb-8 xl:mb-10">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Periode Pendaftaran
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 dark:text-slate-400">
            Pendaftaran Penerimaan Peserta Didik Baru (PPDB) SMA dan SMK Almarwah tahun ajaran 2025-2026 <span class="lg:block">ini dibuka ke dalam tiga gelombang, mulai dari bulan Januari hingga Juli 2025.</span>
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          <div 
            v-for="(d, index) in periode" 
            :key="index" 
            class="bg-blue-100 py-7 px-5 rounded-xl dark:bg-slate-700 dark:border-slate-700" 
            >
            <div class="flex justify-start items-center">
              <div class="flex-none mr-4 lg:mr-3">
                <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex justify-center items-center text-center text-lg font-light dark: dark:bg-blue-500">
                  {{ index+1 }}
                </div>
              </div>

              <div>
                <h4 class="text-sm sm:text-base text-slate-700 font-bold dark:font-medium dark:text-slate-400">
                  {{ d.nama }}
                </h4>

                <p class="text-sm sm:text-base md:text-base lg:text-sm xl:text-base text-slate-500 dark:text-white">
                  {{ d.waktu }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p class="mt-5 text-sm text-left lg:text-center text-slate-500 dark:text-slate-400">
          <em>Khusus untuk SMA Terbuka, pendaftaran ditutup pada Agustus 2025.</em>
        </p>
      </div>
    </div>
  </section>
</template>