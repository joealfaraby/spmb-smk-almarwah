<template>
  <section id="about" class="dark:bg-slate-800">
    <div class="container mx-auto text-start md:text-center px-5 lg:px-8 xl:px-32">
      <div class="md:border-b md:border-y border-gray-300 py-0 md:py-10 lg:py-10 xl:py-20 dark:border-slate-700">
        <h2 class="text-xl sm:text-2xl lg:text-3xl text-slate-800 font-bold mb-1 lg:mb-3 dark:text-blue-400">
          Sekilas tentang Yayasan Almarwah
        </h2>

        <div class="grid grid-cols-3 border-y border-gray-300 py-12">
          <div class="flex justify-center items-center">
            <div class="relative w-40 h-40 rounded-full bg-gray-200">
              <!-- Donut Chart -->
              <div
                class="absolute inset-0 rounded-full bg-transparent"
                style="background: conic-gradient(#FFC35B 70% 100%);"
              ></div>

              <!-- Inner Circle for Hollow Effect -->
              <div class="absolute inset-4 rounded-full bg-white"></div>

              <!-- Center Text -->
              <div class="absolute inset-0 flex flex-col justify-center items-center text-gray-700">
                <span class="text-lg font-bold">461</span>
                <span class="text-sm">SMA</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center">
            <div class="relative w-40 h-40 rounded-full bg-gray-200">
              <!-- Donut Chart -->
              <div
                class="absolute inset-0 rounded-full bg-transparent"
                style="background: conic-gradient(#5484EF 70% 100%);"
              ></div>

              <!-- Inner Circle for Hollow Effect -->
              <div class="absolute inset-4 rounded-full bg-white"></div>

              <!-- Center Text -->
              <div class="absolute inset-0 flex flex-col justify-center items-center text-gray-700">
                <span class="text-lg font-bold">247</span>
                <span class="text-sm">SMK</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center items-center">
            <div class="relative w-40 h-40 rounded-full bg-gray-200">
              <!-- Donut Chart -->
              <div
                class="absolute inset-0 rounded-full bg-transparent"
                style="background: conic-gradient(#FB2884 70% 100%);"
              ></div>

              <!-- Inner Circle for Hollow Effect -->
              <div class="absolute inset-4 rounded-full bg-white"></div>

              <!-- Center Text -->
              <div class="absolute inset-0 flex flex-col justify-center items-center text-gray-700">
                <span class="text-lg font-bold">168</span>
                <span class="text-sm">TBK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>