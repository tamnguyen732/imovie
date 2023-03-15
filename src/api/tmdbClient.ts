import { AxiosPromise, AxiosRequestConfig } from 'axios';
import axiosClient from './axiosClient';

export const category: Record<string, string> = {
  movie: 'movie',
  tv: 'tv'
};

export const movieType: Record<string, string> = {
  upcoming: 'upcoming',
  popular: 'popular',
  top_rated: 'top_rated'
};

export const tvType: Record<string, string> = {
  popular: 'popular',
  top_rated: 'top_rated',
  on_the_air: 'on_the_air'
};

type Category = keyof typeof category;
type MovieType = keyof typeof movieType;
type TvType = keyof typeof tvType;

type Params = AxiosRequestConfig['params'];

interface TmdbApi {
  getMoviesList(type: MovieType, params?: Params): AxiosPromise;
  getTvList(type: TvType, params?: Params): AxiosPromise;
  getVideos(cate: Category, id: string): AxiosPromise;
  search(cate: Category, params?: Params): AxiosPromise;
  detail(cate: Category, id: string, params?: Params): AxiosPromise;
  credits(cate: Category, id: string): AxiosPromise;
  similar(cate: Category, id: string): AxiosPromise;
}

const tmdbApi: TmdbApi = {
  getMoviesList: (type, params) => {
    const url = `movie/${movieType[type]}`;
    return axiosClient.get(url, params);
  },
  getTvList: (type, params) => {
    const url = `tv/${movieType[type]}`;
    return axiosClient.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = `${category[cate]}/${id}/videos'`;
    return axiosClient.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = ` search/ ${category[cate]}`;
    return axiosClient.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = `${category[cate]}/${id}`;
    return axiosClient.get(url, params);
  },
  credits: (cate, id) => {
    const url = `${category[cate]}/${id}/credits`;
    return axiosClient.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = ` ${category[cate]}/${id}/similar`;
    return axiosClient.get(url, { params: {} });
  }
};

export default tmdbApi;
