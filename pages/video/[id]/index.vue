<script setup lang="ts">
import NewMovies from '~/components/home/NewMovies.vue'

definePageMeta({
    ssr: true,
})
const route = useRoute()
const { fetchMovieById, fetchPopularMovies } = useMovies()

const movieGenres = ref<string[]>([])

const { data: movieData, error: movieError } = await fetchMovieById(route.params.id as string)
const { data: popularMoviesData, pending: loading } = await fetchPopularMovies()

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
const genres = computed(() => {
    return movieData.value?.genres?.map(genre => genreMap[genre.id as keyof typeof genreMap]) || []
})
watch(movieData, (newMovie) => {
    if (newMovie) {
        movieGenres.value = newMovie.genres?.map(genre => genreMap[genre.id as keyof typeof genreMap]) || []
    }
}, { immediate: true })
</script>

<template>
    <div class=" my-container mx-auto min-h-screen bg-black text-white relative overflow-hidden top-0">
        <div v-if="loading" class="my-container mx-auto">
            <div class="relative w-full aspect-video bg-gray-800 rounded-b-2xl overflow-hidden">
                <USkeleton class="w-full h-full" />
            </div>

            <div class="py-6 bg-black grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2 space-y-4">
                    <div class="space-y-2">
                        <USkeleton class="h-6 w-1/2" />
                    </div>
                    <div class="flex items-center gap-2">
                        <USkeleton class="h-8 w-32" />
                        <USkeleton class="h-8 w-32" />
                    </div>

                    <div class="flex flex-wrap items-center gap-2">
                        <USkeleton class="h-5 w-16" />
                        <USkeleton class="h-5 w-16" />
                        <USkeleton class="h-5 w-16" />
                        <USkeleton class="h-5 w-16" />
                    </div>

                    <div class="space-y-2 ">
                        <USkeleton class="h-8 w-1/2" />
                    </div>
                    <div class="space-y-2 ">
                        <USkeleton class="h-12 w-3/4" />
                    </div>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center gap-6">
                        <USkeleton class="h-10 w-32" />
                        <USkeleton class="h-10 w-32" />
                    </div>

                    <div class="space-y-3">
                        <USkeleton class="h-5 w-full" />
                        <USkeleton class="h-5 w-full" />
                        <USkeleton class="h-5 w-3/4" />
                    </div>
                </div>
            </div>
        </div>

        <div v-else-if="movieError" class="flex items-center justify-center min-h-screen">
            <div class="text-red-500 text-xl">{{ movieError }}</div>
        </div>

        <div v-else-if="movieData" class="my-container mx-auto">
            <div class="relative w-full aspect-video bg-black rounded-b-2xl overflow-hidden">
                <iframe src="https://vip.opstream14.com/share/c8b5850476913c169ecbb4d02bbe32a5" frameborder="0"
                    allow="autoplay; encrypted-media" allowfullscreen class="w-full h-full"
                    title="Video player"></iframe>
                <div
                    class="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-black/30 to-transparent">
                </div>
            </div>

            <div class=" py-6 bg-black grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="md:col-span-2">
                    <h1 class="text-xl md:text-2xl font-bold mb-2">{{ movieData.title }}</h1>
                    <div class="flex items-center gap-2 mb-4">
                        <div class="flex items-center">
                            <span
                                class="bg-orange-500 text-white font-bold px-3 py-1 rounded-lg flex text-sm items-center">
                                <svg class="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                </svg>
                                {{ movieData.vote_average.toFixed(1) }}
                                <span class="ml-2 text-gray-200 font-normal text-base">({{ movieData.vote_count }})</span>
                            </span>
                            <span class="ml-4 text-gray-500">
                                <template v-for="i in 5" :key="i">
                                    <svg class="w-5 h-5 inline" fill="currentColor"
                                        :class="i <= Math.round(movieData.vote_average / 2) ? 'text-gray-300' : 'text-gray-700'"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                                    </svg>
                                </template>
                            </span>
                        </div>
                    </div>
                    <div class="flex flex-wrap items-center gap-2 text-gray-400 mb-2 text-base">
                        <span>{{ movieData.release_date?.slice(0, 4) }}</span>
                        <span>•</span>
                        <span>T13</span>
                        <span>•</span>
                        <span>40/40 tập</span>
                        <span>•</span>
                        <span>
                            {{ movieData.original_language === 'zh' ? 'Hồng Kông' : movieData.original_language?.toUpperCase()
                                || 'Không rõ' }}
                        </span>
                    </div>
                    <div class="mb-2 text-gray-300">Nội dung tâm lý, xã hội</div>
                    <div class="text-gray-200 text-sm xl:text-base lg:text-lg leading-relaxed">
                        {{ movieData.overview || 'Chưa có nội dung.' }}
                    </div>
                </div>
                <div class="space-y-4">
                    <div class="flex items-center gap-6 mb-4">
                        <button class="flex items-center gap-2 text-white hover:text-orange-500 focus:outline-none"
                            aria-label="Theo dõi">
                            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor"
                                stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
                            </svg>
                            <span class="text-sm">Theo dõi</span>
                        </button>
                        <button
                            class="min-w-[100px] flex items-center gap-2 text-white hover:text-orange-500 focus:outline-none text-sm"
                            aria-label="Chia sẻ">
                            <svg viewBox="0 0 32 32" width="25" height="25" xmlns="http://www.w3.org/2000/svg"
                                class="scale-x-[-1]" fill="none" transform="rotate(0)" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5.608 12.526l7.04-6.454C13.931 4.896 16 5.806 16 7.546V11c13 0 11 16 11 16s-4-10-11-10v3.453c0 1.74-2.069 2.65-3.351 1.475l-7.04-6.454a2 2 0 010-2.948z">
                                    </path>
                                </g>
                            </svg>
                            <span class="text-sm whitespace-nowrap">Chia sẻ</span>
                        </button>
                    </div>
                    <div class="text-gray-300 text-sm">
                        <div class="mb-2"><span class="font-semibold">Diễn viên:</span> Lý Tư Kỳ, Hạ Vũ, Huỳnh Tông
                            Trạch</div>
                        <div class="mb-2"><span class="font-semibold">Đạo diễn:</span> Trần Chí Giang</div>
                        <div class="mb-2">
                            <span class="font-semibold">Danh mục: </span>
                            <span v-for="(genre, idx) in movieGenres" :key="idx">
                                {{ genre }}<span v-if="idx < movieGenres.length - 1">, </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <NewMovies :loading="loading" :movies="popularMoviesData?.results || []" title="Nội dung liên quan" />

    </div>
</template>

<style scoped></style>