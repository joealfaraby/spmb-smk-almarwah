<template>
  <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
    <div class="spinner-border animate-spin inline-block w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full"></div>
  </div>
</template>

<script>
export default {
  name: 'AppLoader',
};
</script>

<style scoped>
  .spinner-border {
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
