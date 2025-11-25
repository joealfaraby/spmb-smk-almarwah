<script setup>
  import { ref } from 'vue'
  import Navbar from './components/Navbar.vue'
  import Hero from './components/Hero.vue'
  import About from './components/About.vue'
  import JenisPendidikan from './components/JenisPendidikan.vue'
  import Mulok from './components/Mulok.vue'
  import Ekstrakurikuler from './components/Ekstrakurikuler.vue'
  import Beasiswa from './components/Beasiswa.vue'
  import Keunggulan from './components/Keunggulan.vue'
  import AlurPendaftaran from './components/AlurPendaftaran.vue'
  import SyaratPendaftaran from './components/SyaratPendaftaran.vue'
  import PeriodePendaftaran from './components/PeriodePendaftaran.vue'
  import Faqs from './components/Faqs.vue'
  import Galeri from './components/Galeri.vue'
  import PetaLokasi from './components/PetaLokasi.vue'
  import ContactUs from './components/ContactUs.vue'
  import SiteFooter from './components/SiteFooter.vue'

  const iconDarkMode = ref(true)
  const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    iconDarkMode.value = !iconDarkMode.value

    if (isDarkMode.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

</script>

<template>
  <div :class="{ 'dark': isDarkMode }">
    <navbar @toggleDarkMode="toggleDarkMode" :isDarkMode="isDarkMode" />
    <hero />
    <about />
    <jenis-pendidikan />
    <mulok />
    <ekstrakurikuler />
    <beasiswa />
    <keunggulan />
    <alur-pendaftaran />
    <syarat-pendaftaran />
    <periode-pendaftaran />
    <galeri />
    <peta-lokasi />
    <contact-us />
    <site-footer />
  </div>
</template>