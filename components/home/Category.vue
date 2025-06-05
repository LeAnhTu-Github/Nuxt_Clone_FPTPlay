<script setup lang="ts">
import categories from '~/lib/category'

interface CategoryProps {
  loading: boolean
}

const props = defineProps<CategoryProps>()
</script>

<template>
  <section class="py-6 bg-black">
    <div class="my-container mx-auto">
      <div v-if="props.loading">
        <h2 class="text-2xl text-white font-bold mb-6">
          <USkeleton class="h-8 w-3/4 mb-6" />
        </h2>
        <h2 class="text-2xl text-white font-bold mb-6">
          <USkeleton class="h-8 w-3/4 mb-6" />
        </h2>
        <UCarousel
          :items="[1, 2, 3, 4, 5]"
          :show-dots="false"
          :arrows="false"
          :auto-scroll="false"
          :scroll-snap="true"
          :ui="{ item: 'basis-3/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5' }"
          class="w-full"
          v-slot="{ item }"
        >
          <div class="rounded-xl h-28 bg-white/5">
            <USkeleton class="w-full h-full rounded-xl" />
          </div>
        </UCarousel>
      </div>

      <template v-else-if="!props.loading && categories.length">
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
          <NuxtImg 
            :src="item.image" 
            :alt="item.name" 
            class="rounded-xl h-28 flex flex-col items-center justify-center bg-white/5 cursor-pointer transition-transform" 
            draggable="false" 
          />
        </UCarousel>
      </template>
    </div>
  </section>
</template>

<style scoped>

</style>