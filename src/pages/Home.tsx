import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Category, MovieType, TvType } from '~/api/tmdbClient';
import CardList from '~/components/CardLists';
import HeroSlide from '~/components/HeroSlide';
import TopLists from '~/components/TopLists';
import useGetLists from '~/hooks/useGetList';
import MainLayout from '~/layout/MainLayout';
import { TmdbMovie } from '~/utils/types/movieTypes';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const { lists } = useGetLists<MovieType | TvType>({
    cate: Category.MOVIE,
    type: TvType.POPULAR
  });

  return (
    <MainLayout>
      <div className='text-white w-full h-auto z-20 flex flex-col'>
        {
          <CardList
            lists={lists?.slice(3, 7) as TmdbMovie[]}
            slidesPerView={1}
            breakpoint
            render={(list) => {
              return (
                <SwiperSlide key={uuidv4()}>
                  <HeroSlide list={list} category={Category.MOVIE} />
                </SwiperSlide>
              );
            }}
          />
        }

        <TopLists />
      </div>
    </MainLayout>
  );
};

export default Home;
