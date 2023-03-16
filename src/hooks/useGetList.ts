import { useEffect, useState } from 'react';
import tmdbApi, { Category, MovieType, TvType } from '~/api/tmdbClient';
import { TmdbMovie } from '~/utils/types/movieTypes';

type Arg<T extends MovieType | TvType> = {
  cate: Category;
  type: T;
};

const useGetLists = <T extends MovieType | TvType>({ cate, type }: Arg<T>) => {
  const [lists, setLists] = useState<TmdbMovie[]>();
  let params = {};
  useEffect(() => {
    const fetchLists = async () => {
      let response;
      try {
        if (cate === Category.MOVIE) {
          response = await tmdbApi.getMoviesList(type as MovieType, { params });
        } else if (cate === Category.TV) {
          response = await tmdbApi.getTvList(type as TvType, { params });
        }

        // @ts-ignore
        const results = response.results as TmdbMovie[];
        if (results) setLists(results);
      } catch (error) {
        console.log(error);
        return [];
      }
    };
    fetchLists();
  }, []);

  return { lists };
};

export default useGetLists;
