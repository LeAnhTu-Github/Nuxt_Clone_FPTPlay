<script setup lang="ts">
import { ref } from 'vue'
import { useTmdbImage } from '~/composables/useTbdbImage'
import type { Movie } from '~/types/Movie'
const { getImageUrl } = useTmdbImage()

interface BannerProps {
    movies: Movie[]
    loading?: boolean
}

const props = withDefaults(defineProps<BannerProps>(), {
    loading: false
})
const carouselRef = ref(null)
const delay = ref(3000)
const router = useRouter()

const handleClick = (id: number) => {
    router.push(`/video/${id}`)
}
const genreMap = {
    28: "Hành động",
    12: "Phiêu lưu",
    14: "Kỳ ảo",
    16: "Hoạt hình",
    18: "Chính kịch",
    27: "Kinh dị",
    35: "Hài",
    53: "Giật gân",
    80: "Tội phạm",
    878: "Khoa học viễn tưởng",
    9648: "Bí ẩn",
    10751: "Gia đình",
    10752: "Chiến tranh"
};
</script>

<template>
    <UCarousel v-if="!loading" ref="carouselRef" :items="props.movies" :arrows="false" :autoplay="{ delay }" :show-dots="true"
        class="w-full max-w-full mx-auto relative custom-carousel z-10" :ui="{
            arrows: 'absolute inset-0 flex items-center justify-between px-4'
        }" v-slot="{ item, index }">

        <section class="relative w-full rounded-xl overflow-hidden shadow-lg h-[220px] xs:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px] z-10">
            <NuxtImg :src="getImageUrl(item.backdrop_path, 'original')" :alt="item.title"
                class="absolute inset-0 w-full h-full object-cover max-w-full" draggable="false" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

            <div class="absolute bottom-0 left-0 right-0 flex items-end px-4 sm:px-8 md:px-12 lg:px-16 pb-4 sm:pb-8 md:pb-10 lg:pb-12 z-10">
                <div class="max-w-xl text-white drop-shadow-lg">
                    <div class="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-2">
                        <span class="text-lg sm:text-2xl font-bold tracking-wide">{{ item.title }}</span>
                    </div>
                    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm mb-2 sm:mb-6 opacity-80">
                        <span v-if="item.release_date">{{ item.release_date.slice(0, 4) }}</span>
                        <span v-if="item.vote_count">• {{ item.vote_count }} lượt bình chọn</span>
                        <span v-if="item.vote_average">• ★ {{ item.vote_average }}</span>
                        <span v-if="item.original_language">• {{ item.original_language.toUpperCase()
                        }}</span>
                        <span v-if="item.genre_ids?.length">
                            •
                            <span v-for="(id, idx) in item.genre_ids" :key="id">
                                {{ genreMap[id as keyof typeof genreMap] }}<span v-if="idx < item.genre_ids.length - 1">, </span>
                            </span>
                        </span>
                    </div>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <button
                            @click="handleClick(item.id)"
                            class="bg-[#fe592a] hover:bg-[#ff4400] text-white font-bold px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#fe592a] transition text-sm sm:text-base"
                            aria-label="Xem ngay" tabindex="0">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="white" stroke="white" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v18l15-9L5 3z" />
                            </svg>
                            Xem ngay
                        </button>
                        <button
                            class="w-9 h-9 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#232323]/80 hover:bg-[#232323] transition-colors duration-150"
                            aria-label="Yêu thích" tabindex="0">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
                            </svg>
                        </button>
                        <button
                            class="w-9 h-9 sm:w-12 sm:h-12 p-2 flex items-center justify-center rounded-full bg-[#232323]/80 hover:bg-[#232323] transition-colors duration-0"
                            aria-label="Chia sẻ" tabindex="0">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="scale-x-[-1]" fill="none" transform="rotate(0)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.608 12.526l7.04-6.454C13.931 4.896 16 5.806 16 7.546V11c13 0 11 16 11 16s-4-10-11-10v3.453c0 1.74-2.069 2.65-3.351 1.475l-7.04-6.454a2 2 0 010-2.948z"></path> </g></svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </UCarousel>

    <div v-else class="w-full max-w-full mx-auto relative">
        <section class="relative w-full rounded-xl overflow-hidden shadow-lg h-[220px] xs:h-[280px] sm:h-[350px] md:h-[450px] lg:h-[600px] z-10">
            <USkeleton class="absolute inset-0 w-full h-full" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

            <div class="absolute bottom-0 left-0 right-0 flex items-end px-4 sm:px-8 md:px-12 lg:px-16 pb-4 sm:pb-8 md:pb-10 lg:pb-12 z-10">
                <div class="max-w-xl">
                    <div class="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-2">
                        <USkeleton class="h-8 w-64" />
                    </div>
                    <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 sm:mb-6">
                        <USkeleton class="h-4 w-16" />
                        <USkeleton class="h-4 w-24" />
                        <USkeleton class="h-4 w-20" />
                        <USkeleton class="h-4 w-32" />
                    </div>
                    <div class="flex items-center gap-2 sm:gap-4">
                        <USkeleton class="h-10 w-32" />
                        <USkeleton class="h-10 w-10 rounded-full" />
                        <USkeleton class="h-10 w-10 rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
:deep(.custom-prev),
:deep(.custom-next) {
    background-color: rgba(255, 0, 0, 0.7);
    color: white;
    padding: 12px;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

:deep(.custom-prev:hover),
:deep(.custom-next:hover) {
    background-color: rgba(255, 0, 0, 0.9);
}
</style>