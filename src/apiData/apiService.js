import axios from "axios";

const BASE_KEY = process.env.REACT_APP_BASE_KEY
const BASE_URL = process.env.REACT_APP_BASE_URL


export async function getCategories() {
    const axiosResponse = await axios.get(`${BASE_URL}/genre/movie/list?${BASE_KEY}`);
    const { data } = axiosResponse;
    console.log(data)
    return data;
  }
  
  export async function getDetailMovie(idm) {
    const axiosResponse = await axios.get(`${BASE_URL}/movie/${idm}?${BASE_KEY}`);
    const { data } = axiosResponse;
    return data;
  }
  
  export async function getVideoTrailer(idm) {
    const axiosResponse = await axios.get(`${BASE_URL}/movie/${idm}/videos?${BASE_KEY}`);
    const { data } = axiosResponse;
    return data;
  }
  
  export async function getSimilarMovies(idm) {
    const axiosResponse = await axios.get(`${BASE_URL}/movie/${idm}/similar?${BASE_KEY}`);
    const { data } = axiosResponse;
    return data;
  }
  
  export async function getCategoryMovies(idc, page = 1) {
    const axiosResponse = await axios.get(`${BASE_URL}/discover/movie?${BASE_KEY}&with_genres=${idc}&page=${page}`);
    const { data } = axiosResponse;
    return data;
  }
  
  export async function getTrendingMovies(param, page = 1) {
    const axiosResponse = await axios.get(`${BASE_URL}/trending/movie/${param}?${BASE_KEY}&page=${page}`);
    const { data } = axiosResponse;
    return data;
  }
  
  export async function getMovies(param, page = 1) {
    const axiosResponse = await axios.get(`${BASE_URL}/movie/${param}?${BASE_KEY}&page=${page}`);
    const { data } = axiosResponse;
    return data;
  }
  
  export async function getResultMovies(query) {
    const axiosResponse = await axios.get(`${BASE_URL}/search/movie?${BASE_KEY}&query=${query}`);
    const { data } = axiosResponse;
    return data;
  }
  
  export async function getCredits(idm) {
    const axiosResponse = await axios.get(`${BASE_URL}/movie/${idm}/credits?${BASE_KEY}`);
    const { data } = axiosResponse;
    return data;
  }