const API_KEY = "af0482d0c3896ead8928d6a153ca143d";

export const getHorror = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=27`;
export const getComedy = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=35`;
export const getAction = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=28`;
export const getThriller = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=53`;
export const getRomance = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`;
export const getAnimation = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=16`;
export const getAdventure = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`;
export const getMusic = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=10402`;
export const getScienceFiction = `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=878`;
export const getTrending = `/trending/all/day?api_key=${API_KEY}`;

export const imageBaseUrl = "https://image.tmdb.org/t/p/original/";
