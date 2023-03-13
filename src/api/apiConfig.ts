const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '97cfcf56efda1a3bf1923b8793630b7b',
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;
