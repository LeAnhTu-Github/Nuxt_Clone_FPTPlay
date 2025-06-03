import { ref } from 'vue'
import type { Movie, MovieResponse } from '~/types/Movie'

export const useMovies = () => {
  const movie = ref<Movie | null>(null)
  const movies = ref<MovieResponse>({
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0
  })
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchPopularMovies = async () => {
    loading.value = true
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1&api_key=c3c683516a9277e38dd654ff1a858d0d')
      const data = await response.json()
      movies.value = data as MovieResponse
    } catch (e: any) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  const fetchMovieById = async (id: string) => {
    loading.value = true
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c3c683516a9277e38dd654ff1a858d0d`)
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