
<script setup lang="ts">
import categories from '~/lib/category'


</script>

<template>
  <section class="py-6 bg-black">
    <div class="my-container mx-auto">
      <h2 class="text-2xl text-white font-bold mb-6">Danh mục</h2>
      <UCarousel
        :items="categories"
        :show-dots="false"
        :arrows="false"
        :auto-scroll="false"
        :scroll-snap="true"
        :ui="{ item: 'basis-3/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5' }"
        class="w-full"
        v-slot="{ item }"
      >
          <NuxtImg :src="item.image" :alt="item.name" class="rounded-xl h-28 flex flex-col items-center justify-center bg-white/5 cursor-pointer transition-transform" draggable="false" />
      </UCarousel>
    </div>
  </section>
</template>

<style scoped>

</style>