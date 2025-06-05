import { ref } from 'vue'
import type { Movie, MovieResponse } from '~/types/Movie'
import { useRuntimeConfig } from '#imports'

export const useMovies = () => {
  const config = useRuntimeConfig()
  const movie = ref<Movie | null>(null)
  const movies = ref<MovieResponse>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  })
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

  const fetchPopularMovies = async () => {
    loading.value = true
    try {
      await delay(2000)
      const response = await fetch(`${config.public.tmdbApiBaseUrl}/movie/popular?page=1&api_key=${config.public.tmdbApiKey}`)
      const data = await response.json()
      movies.value = data as MovieResponse
    } catch (e: any) {
      error.value = e
    } finally {
      loading.value = false;
    }
  }

  const fetchMovieById = async (id: string) => {
    loading.value = true
    try {
      await delay(2000)
      const response = await fetch(`${config.public.tmdbApiBaseUrl}/movie/${id}?api_key=${config.public.tmdbApiKey}`)
      const data = await response.json()
      movie.value = data as Movie
    } catch (e: any) {
      error.value = e
    } finally {
      loading.value = false
    }
  }
  return {
    movies,
    movie,
    loading,
    error,
    fetchPopularMovies,
    fetchMovieById
  }
}