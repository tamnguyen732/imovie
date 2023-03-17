import { AxiosPromise, AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';

export enum Category {
  MOVIE = 'movie',
  TV = 'tv'
}

export enum MovieType {
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  NOW_PLAYING = 'now_playing',
  UPCOMING = 'upcoming'
}

export enum TvType {
  POPULAR = 'popular',
  TOP_RATED = 'top_rated',
  ON_THE_AIR = 'on_the_air'
}

type Params = AxiosRequestConfig['params'];

interface TmdbApi {
  getMoviesList(type: MovieType, params?: Params): AxiosPromise;
  getTvList(type: TvType, params?: Params): AxiosPromise;
  getVideos(cate: Category, id: number): AxiosPromise;
  search(cate: Category, params?: Params): AxiosPromise;
  detail(cate: Category, id: string, params?: Params): AxiosPromise;
  credits(cate: Category, id: string): AxiosPromise;
  similar(cate: Category, id: string): AxiosPromise;
}

const tmdbApi: TmdbApi = {
  getMoviesList: (type, params) => {
    const url = `movie/${type}`;
    return axiosClient.get(url, { params });
  },
  getTvList: (type, params) => {
    const url = `tv/${type}`;
    return axiosClient.get(url, { params });
  },
  getVideos: (cate, id) => {
    const url = `${cate}/${id}/videos`;
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = `search/${cate}`;
    return axiosClient.get(url, { params });
  },
  detail: (cate, id, params) => {
    const url = `${cate}/${id}`;
    return axiosClient.get(url, { params });
  },
  credits: (cate, id) => {
    const url = `${cate}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = `${cate}/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  }
};

export default tmdbApi;
