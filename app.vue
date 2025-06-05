<script setup lang="ts">
</script>

<template>
  <div class="bg-black">
    <UApp :toaster="{
      position: 'top-right',
      duration: 3000,
    }">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>

<style scoped>
</style>
