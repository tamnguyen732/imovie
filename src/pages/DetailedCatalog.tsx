import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailInfo from '~/components/DetailInfo';
import MainLayout from '~/layout/MainLayout';
import tmdbApi, { Category } from '~/api/tmdbClient';
import { TmdbMovie } from '~/utils/types/movieTypes';
import { v4 as uuidv4 } from 'uuid';
import { SwiperSlide } from 'swiper/react';
import CardList from '~/components/CardLists';
import Card from '~/components/CardLists/Card';
const DetailedCatalog = () => {
  const { category, id } = useParams();

  const [lists, setLists] = useState<TmdbMovie[]>([]);
  useEffect(() => {
    const fetchSimilarLists = async () => {
      const response = await tmdbApi.similar(category as Category, id as string);
      // @ts-ignore
      const newMovies = response.results;

      setLists(newMovies);
    };
    fetchSimilarLists();
  }, [category, id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <MainLayout>
      <div className='z-20 flex flex-col gap-10 h-auto'>
        <DetailInfo />
        <div className='w-full'>
          <h2 className='text-2xl font-bold text-white mb-2'>
            Costume Design | Ruth E. Carter | Oscars95 Press Room Speech
          </h2>
          <iframe
            className='w-full h-screen'
            src='https://www.youtube.com/embed/LKxLnWqlXu4'
          ></iframe>
        </div>
        <CardList
          lists={lists}
          slidesPerView={6}
          render={(list) => {
            return (
              <SwiperSlide key={uuidv4()}>
                <Card list={list} category={category as Category} />
              </SwiperSlide>
            );
          }}
        />
      </div>
    </MainLayout>
  );
};

export default DetailedCatalog;
