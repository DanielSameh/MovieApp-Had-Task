import axios from 'axios';

const API_KEY = '6b4357c41d9c606e4d7ebe2f4a8850ea';
const BASE_URL = 'https://api.themoviedb.org/3';

const movieClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const fetchMovies = async (page: number = 1) => {
  const response = await movieClient.get('/discover/movie', {
    params: { sort_by: 'popularity.desc', page },
  });
  return response.data;
};

export const fetchGenres = async () => {
  const response = await movieClient.get('/genre/movie/list');
  return response.data;
};
