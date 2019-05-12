import axios from "axios";
class Network {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000/api"
    });
    this.getSearchResultForText = this.getSearchResultForText.bind(this);
  }
  async getSearchResultForText(text) {
    let seachMoviesData = await this.axiosInstance.get(`/search/${text}`);
    if (seachMoviesData && seachMoviesData.data) {
      return seachMoviesData.data;
    }
  }
  async getMovieWithId(id) {
    let seachMoviesData = await this.axiosInstance.get(`/movies/${id}`);
    console.log(seachMoviesData);
    if (seachMoviesData && seachMoviesData.data) {
      return seachMoviesData.data;
    }
  }
  async getMovieFromMovieName(name){
    let searchData = await this.axiosInstance.get(`/movies/name/?text=${name}`)
    console.log(searchData)
    if(searchData && searchData.data){
      return searchData.data
    }
  }

  async addMovieToWatchList(movieID, uid) {
    let watchListedMovieData = await this.axiosInstance.post("/movies/watchlist/", {
      movieid: movieID,
      uid: uid
    });
    if (watchListedMovieData && watchListedMovieData.data) {
      return watchListedMovieData.data;
    }
  }
  async removeMovieFromWatchlist(uid, movieID) {
    let watchListedMovieData = await this.axiosInstance.put("/movies/watchlist/", {
      movieid: movieID,
      uid: uid
    });
    if (watchListedMovieData && watchListedMovieData.data) {
      return watchListedMovieData.data;
    }
  }
  
}



export default Network;