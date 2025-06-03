import { ref } from 'vue'

export const useMovies = () => {
  const movies = ref([])
  const loading = ref(false)
  const error = ref<Error | null>(null)

  const fetchPopularMovies = async () => {
    loading.value = true
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1&api_key=c3c683516a9277e38dd654ff1a858d0d')
      const data = await response.json()
      movies.value = data.results
    } catch (e: any) {
      error.value = e
    } finally {
      loading.value = false
    }
  }
  
  return {
    movies,
    loading,
    error,
    fetchPopularMovies
  }
}