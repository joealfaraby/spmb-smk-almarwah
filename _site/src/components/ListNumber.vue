<script setup>
  defineProps({
    number: String,
  })
</script>

<template>
  <div class="bg-blue-600 text-white rounded-full w-6 h-6 flex justify-center items-center text-center text-xs flex-none">
    {{ number }}
  </div> 
</template>