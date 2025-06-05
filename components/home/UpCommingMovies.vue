<script setup lang="ts">
import type { Movie } from '~/types/Movie';
import { useTmdbImage } from '~/composables/useTbdbImage'
const { getImageUrl } = useTmdbImage()
interface UpCommingMoviesProps {
  movies: Movie[]
  title: string
}

const props = defineProps<UpCommingMoviesProps>()

  const toast = useToast()
  const handleClick = () => {
    toast.add({
      title: 'Thông báo',
      color: 'error',
      icon: 'i-heroicons-exclamation-triangle',
      description: 'Vui lòng đăng nhập để đặt lịch',
    })
  }
  </script>
<template>
    <section class="py-8 md:py-12 bg-black">
      <div class="my-container mx-auto overflow-x-visible">
        <h2 class="text-2xl text-white font-bold mb-6">{{ title }}</h2>
        <UCarousel
          :items="props.movies"
          loop
          :show-dots="false"
          :arrows="false"
          :auto-scroll="false"
          :scroll-snap="true"
          :ui="{ item: 'px-4 basis-full md:basis-1/2 snap-start' }"
          class="w-full overflow-x-visible"
          v-slot="{ item }"
        >
          <div class="relative h-80 md:h-[400px] bg-neutral-900 rounded-xl overflow-hidden shadow-lg">
            <NuxtImg :src="getImageUrl(item.backdrop_path, 'w780')" :alt="item.title"
              class="absolute inset-0 w-full h-full object-fill" draggable="false" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 flex flex-col gap-2 px-6 pb-6 z-10">
              <span class="text-lg md:text-2xl font-bold text-white drop-shadow mb-1 sm:w-[70%] w-full">
                {{ item.title }}
              </span>
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-white/80 text-xs md:text-sm mb-1">
                <span v-if="item.release_date">Dự kiến công chiếu: {{ item.release_date }}</span>
              </div>
              <button
                class="flex lg:hidden items-center gap-2 bg-[#fe592a] hover:bg-[#ff4400] text-white font-bold px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fe592a] transition mt-2 w-auto min-w-[120px] max-w-[120px]"
                aria-label="Đặt lịch"
                tabindex="0"
                @click="handleClick"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Đặt lịch
              </button>
            </div>
          </div>
        </UCarousel>
      </div>
    </section>
  </template>
