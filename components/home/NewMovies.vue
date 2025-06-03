<template>
    <section class="py-6 bg-black">
        <div class="my-container mx-auto">
            <h2 class="text-2xl text-white font-bold mb-8">{{ title }}</h2>
            <UCarousel :items="movies" loop :show-dots="false" :arrows="false" :auto-scroll="false" :scroll-snap="true"
                :ui="{ item: 'basis-2/3 sm:basis-1/3 md:basis-1/3'  }" class="w-full" v-slot="{ item }">
                <div class="relative group">
                    <span
                        class="absolute left-2 top-2 z-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg px-2 py-1 text-white font-bold text-sm select-none"
                        aria-label="Phim mới"
                    >
                        MỚI
                    </span>
                    <div class="aspect-[16/9] w-full rounded-lg overflow-hidden">
                        <img :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path || item.poster_path}`" :alt="item.title"
                            class="w-full h-full object-cover" />
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