<script setup>
  import ListNumber from './ListNumber.vue'
</script>

<template>
  <section id="alur-pendaftaran" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="pt-6 pb-4 sm:py-6 md:py-6 lg:pt-6 lg:pb-8 xl:py-4">
        <div class="text-left lg:text-center mb-5 lg:mb-8 xl:mb-12">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Alur Pendaftaran
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 xl:px-32 dark:text-slate-400">
            Langkah-langkah pendaftaran peserta didik baru (PPDB) <span class="lg:block">SMA PUQ Pameungpeuk dan SMK Almarwah tahun ajaran 2025-2026.</span>
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
          <div class="border border-gray-300 p-5 md:p-8 rounded-xl dark:bg-slate-700 dark:border-slate-700">
            <div class="flex justify-start item-center mb-2 lg:mb-4">
              <list-number number="1" class="bg-blue-600 mr-2 xl:mr-3" />  

              <h3 class="text-sm text-slate-700 font-semibold leading-relaxed dark:text-slate-300">
                Mengisi Formulir Pendaftaran
              </h3>
            </div>
            

            <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
              Formulir pendaftaran PPDB tahun ajaran 2025-2026 ini dapat diperoleh dengan mengunduhnya di laman situs ini atau datang langsung ke kampus SMA PUQ Pameungpeuk dan SMK Almarwah pada hari dan jam kerja.
            </p>
          </div>

          <div class="border border-gray-300 p-5 md:p-8 rounded-xl dark:bg-slate-700 dark:border-slate-700">
            <div class="flex justify-start item-center mb-2 lg:mb-4">
              <list-number number="2" class="bg-blue-600 mr-2 xl:mr-3" /> 

              <h3 class="text-sm text-slate-700 font-semibold leading-relaxed dark:text-slate-300">
                Melengkapi Berkas
              </h3>
            </div>
            
            <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
              Pada tahap ini, orang tua/wali calon peserta didik melengkapi dan melampirkan berkas-berkas persyaratan PPDB seperti foto kopi akta kelahiran, foto kofi ijazah yang telah dilegalisir, foto kopi Kartu Keluarga (KK), pas foto, dan materai.
            </p>
          </div>

          <div class="border border-gray-300 p-5 md:p-8 rounded-xl dark:bg-slate-700 dark:border-slate-700">
            <div class="flex justify-start item-center mb-2 lg:mb-4">
             <list-number number="3" class="bg-blue-600 mr-2 xl:mr-3" />  

              <h3 class="text-sm text-slate-700 font-semibold leading-relaxed dark:text-slate-300">
                Menentukan Jadwal Tes dan Wawancara
              </h3>
            </div>
            
            <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
              Jadwal tes dan wawancara ditentukan setelah semua persyaratan dilengkapi sesuai dengan kesepakatan antara calon peserta didik dan pihak sekolah. Tes dan wawancara ini dilakukan di kampus SMA PUQ Pameungpeuk dan SMK Almarwah. 
            </p>
          </div>

          <div class="border border-gray-300 p-5 md:p-8 rounded-xl dark:bg-slate-700 dark:border-slate-700">
            <div class="flex justify-start item-center mb-2 lg:mb-4">
              <list-number number="4" class="bg-blue-600 mr-2 xl:mr-3" />   

              <h3 class="text-sm text-slate-700 font-semibold leading-relaxed dark:text-slate-300">
                Pelaksanaan Tes dan Wawancara
              </h3>
            </div>
            
            <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
              Tes dan wawancara dilakukan untuk mengetahui gambaran umum potensi, minat, keadaan mental dasar, kemampuan membaca dan menulis, pemahaman dasar agama Islam, serta gaya belajar peserta didik.
            </p>
          </div>

          <div class="border border-gray-300 p-5 md:p-8 rounded-xl dark:bg-slate-700 dark:border-slate-700">
            <div class="flex justify-start item-center mb-2 lg:mb-4">
              <list-number number="5" class="bg-blue-600 mr-2 xl:mr-3" />  

              <h3 class="text-sm text-slate-700 font-semibold leading-relaxed dark:text-slate-300">
                Pengumuman Hasil Tes dan Wawancara
              </h3>
            </div>
            
            <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
              Hasil tes dan wawancara ini selanjutnya akan diberitahukan langsung kepada orang tua/wali peserta didik bersangkutan melalui pesan ke nomer telepon sebagaimana yang tercantum pada formulir pendaftaran PPDB.
            </p>
          </div>

          <div class="border border-gray-300 p-5 md:p-8 rounded-xl dark:bg-slate-700 dark:border-slate-700">
            <div class="flex justify-start item-center mb-2 lg:mb-4">
              <list-number number="6" class="bg-blue-600 mr-2 xl:mr-3" />   

              <h3 class="text-sm text-slate-700 font-semibold leading-relaxed dark:text-slate-300">
                Melengkapi Administrasi
              </h3>
            </div>

            <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
              Pada tahap ini, orang tua/wali melengkapi atau melunasi semua biaya administrasi yang telah ditentukan sesuai dengan periode saat pendaftaran dilakukan. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>