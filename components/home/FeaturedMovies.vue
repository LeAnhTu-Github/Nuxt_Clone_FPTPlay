<template>
  <section class="py-8 md:py-12 bg-black">
    <div class="container mx-auto px-2 sm:px-4">
      <h2 class="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-6 md:mb-8">{{ title }}</h2>
      <UCarousel
        :items="movies"
        loop
        :show-dots="false"
        :arrows="false"
        :auto-scroll="false"
        :scroll-snap="true"
        :ui="{
          item: 'px-1 sm:px-2 basis-3/4 xs:basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5'
        }"
        class="w-full"
        v-slot="{ item }"
      >
        <div class="relative group flex flex-col items-center">
          <div class="aspect-[2/3] w-full max-w-[120px] xs:max-w-[150px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[220px] rounded-lg overflow-hidden">
            <img
              :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
              :alt="item.title"
              class="w-full h-full object-cover"
            />
          </div>
          <span class="block mt-2 text-xs xs:text-sm md:text-base tracking-wide text-white line-clamp-2 w-full">
            {{ item.title }}
          </span>
          <div
            class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg"
          >
            <button class="text-white p-2 rounded-full" aria-label="Xem ngay" tabindex="0">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  movies: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>