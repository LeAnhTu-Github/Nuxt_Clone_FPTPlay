<script setup lang="ts">
import type { Movie } from '~/types/Movie';
import { useTmdbImage } from '~/composables/useTbdbImage'
const { getImageUrl } = useTmdbImage()

interface RankingProps {
  movies: Movie[]
}

const props = defineProps<RankingProps>()

const router = useRouter()
const handleClick = (id: number) => {
  router.push(`/video/${id}`)
}
</script>

<template>
  <section class="py-8 bg-black ">
    <div class="my-container mx-auto">
      <h2 class="text-2xl text-white font-bold mb-6">
        Top 10 phim bộ xu hướng
      </h2>
      <UCarousel :items="props.movies" :show-dots="false" :arrows="false" :auto-scroll="false" :loop="false"
        :ui="{ 
          item: 'basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 snap-start',
          viewport: props.movies.length === 1
            ? 'overflow-x-auto snap-x snap-mandatory'
            : 'overflow-x-auto snap-x snap-mandatory'
        }" class="w-ful"
        v-slot="{ item, index }">
        <div v-if="index === 9" class="flex items-center w-full h-[170px] relative">
          <div class="flex justify-end items-center h-full relative z-0">
            <NuxtImg src="/images/number/10.png" alt="Hạng 10"
              class="select-none text-right w-[220px] h-[150px] object-contain"
              aria-hidden="true" draggable="false" />
          </div>
          <div class="flex items-center h-full relative z-10 -ml-10 md:-ml-16">
            <a tabindex="0" role="button" :aria-label="`Xem phim ${item.title}`"
              class="outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg transition-shadow"
              @click="handleClick(item.id)" @keydown="event => handleClick(item.id)">
              <div class="w-[120px] h-[170px] rounded-xl overflow-hidden shadow-lg absolute top-2 left-6">
                <NuxtImg :src="getImageUrl(item.backdrop_path, 'original')" :alt="item.title"
                  class="w-full h-full object-cover" draggable="false" />
              </div>
            </a>
          </div>
        </div>
        <div v-else class="flex items-center w-full h-[170px] relative">
          <div class="flex justify-end items-center h-full relative z-0">
            <NuxtImg :src="`/images/number/${index + 1}.png`" :alt="`Hạng ${index + 1}`"
              class="select-none text-right w-[150px] h-[150px] object-contain"
              aria-hidden="true" draggable="false" />
          </div>
          <div class="flex items-center h-full relative z-10 -ml-10 md:-ml-16">
            <a tabindex="0" role="button" :aria-label="`Xem phim ${item.title}`"
              class="outline-none focus:ring-2 focus:ring-yellow-400 rounded-lg transition-shadow"
              @click="handleClick(item.id)" @keydown="event => handleClick(item.id)">
              <div class="w-[120px] h-[170px] rounded-xl overflow-hidden shadow-lg absolute top-2 left-6">
                <NuxtImg :src="getImageUrl(item.backdrop_path, 'original')" :alt="item.title"
                  class="w-full h-full object-cover" draggable="false" />
              </div>
            </a>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 375px) {
  .custom-xs\:basis-1\/2 {
    flex-basis: 50%;
  }
}
</style>
