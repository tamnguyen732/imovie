import React from 'react';
import CardList from '../CardLists';
import { Category, MovieType, TvType } from '~/api/tmdbClient';
import { SwiperSlide } from 'swiper/react';
import Card from '../CardLists/Card';
import { v4 as uuidv4 } from 'uuid';
import useGetLists from '~/hooks/useGetList';
import { TmdbMovie } from '~/utils/types/movieTypes';
const TrendingTv = () => {
  const { lists } = useGetLists<MovieType | TvType>({
    cate: Category.TV,
    type: TvType.POPULAR
  });

  return (
    <div className='px-2 lg:px-10 md:px-10 w-full'>
      <h2 className='font-bold text-3xl mb-4'>Top Rated Tv</h2>
      <CardList
        lists={lists as TmdbMovie[]}
        slidesPerView={6}
        render={(list) => {
          return (
            <SwiperSlide key={uuidv4()}>
              <Card list={list} category={Category.TV} />
            </SwiperSlide>
          );
        }}
      />
    </div>
  );
};

export default TrendingTv;
