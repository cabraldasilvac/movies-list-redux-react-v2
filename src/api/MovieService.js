const API_KEY = "d416af5d4faee64e25ab001d87aab5c3";
const BASE_URL = "https://api.themoviedb.org/3/";
// Função auxiliar para montar a URL utilizada na requisição
const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;
export class MoviesService {
  static getMovies() {
    // A função withBaseUrl retorna uma string
    // similar a https://api.themoviedb.org/3/movie/popular?api_key=123abc
    return axios(withBaseUrl("movie/popular"));
  }
  static getMovieDetail(id) {
    return axios(withBaseUrl(`movie/${id}`));
  }
}