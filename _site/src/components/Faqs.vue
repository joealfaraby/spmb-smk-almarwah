<script>
  import { ref } from "vue";

  export default {
    setup() {
      const faqs = [
        {
          question: "Apakah pendaftaran PPDB dapat dilakukan secara online?",
          answer: "Untuk saat ini, pendaftaran PPDB SMA PUQ Pameungpeuk dan SMK Almarwah tahun ajaran 2025-20206 hanya dapat dilakukan secara luring (luar jaringan) atau offline dengan cara datang langsung ke alamat sekolah.",
        },
        {
          question: "Apakah pendaftaran PPDB dibuka setiap hari?",
          answer: "Pendaftaran PPDB SMA PUQ Pameungpeuk dan SM Almarwah tahun ajaran 2025-2026 dibuka setiap hari kerja, mulai senin hingga sabtu, dari pukul 08:00 hingga pukul 14:00 WIB.",
        },
        {
          question: "Apakah biaya PPDB bisa diangsur atau dicicil?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Apakah calon peserta didik diharuskan mampu membaca Al-Quran?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Apakah peserta didik pindahan dari sekolah lain bisa ikut mendaftar?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Setelah resmi diterima, apakah peserta didik bisa pindah jurusan?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
          question: "Apakah peserta didik diperbolehkan membawa handphone ke sekolah?",
          answer: "Tidak. Peserta didik SMA PUQ Pameungpeuk dan SMK Almarwah tidak diperbolehkan membawa handphone ke sekolah. Meski demikian, pada hari-hari tententu ketika diselenggarakan kegiatan-kegiatan tertentu seperti tablig akbar, workshop, pentas seni, atau perlombaan seperti dalam rangka memperingati hari kemerdekaan, peserta didik diperbolehkan untuk membawa handphone. Selain itu, peserta didik juga diizinkan (bahkan diharuskan bagi yang memiliki) untuk membawa handphone ke sekolah pada saat pelaksanaan penilaian tengah/akhir semester, akhir tahun, dan ujian sekolah. Hal ini dimungkinkan karena semua kegiatan penilaian dan ujian di SMA PUQ Pameungpeuk dan SMA Almarwah dilangsungkan secara online.",
        },
        {
          question: "Pukul berapa jam pelajaran pertama dimulai dan jam pelajaran terakhir selesai?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        { 
          question: "What is a lifecycle hook?", 
          answer: "Lifecycle hooks are special functions in Vue components." 
        },
        { 
          question: "How to bind data?", 
          answer: "Data binding in Vue is done using the `v-bind` directive." 
        },
      ]
  
      const visibleAnswers = ref(Array(10).fill(false))
      const toggleAnswer = (index) => {
        visibleAnswers.value[index] = !visibleAnswers.value[index]
      }

      // Splitting FAQs into two columns
      const firstColumnFAQs = faqs.slice(0, 5)
      const secondColumnFAQs = faqs.slice(5)

      return { firstColumnFAQs, secondColumnFAQs, visibleAnswers, toggleAnswer }
    }
  }
</script>

<template>
  <section id="faqs" class="dark:bg-slate-800">
    <div class="container mx-auto px-5 lg:px-8 py-6 lg:py-10 xl:py-16">
      <div class="text-left lg:text-center mb-5 lg:mb-12">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-500">
          Pertanyaan yang Sering Diajukan
        </h2>

        <p class="leading-relaxed text-sm md:text-base md:leading-relaxed text-slate-500 xl:px-32 dark:text-slate-400">
          Jawaban atas sejumlah pertanyaan yang sering diajukan terkait dengan pelaksanaan PPDB dan penyelenggaraan<span class="lg:block">kegiatan pendidikan di lingkungan SMA PUQ Pameungpeuk dan SMK Almarwah.</span>
        </p>
      </div>

      <div class="lg:px-0 xl:px-24 grid grid-cols-1 xl:grid-cols-2 xl:gap-4" data-aos="fade-up">
        <!-- Left Column -->
        <div>
          <div 
            v-for="(faq, index) in firstColumnFAQs" 
            :key="index" 
            class="bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-slate-700 dark:border-none mb-4"
            >
            <button
              @click="toggleAnswer(index)"
              class="w-full px-4 py-3 md:px-5 md:py-4 flex justify-between items-center text-left"
              >
              <p class="text-sm text-slate-600 font-medium dark:text-slate-300">
                {{ faq.question }}
              </p>

              <div class="flex-none ms-3 md:ms-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="{ 'rotate-180': visibleAnswers[index] }"
                  class="bg-blue-100 p-1 rounded-full h-6 w-6 text-blue-600 transform transition-transform duration-200 dark:bg-blue-500 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div
              v-show="visibleAnswers[index]"
              class="text-sm leading-relaxed p-4 md:p-6 bg-gray-50 text-slate-500 border-t border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-slate-400"
              >
              {{ faq.answer }}
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div>
          <div
            v-for="(faq, index) in secondColumnFAQs"
            :key="index + 5"
            class="bg-white border border-gray-300 rounded-lg overflow-hidden dark:bg-slate-700 dark:border-none mb-4"
            >
            <button
              @click="toggleAnswer(index + 5)"
              class="w-full px-4 py-3 md:px-5 md:py-4 flex justify-between items-center text-left"
              >
              <p class="text-sm text-slate-600 font-medium dark:text-slate-300">
                {{ faq.question }}
              </p>

              <div class="flex-none ms-3 md:ms-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  :class="{ 'rotate-180': visibleAnswers[index + 5] }"
                  class="bg-blue-100 p-1 rounded-full h-6 w-6 text-blue-600 transform transition-transform duration-200 dark:bg-blue-500 dark:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div
              v-show="visibleAnswers[index + 5]"
              class="text-sm leading-relaxed p-4 md:p-6 bg-gray-50 text-slate-500 border-t border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-slate-400"
              >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>