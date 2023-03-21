import { useCallback, useEffect, useState } from 'react';
import tmdbApi, { Category } from '~/api/tmdbClient';
import { CastMember, TmdbMovie, Video } from '~/utils/types/movieTypes';

export enum dataType {
  SIMILAR = 'similar',
  VIDEOS = 'videos',
  DETAIL = 'detail',
  CREDIT = 'credit'
}

export type Args<T extends Category> = {
  cate: T;
  id: string | number | undefined;
  params?: Object;
  type?: dataType;
};
const useGetMoviesById = <T extends Category>({ cate, id, params, type }: Args<T>) => {
  const [data, setData] = useState<TmdbMovie | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [video, setVideo] = useState<Video[]>([]);
  const [lists, setLists] = useState<TmdbMovie[]>([]);
  const fetchMovie = useCallback(async () => {
    setLoading(true);
    let response;
    try {
      if (type === 'similar') {
        response = await tmdbApi.similar(cate, id as string);
        // @ts-ignore
        const newMovies = response.results;
        setLists(newMovies);
      }
      if (type === 'videos') {
        response = await tmdbApi.getVideos(cate, id as number);
        // @ts-ignore
        const videos = response.results;
        setVideo(videos);
      }
      if (type === 'detail') {
        response = await tmdbApi.detail(cate, id as string, params);
        // @ts-ignore
        setData(response);
      }
      if (type === 'credit') {
        response = await tmdbApi.credits(cate, id as string);
        // @ts-ignore
        const cast = response.cast;
        setCast(cast);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [id, cate]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return { lists, data, cast, video, loading };
};

export default useGetMoviesById;
