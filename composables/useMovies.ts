import  type { MovieResponse, Movie } from "~/types/Movie"
export const useMovies = () => {
  const config = useRuntimeConfig()

  const fetchPopularMovies = async () => {
    return await useAsyncData<MovieResponse>(
      'popular-movies',
      () => $fetch(`${config.public.tmdbApiBaseUrl}/movie/popular?page=1&api_key=${config.public.tmdbApiKey}`),
      {
        server: true,
        lazy: false,
        transform: (response) => response as MovieResponse,
      }
    )
  }

  const fetchMovieById = async (id: string) => {
    return await useAsyncData<Movie>(
      `movie-${id}`,
      () => $fetch(`${config.public.tmdbApiBaseUrl}/movie/${id}?api_key=${config.public.tmdbApiKey}`),
      {
        server: true,
        lazy: false,
        transform: (response) => response as Movie,
      }
    )
  }

  return {
    fetchPopularMovies,
    fetchMovieById
  }
}