import React from 'react';
import CardList from '../CardLists';
import { Category, MovieType, TvType } from '~/api/tmdbClient';
import { SwiperSlide } from 'swiper/react';
import Card from '../CardLists/Card';
import useGetLists from '~/hooks/useGetList';
import { TmdbMovie } from '~/utils/types/movieTypes';
import { v4 as uuidv4 } from 'uuid';
const TopRatedTv = () => {
  const { lists } = useGetLists<MovieType | TvType>({
    cate: Category.TV,
    type: TvType.TOP_RATED
  });

  return (
    <div className='pt-10 px-10 w-full'>
      <h2 className='font-bold  text-3xl mb-4'>Top Rated Tv</h2>
      <CardList
        lists={lists as TmdbMovie[]}
        slidesPerView={6}
        render={(list) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <Card list={list} />
            </SwiperSlide>
          );
        }}
      />
    </div>
  );
};

export default TopRatedTv;
