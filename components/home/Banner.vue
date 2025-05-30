<template>
    <UCarousel ref="carouselRef" :items="movies" :arrows="false" :autoplay="{ interval: 3000 }" :show-dots="true"
        class="w-full max-w-full mx-auto relative custom-carousel" :ui="{
            arrows: {
                wrapper: 'absolute inset-0 flex items-center justify-between px-4',
                prev: 'custom-prev',
                next: 'custom-next'
            }
        }" v-slot="{ item, index }">

        <section class="relative h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
            <img :src="`https://image.tmdb.org/t/p/original${item.backdrop_path}`" :alt="item.title"
                class="absolute inset-0 w-full h-full object-cover max-w-full" draggable="false" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

            <div class="absolute bottom-0 left-0 right-0 flex items-end px-16 pb-12 z-10">
                <div class="max-w-xl text-white drop-shadow-lg">
                    <div class="flex items-center gap-4 mb-2">
                        <span class="text-2xl font-bold tracking-wide">{{ item.title }}</span>
                    </div>
                    <div class="flex items-center gap-3 text-sm mb-6 opacity-80">
                        <span v-if="item.release_date">{{ item.release_date.slice(0, 4) }}</span>
                        <span v-if="item.vote_count">• {{ item.vote_count }} lượt bình chọn</span>
                        <span v-if="item.vote_average">• ★ {{ item.vote_average }}</span>
                        <span v-if="item.original_language">• {{ item.original_language.toUpperCase()
                        }}</span>
                        <span v-if="item.genre_ids?.length">
                            •
                            <span v-for="(id, idx) in item.genre_ids" :key="id">
                                {{ genreMap[id] }}<span v-if="idx < item.genre_ids.length - 1">, </span>
                            </span>
                        </span>
                    </div>
                    <div class="flex items-center gap-4">
                        <button
                            class="bg-[#fe592a] hover:bg-[#ff4400] text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#fe592a] transition"
                            aria-label="Xem ngay" tabindex="0">
                            <svg class="w-6 h-6" fill="white" stroke="white" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5 3v18l15-9L5 3z" />
                            </svg>
                            Xem ngay
                        </button>
                        <button
                            class="w-12 h-12 flex items-center justify-center rounded-full bg-[#232323]/80 hover:bg-[#232323] transition-colors duration-150"
                            aria-label="Yêu thích" tabindex="0">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
                            </svg>
                        </button>
                        <button
                            class="w-12 h-12 flex items-center justify-center rounded-full bg-[#232323]/80 hover:bg-[#232323] transition-colors duration-150"
                            aria-label="Chia sẻ" tabindex="0">
                            <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img"
                                aria-label="reply" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                class="bi-reply icon mb-1 b-icon bi">
                                <g transform="translate(8 8) scale(2 2) translate(-8 -8)">
                                    <path
                                        d="M6.598 5.013a.144.144 0 0 1 .202.134V6.3a.5.5 0 0 0 .5.5c.667 0 2.013.005 3.3.822.984.624 1.99 1.76 2.595 3.876-1.02-.983-2.185-1.516-3.205-1.799a8.74 8.74 0 0 0-1.921-.306 7.404 7.404 0 0 0-.798.008h-.013l-.005.001h-.001L7.3 9.9l-.05-.498a.5.5 0 0 0-.45.498v1.153c0 .108-.11.176-.202.134L2.614 8.254a.503.503 0 0 0-.042-.028.147.147 0 0 1 0-.252.499.499 0 0 0 .042-.028l3.984-2.933zM7.8 10.386c.068 0 .143.003.223.006.434.02 1.034.086 1.7.271 1.326.368 2.896 1.202 3.94 3.08a.5.5 0 0 0 .933-.305c-.464-3.71-1.886-5.662-3.46-6.66-1.245-.79-2.527-.942-3.336-.971v-.66a1.144 1.144 0 0 0-1.767-.96l-3.994 2.94a1.147 1.147 0 0 0 0 1.946l3.994 2.94a1.144 1.144 0 0 0 1.767-.96v-.667z">
                                    </path>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    </UCarousel>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    movies: {
        type: Array,
        required: true
    }
})

const carouselRef = ref(null)

const handlePrev = () => {
    carouselRef.value?.prev?.()
}
const handleNext = () => {
    carouselRef.value?.next?.()
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