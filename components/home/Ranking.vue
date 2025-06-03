<script setup>
const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="py-8 bg-black ">
    <div class="my-container mx-auto">
      <h2 class="text-2xl text-white font-bold mb-6">
        Top 10 phim bộ xu hướng
      </h2>
      <UCarousel :items="movies" :show-dots="false" :arrows="false" :auto-scroll="false" :loop="false"
        :ui="{ 
          item: 'basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 snap-start',
          viewport: movies.length === 1
            ? 'overflow-x-auto snap-x snap-mandatory'
            : 'overflow-x-auto snap-x snap-mandatory'
        }" class="w-ful"
        v-slot="{ item, index }">
        <div v-if="index === 9" class="flex items-center w-full h-[170px] relative">
          <div class="flex justify-end items-center h-full relative z-0">
            <img src="/images/number/10.png" alt="Hạng 10"
              class="select-none text-right w-[220px] h-[150px] object-contain"
              aria-hidden="true" />
          </div>
          <div class="flex items-center h-full relative z-10 -ml-10 md:-ml-16">
            <a tabindex="0" role="button" :aria-label="`Xem phim ${item.title}`"
              class="outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg transition-shadow"
              @click="handleMovieClick(index)" @keydown="event => handleMovieKeyDown(event, index)">
              <div class="w-[120px] h-[170px] rounded-xl overflow-hidden shadow-lg absolute top-2 left-6">
                <img :src="`https://image.tmdb.org/t/p/original${item.backdrop_path}`" :alt="item.title"
                  class="w-full h-full object-cover" draggable="false" />
                <span v-if="item.label"
                  class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {{ item.label }}
                </span>
              </div>
            </a>
          </div>
        </div>
        <div v-else class="flex items-center w-full h-[170px] relative">
          <div class="flex justify-end items-center h-full relative z-0">
            <img :src="`/images/number/${index + 1}.png`" :alt="`Hạng ${index + 1}`"
              class="select-none text-right w-[150px] h-[150px] object-contain"
              aria-hidden="true" />
          </div>
          <div class="flex items-center h-full relative z-10 -ml-10 md:-ml-16">
            <a tabindex="0" role="button" :aria-label="`Xem phim ${item.title}`"
              class="outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg transition-shadow"
              @click="handleMovieClick(index)" @keydown="event => handleMovieKeyDown(event, index)">
              <div class="w-[120px] h-[170px] rounded-xl overflow-hidden shadow-lg absolute top-2 left-6">
                <img :src="`https://image.tmdb.org/t/p/original${item.backdrop_path}`" :alt="item.title"
                  class="w-full h-full object-cover" draggable="false" />
                <span v-if="item.label"
                  class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {{ item.label }}
                </span>
              </div>
            </a>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>
