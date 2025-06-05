<script setup lang="ts">
import type { Movie } from '~/types/Movie';
import { useTmdbImage } from '~/composables/useTbdbImage'

const { getImageUrl } = useTmdbImage()
interface NewMoviesProps {
    movies: Movie[]
    title: string
    loading: boolean
}

const props = defineProps<NewMoviesProps>()

const router = useRouter()
const handleClick = (id: number) => {
  router.push(`/video/${id}`)
}
</script>
<template>
    <section class="py-6 bg-black">
        <div class="my-container mx-auto">
            <template v-if="!props.loading && props.movies.length">
                <h2 class="text-2xl text-white font-bold mb-8">{{ title }}</h2>
            </template>
            <div v-if="props.loading">
                <h2 class="text-2xl text-white font-bold mb-8">
                    <USkeleton class="h-8 w-1/2 mb-6 bg-gray-800" />
                </h2>
                <UCarousel 
                    :items="[1, 2, 3, 4, 5]" 
                    loop 
                    :show-dots="false" 
                    :arrows="false" 
                    :auto-scroll="false" 
                    :scroll-snap="true"
                    :ui="{ item: 'basis-2/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 snap-start' }" 
                    class="w-full" 
                    v-slot="{ item }"
                >
                    <div class="relative group">
                        <USkeleton class="absolute left-2 top-2 z-10 h-7 w-16 rounded-lg bg-gray-800" />
                        
                        <div class="aspect-[16/9] w-full rounded-lg overflow-hidden">
                            <USkeleton class="w-full h-full bg-gray-800" />
                        </div>
                        
                        <div class="mt-2">
                            <USkeleton class="h-4 w-1/2 mt-1 bg-gray-800" />
                        </div>
                    </div>
                </UCarousel>
            </div>

            <UCarousel 
                v-else
                :items="props.movies" 
                loop 
                :show-dots="false" 
                :arrows="false" 
                :auto-scroll="false" 
                :scroll-snap="true"
                :ui="{ item: 'basis-2/3 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 snap-start' }" 
                class="w-full" 
                v-slot="{ item }"
            >
                <div class="relative group" @click="handleClick(item.id)">
                    <span
                        class="absolute left-2 top-2 z-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-2 py-1 text-white font-bold text-sm select-none"
                        aria-label="Phim mới"
                    >
                        MỚI
                    </span>
                    <div class="aspect-[16/9] w-full rounded-lg overflow-hidden">
                        <NuxtImg 
                            :src="getImageUrl(item.backdrop_path || item.poster_path, 'w500')" 
                            :alt="item.title"
                            class="w-full h-full object-cover"
                        />
                    </div>
                    <span class="block mt-2 text-sm tracking-wide text-white line-clamp-2">{{ item.title }}</span>
                    <div
                        class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
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