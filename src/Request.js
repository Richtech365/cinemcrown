const API_KEY = "5a514c88a1433b608f1435b9001c2f01";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key${API_KEY}&with_genres=99`,
};
export default requests;
// }
// https://api.themoviedb.org/3/discover/movie?api_key${5a514c88a1433b608f1435b9001c2f01}&with_genres=10749
