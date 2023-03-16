import React from 'react';
import CardList from '../CardLists';
import { Category, MovieType, TvType } from '~/api/tmdbClient';

import { SwiperSlide } from 'swiper/react';
import Card from '../CardLists/Card';
import useGetLists from '~/hooks/useGetList';
import { TmdbMovie } from '~/utils/types/movieTypes';
const TopRatedMovies = () => {
  const { lists } = useGetLists<MovieType | TvType>({
    cate: Category.MOVIE,
    type: MovieType.TOP_RATED
  });

  console.log(lists);
  return (
    <div className='pt-10 w-full'>
      <h2 className='font-bold pl-10 text-3xl'>Top Rated Movies</h2>
      <CardList
        lists={lists as TmdbMovie[]}
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
