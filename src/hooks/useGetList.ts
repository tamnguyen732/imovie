import { useEffect, useState } from 'react';
import tmdbApi, { Category, MovieType, TvType } from '~/api/tmdbClient';
import { TmdbMovie } from '~/utils/types/movieTypes';
type Arg<T extends MovieType | TvType> = {
  cate: Category;
  type: T;
  query?: string;
  params?: Category;
};
type ReturnType = {
  lists: TmdbMovie[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  searchMovies: TmdbMovie[];
  setSearchMovies: React.Dispatch<React.SetStateAction<TmdbMovie[]>>;
  setLists: React.Dispatch<React.SetStateAction<TmdbMovie[]>>;
  loading: boolean;
};

const useGetLists = <T extends MovieType | TvType>({
  cate,
  type,
  query,
  params
}: Arg<T>): ReturnType => {
  const [lists, setLists] = useState<TmdbMovie[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [searchMovies, setSearchMovies] = useState<TmdbMovie[]>([]);
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    const fetchLists = async () => {
      let response;
      try {
        if (query) {
          setLoading(true);
          response = await tmdbApi.search(params as Category, { query, page });
          // @ts-ignore
          const newSearchMovies = response.results;
          setSearchMovies((searchMovies) => [...searchMovies, ...newSearchMovies]);
          setLoading(false);
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
  }, [page, query, params, cate, type]);

  return { lists, setPage, searchMovies, setSearchMovies, setLists, loading };
};

export default useGetLists;
