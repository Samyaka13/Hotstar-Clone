import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "b784769024a34b273694c30224b1c03f";
const movieByGenreUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=b784769024a34b273694c30224b1c03f";
const getTrendingVideos = () => {
  return axios.get(`${movieBaseUrl + "/trending/all/day?api_key=" + api_key}`);
};
const getMovieByGenreId = (id) => {
    return axios.get(`${movieByGenreUrl+"&with_genres"+id}`)
};

export default {
  getTrendingVideos,
  getMovieByGenreId
};
