import axios from 'axios';
import { UnsplashResponse } from './unsplash-api.types';
const API_KEY = 'eDuq9bT5mQFTszpYqjZmkZ9ic0bXVxQzr9FXhtUCl0o';
const BASE_URL = 'https://api.unsplash.com/';

const unsplashAPI = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

async function fetchPhotoSearch(
  query: string,
  page: number
): Promise<UnsplashResponse> {
  const response = await unsplashAPI.get<UnsplashResponse>('search/photos/', {
    params: { query, page, per_page: 20 },
  });

  return response.data;
}

export default fetchPhotoSearch;
