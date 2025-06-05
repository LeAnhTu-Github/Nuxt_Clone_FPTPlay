<script setup lang="ts">
import { useMovies } from '~/composables/useMovies'
import type { Movie } from '~/types/Movie'
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

const bannerMovies = computed<Movie[]>(() => movies.value.results.slice(0, 4))

const newMovies = computed<Movie[]>(() =>
  [...movies.value.results]
    .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
    .slice(0, 10)
)

const rankingMovies = computed<Movie[]>(() =>
  [...movies.value.results]
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 10)
)
</script>

<template>
  <div>
    <Banner :movies="bannerMovies" :loading="loading" />
    <!-- <div v-if="movies.results.length"> -->
      <FeaturedMovies :movies="movies.results" title="Cày phim hay mỗi ngày" :loading="loading" />
      <NewMovies :movies="newMovies" title="Mới ra mắt" :loading="loading" />
      <Category :loading="loading" />
      <Ranking :movies="rankingMovies" :loading="loading" />
      <UpCommingMovies :movies="newMovies" title="Phim sắp ra mắt" :loading="loading" />
    <!-- </div> -->
  </div>
</template>
