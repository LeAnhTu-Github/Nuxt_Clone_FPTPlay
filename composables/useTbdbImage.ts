export const useTmdbImage = () => {
  const config = useRuntimeConfig()
  
  const getImageUrl = (path: string, size: 'original' | 'w500' | 'w780' = 'original') => {
    if (!path) return ''
    return `${config.public.tmdbImageBaseUrl}/${size}${path}`
  }

  return {
    getImageUrl
  }
}
