import React, { useEffect, useState } from 'react';
import CardList from '../CardLists';
import tmdbApi, { movieType } from '~/api/tmdbClient';
import { TmdbMovie } from '~/utils/types/movieTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from '../CardLists/Card';
const TopRatedMovies = () => {
  const [movieList, setMoviesList] = useState<TmdbMovie[]>([]);
  useEffect(() => {
    const getMovieList = async () => {
      const params = {};
      try {
        const response = await tmdbApi.getMoviesList(movieType.top_rated, { params });
        // @ts-ignore
        const results = response.results;
        if (results) {
          setMoviesList(results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getMovieList();
  }, []);
  return (
    <div className='pt-10 w-full'>
      <h2 className='font-bold pl-10 text-3xl'>Top Rated Movies</h2>
      <CardList
        lists={movieList}
        render={(list) => {
          return (
            <SwiperSlide>
              <Card list={list} />
            </SwiperSlide>
          );
        }}
      />
    </div>
  );
};

export default TopRatedMovies;
