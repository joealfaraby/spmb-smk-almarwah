<script setup>
  import IconPhone from './icons/IconPhone.vue'
  import IconYoutube from './icons/IconYoutube.vue'
  import IconInstagram from './icons/IconInstagram.vue'
  import IconTiktok from './icons/IconTiktok.vue'
  import IconFacebook from './icons/IconFacebook.vue'
</script>

<template>
  <section id="contact-us" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 py-8 lg:px-8 xl:px-32 lg:py-10 xl:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
        <div class="">
          <h4 class="text-xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Hubungi Kami
          </h4>

          <p class="text-sm text-slate-500 leading-relaxed mb-4 dark:text-slate-400">
            Silakan hubungi kami melalui nomor-nomor berikut untuk pertanyaan-pertanyaan lain seputar Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2025-2026 ini atau hal-hal lain terkait dengan penyelenggaraan pendidikan di SMA dan SMK Almarwah.
          </p>

          <ul>
            <li class="flex justify-start items-center py-2 text-base text-slate-600 font-medium">
              <div class="rounded-lg bg-blue-600 w-8 h-8 flex justify-center items-center dark:bg-slate-600">
                <icon-phone size="14" class="text-white dark:text-slate-300" />
              </div>

              <span class="ms-3 dark:text-slate-400">
                0856-5910-7780
              </span>
            </li>

            <li class="flex justify-start items-center py-2 text-base text-slate-600 font-medium">
              <div class="rounded-lg bg-blue-600 w-8 h-8 flex justify-center items-center dark:bg-slate-600">
                <icon-phone size="14" class="text-white dark:text-slate-300" />
              </div>
              
              <span class="ms-3 dark:text-slate-400">
                0895-3336-74512
              </span>
            </li>

            <li class="flex justify-start items-center py-2 text-base text-slate-600 font-medium">
              <div class="rounded-lg bg-blue-600 w-8 h-8 flex justify-center items-center dark:bg-slate-600">
                <icon-phone size="14" class="text-white dark:text-slate-300" />
              </div>
              
              <span class="ms-3 dark:text-slate-400">
                (022) 594-5757
              </span>
            </li>
          </ul>
        </div>

        <div class="">
          <h4 class="text-xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Sosial
          </h4>

          <p class="text-sm text-slate-500 leading-relaxed mb-4 dark:text-slate-400">
            Ikuti kami di saluran-saluran media sosial berikut untuk mendapatkan informasi-informasi terbaru terkait dengan kegiatan pendidikan di lingkungan SMA PUQ Pameungpeuk dan SMK Almarwah.
          </p>

          <ul>
            <li>
              <a href="https://www.youtube.com/@almarwaheducenter" class="flex justify-start items-center py-2 text-sm font-medium text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                <icon-youtube size="20" class="mr-3" />
                Youtube
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/almarwah_educenter/" class="flex justify-start items-center py-2 text-sm font-medium text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                <icon-instagram size="20" class="mr-3" />
                Instagram
              </a>
            </li>

            <li>
              <a href="https://www.tiktok.com/@almarwaheducenter" class="flex justify-start items-center py-2 text-sm font-medium text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                <icon-tiktok size="20" class="mr-3" />
                Tiktok
              </a>
            </li>

            <li>
              <a href="https://facebook.com/almarwaheducenter" class="flex justify-start items-center py-2 text-sm font-medium text-slate-600 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
                <icon-facebook size="20" class="mr-3" />
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>