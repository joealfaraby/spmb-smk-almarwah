<script setup>
  import CheckCircle from './icons/CheckCircle.vue'

  const data = [
    'Mengisi formulir pendaftaran PPDB Tahun Ajaran 2023-2024',
    'Menyerahkan foto kopi Kartu Keluarga (KK)',
    'Menyerahkan foto kopi Akta Kelahiran',
    'Menyerahkan foto kopi KTP orang tua/wali',
    'Menyerahkan foto kopi ijazah SMP/MTS/Paket B yang telah dilegalisir',
    'Menyerahkan surat keterangan lulus',
    'Menyerahkan foto kopi kartu KIP/PIP (jika ada)',
    'Menyerahkan pas foto ukuran 3x4 sebanyak dua lembar',
    'Menyerahkan surat keterangan mutasi (untuk peserta didik pindahan)',
    'Mengisi dan melengkapi Surat Pernyataan Peserta Didik',
    'Melampirkan foto kopi piagam penghargaan/prestasi (jika ada)',
    'Melampirkan satu buah materai Rp. 10.000',
  ]
</script>

<template>
  <section id="syarat-pendaftaran" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="pt-6 pb-4 sm:py-6 md:py-6 lg:pt-6 xl:py-16">
        <div class="text-left lg:text-center mb-2 lg:mb-8 xl:mb-12">
          <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Syarat Pendaftaran
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 dark:text-slate-400">
            Untuk melakukan pendaftaran peserta didik baru, silakan lengkapi persyaratan berikut terlebih dahulu. <span class="lg:block">Selanjutnya, semua berkas persyaratan disimpan ke dalam map berwarna kuning untuk calon peserta didik SMA,</span> <span class="lg:block">dan map berwarna biru untuk calon peserta didik SMK.</span>
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 lg:border border-gray-300 lg:rounded-xl dark:border-slate-700">
          <div 
            v-for="(d, index) in data" 
            :key="index" 
            class="border-b border-gray-300 py-3 px-0 lg:p-4 dark:bg-transparent dark:border-slate-700" 
            :class="{'lg:border-b-0':index == 10 || index == data.length - 1}"
            >
            <div class="flex justify-start items-start">
              <div class="flex-none mt-1 mr-2 xl:mr-3 text-blue-600 dark:text-blue-500">
                <check-circle size="16" />
              </div>

              <div class="text-sm text-slate-500 font-medium leading-relaxed dark:text-slate-300 dark:font-normal">
                {{ d }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>