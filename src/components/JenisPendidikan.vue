<script setup>
  import CheckCircle from './icons/CheckCircle.vue'
</script>

<template>
  <section id="jenis-pendidikan" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 xl:px-32">
      <div class="py-8 md:pb-10 lg:py-10 xl:py-16">
        <div class="text-left lg:text-center mb-5 lg:mb-8 xl:mb-12">
          <h2 class="text-xl sm:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
            Satuan Pendidikan
          </h2>

          <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 xl:px-32 dark:text-slate-400">
            Ada tiga satuan pendidikan yang saat ini diselenggarakan dan dikelola oleh Yayasan Almarwah,<span class="lg:block">yaitu SMA Reguler, SMA Terbuka, dan SMK.</span>
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4 xl:gap-8">
          <!-- SMA -->
          <div class="bg-white bg-dots-lg border border-gray-300 px-5 pt-12 pb-4 md:pt-12 lg:p-8 lg:pt-10 rounded-xl dark:bg-slate-700 dark:border-none">
            <h2 class="text-2xl lg:text-2xl font-bold text-blue-600 mb-4 dark:text-blue-500">
              SMA Reguler
            </h2>

            <p class="leading-relaxed text-sm md:leading-relaxed text-slate-500 mb-6 md:mb-6 lg:mb-6 dark:text-slate-400">
              SMA PUQ Pameungpeuk adalah nama untuk satuan pendidikan formal menengah atas yang diselenggarakan oleh Yayasan Almarwah. Visi SMA PUQ Pameungpeuk ialah mencetak generasi smart, unggul, proaktif, estetis, dan relijius. Adapun jurusan yang tersedia di SMA PUQ Pameungpeuk saat ini ialah:
            </p>

            <div class="flex justify-start items-start border-t border-b border-gray-300 py-4 dark:border-slate-600">
              <check-circle size="20" class="text-blue-600 mt-1 mr-4 dark:text-blue-500" />

              <div>
                <h3 class="text-sm lg:text-base text-slate-700 font-semibold tracking-tight mt-0.5 mb-2 dark:text-slate-300">
                  Matematika dan Ilmu Pengetahuan Alam
                </h3>

                <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                  Fokus utama jurusan Matematika dan Ilmu Pengetahuan Alam ini ialah mempelajari ilmu-ilmu eksakta, seperti matematika, dan ilmu-ilmu alam seperti biologi, fisika, dan kimia.
                </p>
              </div>
            </div>

            <div class="flex justify-start items-start border-b border-gray-300 py-4  dark:border-slate-600">
              <check-circle size="20" class="text-blue-600 mt-1 mr-4 dark:text-blue-500" />

              <div>
                <h3 class="text-sm lg:text-base text-slate-700 font-semibold tracking-tight mt-0.5 mb-2 dark:text-slate-300">
                  Ilmu Pengetahuan Sosial
                </h3>

                <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                  Fokus utama jurusan Ilmu Pengetahun Sosial ini ialah mempelajari ilmu-ilmu sosial seperti sejarah, geografi, ekonomi, dan sosiologi. 
                </p>
              </div>
            </div>

            <div class="flex justify-start items-start py-4">
              <check-circle size="20" class="text-blue-600 mt-1 mr-4 dark:text-blue-500" />

              <div>
                <h3 class="text-sm lg:text-base text-slate-700 font-semibold tracking-tight mt-0.5 mb-2 dark:text-slate-300">
                  Bahasa
                </h3>

                <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                  Fokus utama jurusan Bahasa ini ialah mempelajari bahasa Indonesia dan bahasa asing (bahasa Inggris dan bahasa Arab), serta antropologi.
                </p>
              </div>
            </div>
          </div>

          <!-- SMA TERBUKA -->
          <div class="bg-white bg-dots-lg border border-gray-300 px-5 pt-12 pb-4 md:pt-12 lg:p-8 lg:pt-10 rounded-xl dark:bg-slate-700 dark:border-none">
            <h2 class="text-2xl lg:text-2xl font-bold text-blue-600 mb-4 dark:text-blue-500">
              SMA Terbuka
            </h2>

            <p class="leading-relaxed text-sm md:leading-relaxed text-slate-500 mb-6 md:mb-6 lg:mb-6 dark:text-slate-400">
              SMA Terbuka adalah salah satu bentuk satuan pendidikan formal yang diselenggarakan oleh Yayasan Almarwah. SMA Terbuka ini sifatnya berdiri sendiri, namun ia tetap merupakan bagian dari sekolah induk yang dalam hal ini ialah SMA PUQ Pameungpeuk.
            </p>

            <p class="leading-relaxed text-sm md:leading-relaxed text-slate-500 mb-6 md:mb-6 lg:mb-6 dark:text-slate-400">
              Penyelenggaran SMA Terbuka ini secara umum bertujuan untuk memberikan kesempatan kepada anak-anak usia sekolah yang kurang mampu, terutama mereka yang terkendala geografis dan tidak memiliki waktu, untuk melanjutkan pendidikan ke tingkat sekolah menengah atas.
            </p>

            <p class="leading-relaxed text-sm md:leading-relaxed text-slate-500 mb-6 md:mb-6 lg:mb-6 dark:text-slate-400">
              Konsep program SMA terbuka ini ialah pembelajaran tanpa biaya dengan waktu belajar fleksibel yang menerapkan sistem pembelajaran jarak jauh dan mandiri (tatap muka).
            </p>

            <p class="leading-relaxed text-sm md:leading-relaxed text-slate-500 mb-6 md:mb-6 lg:mb-6 dark:text-slate-400">
              Hanya ada satu jurusan yang tersedia di SMA Terbuka yang diselenggarakan oleh Yayasan Almarwah ini, yaitu Ilmu Pengetahuan Sosial.
            </p>

            <p class="leading-relaxed text-sm md:leading-relaxed text-slate-500 mb-6 md:mb-6 lg:mb-0 dark:text-slate-400">
              Untuk saat ini, pelaksanaan kegiatan belajar mengajar SMA Terbuka dilakukan di dua tempat, yaitu (1) Kampus SMA PUQ Pameungpeuk dan (2) SMPN 2 Pasirjambu, Kecamatan Ciwidey, Kabupaten Bandung.
            </p>
          </div>

          <!-- SMK -->
          <div class="bg-white bg-dots-lg border border-gray-300 px-5 pt-12 pb-4 md:pt-12 lg:p-8 lg:pt-10 rounded-xl dark:bg-slate-700 dark:border-none">
            <h2 class="text-2xl lg:text-2xl font-bold text-blue-600 mb-4 dark:text-blue-500">
              SMK
            </h2>

            <p class="leading-relaxed text-sm md:leading-relaxed text-slate-500 mb-6 md:mb-6 lg:mb-6 dark:text-slate-400">
              SMK Almarwah adalah nama untuk satuan pendidikan formal vokasional yang diselenggarakan oleh Yayasan Almarwah. Visi SMK Almarwah ialah mencetak lulusan yang mampu berpikir secara holistik, sadar akan nilai-nilai estetis, berbudaya, agamis, dan menjadi teladan dalam kehidupan bermasyarakat. Adapun jurusan yang tersedia di SMK Almarwah saat ini ialah:
            </p>

            <div class="flex justify-start items-start border-t border-b border-gray-300 py-4 dark:border-slate-600">
              <check-circle size="20" class="text-blue-600 mt-1 mr-4 dark:text-blue-500" />

              <div>
                <h3 class="text-sm lg:text-base text-slate-700 font-semibold tracking-tight mt-0.5 mb-2 dark:text-slate-300">
                  Akuntansi
                </h3>

                <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                  Fokus utama jurusan akuntansi ini ialah mempelajari sekaligus mempraktikkan materi-materi seputar pencatatan, pengelolaan, serta penyajian laporan berbagai aktifitas yang berkaitan dengan keuangan.
                </p>
              </div>
            </div>

            <div class="flex justify-start items-start py-4">
              <check-circle size="20" class="text-blue-600 mt-1 mr-4 dark:text-blue-500" />

              <div>
                <h3 class="text-sm lg:text-base text-slate-700 font-semibold tracking-tight mt-0.5 mb-2 dark:text-slate-300">
                  Rekayasa Perangkat Lunak
                </h3>

                <p class="text-sm text-slate-500 leading-relaxed dark:text-slate-400">
                  Fokus utama jurusan ini ialah mempelajari materi-materi yang berkaitan dengan pemrograman komputer, basis data, web statis dan dinamis, serta pembuatan, pengembangan, dan pemeliharaan perangkat lunak berbasis desktop dan mobile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>