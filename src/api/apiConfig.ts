const apiConfig = {
  baseUrl: import.meta.env.VITE_TMDB_URL,
  apiKey: import.meta.env.VITE_TMDB_KEY,
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;
