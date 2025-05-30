<template>
  <div v-if="!loading && movies.length">
    <Banner :movies="bannerMovies" />
    <FeaturedMovies :movies="movies" title="Cày phim hay mỗi ngày" />
    <NewMovies :movies="newMovies" title="Mới ra mắt" />
    <Category />
    <Ranking :movies="rankingMovies" />
    <UpCommingMovies :movies="newMovies" title="Phim sắp ra mắt" />
  </div>
</template>

<script setup>
import { useMovies } from '~/composables/useMovies'
import Banner from '~/components/home/Banner.vue'
import FeaturedMovies from '~/components/home/FeaturedMovies.vue'
import NewMovies from '~/components/home/NewMovies.vue'
import Category from '~/components/home/Category.vue'
import Ranking from '~/components/home/Ranking.vue'
import UpCommingMovies from '~/components/home/UpCommingMovies.vue'
const { movies, loading, fetchPopularMovies } = useMovies()

onMounted(async () => {
  await fetchPopularMovies()
})

const bannerMovies = computed(() => movies.value.slice(0, 4))
const newMovies = computed(() => movies.value.sort((a, b) => new Date(b.release_date) - new Date(a.release_date)).slice(0, 10))
const rankingMovies = computed(() => movies.value.sort((a, b) => b.vote_average - a.vote_average).slice(0, 10))
</script>