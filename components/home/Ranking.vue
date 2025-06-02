<script setup>
const props = defineProps({
  movies: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="py-8 bg-black">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl text-white font-bold mb-6">
        Top 10 phim bộ xu hướng
      </h2>
      <UCarousel
        :items="movies"
        :show-dots="false"
        :arrows="false"
        :auto-scroll="false"
        :loop="false"
        :ui="{ item: 'basis-2/3 sm:basis-1/3 md:basis-1/3 lg:basis-1/5 px-4' }"
        class="w-full"
        v-slot="{ item, index }"
      >
        <div
          class="flex items-center w-full h-[130px] md:h-[170px] relative"
          :class="index === 9 ? 'md:w-[220px]' : ''"
        >
          <div
            class="flex-1 flex justify-end items-center h-full relative z-0"
            :class="index === 9 ? 'relative' : ''"
          >
            <img
              :src="`/images/number/${index + 1}.png`"
              :alt="`Hạng ${index + 1}`"
              v-if="index !== 9"
              class="select-none text-right w-[90px] h-[90px] md:w-[150px] md:h-[150px] object-contain"
              aria-hidden="true"
            />
            <img
              v-if="index === 9"
              :src="`/images/number/10.png`"
              :alt="`Hạng 10`"
              class="select-none absolute right-0 top-1/2 -translate-y-1/2 w-[150px] h-[150px] object-cover object-left"
              aria-hidden="true"
            />
          </div>
          <div class="flex-1 flex items-center h-full relative z-10 -ml-10 md:-ml-16">
            <a
              tabindex="0"
              role="button"
              :aria-label="`Xem phim ${item.title}`"
              class="outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg transition-shadow"
              @click="handleMovieClick(index)"
              @keydown="event => handleMovieKeyDown(event, index)"
            >
              <div class="w-[90px] h-[130px] md:w-[120px] md:h-[170px] rounded-xl overflow-hidden shadow-lg absolute left-8 top-2">
                <img
                  :src="`https://image.tmdb.org/t/p/original${item.backdrop_path}`"
                  :alt="item.title"
                  class="w-full h-full object-cover"
                  draggable="false"
                />
                <span
                  v-if="item.label"
                  class="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded"
                >
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
