import { useEffect, useState } from 'react';
import tmdbApi, { Category, MovieType, TvType } from '~/api/tmdbClient';
import { TmdbMovie } from '~/utils/types/movieTypes';
type Arg<T extends MovieType | TvType> = {
  cate: Category;
  type: T;
  query?: string;
  params?: Category;
};

const useGetLists = <T extends MovieType | TvType>({ cate, type, query, params }: Arg<T>) => {
  const [lists, setLists] = useState<TmdbMovie[]>([]);
  const [searchMovies, setSearchMovies] = useState<TmdbMovie[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchLists = async () => {
      let response;
      try {
        if (query) {
          response = await tmdbApi.search(params as Category, { query, page });
          // @ts-ignore
          const newSearchMovies = response.results;
          setSearchMovies((searchMovies) => [...searchMovies, ...newSearchMovies]);
        } else {
          if (cate === Category.MOVIE) {
            response = await tmdbApi.getMoviesList(type as MovieType, { page });
          } else if (cate === Category.TV) {
            response = await tmdbApi.getTvList(type as TvType, { page });
          }
          // @ts-ignore
          const newMovies = response.results;
          setLists((lists) => [...lists, ...newMovies]);
        }
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchLists();
  }, [page, query, params]);

  return { lists, setPage, searchMovies, setSearchMovies };
};

export default useGetLists;
