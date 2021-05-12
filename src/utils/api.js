const API_KEY = "af0482d0c3896ead8928d6a153ca143d";

export const getTopRated = `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
export const getPopular = `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
export const getUpComing = `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
export const getLatest = `/movie/latest?api_key=${API_KEY}&language=en-US`;
export const getHorror = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`;
export const getComedy = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`;
export const getAction = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`;
export const getDocumentaries = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=99`;
export const getRomance = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`;
export const getAnimation = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16`;
export const getAdventure = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`;

export const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
