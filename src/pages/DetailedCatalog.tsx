import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';
import DetailInfo from '~/components/DetailInfo';
import MainLayout from '~/layout/MainLayout';
import { Category } from '~/api/tmdbClient';
import { v4 as uuidv4 } from 'uuid';
import { SwiperSlide } from 'swiper/react';
import CardList from '~/components/CardLists';
import Card from '~/components/CardLists/Card';
import useGetMoviesById, { Args, dataType } from '~/hooks/useGetMoviesById';

const DetailedCatalog = () => {
  const { category, id } = useParams();
  const args: Args<Category> = {
    cate: category as Category,
    id: id ? Number(id) : undefined
  };

  const { video, loading } = useGetMoviesById({ ...args, type: dataType.VIDEOS, params: {} });
  const { lists, loading: listLoading } = useGetMoviesById({
    ...args,
    type: dataType.SIMILAR,
    params: {}
  });

  useLayoutEffect(() => {
    if (!loading) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [loading, listLoading]);

  return (
    <MainLayout>
      <div className='z-20 flex flex-col  h-auto '>
        <DetailInfo />
        {!loading && (
          <div className='flex flex-col gap-5 px-4 py-5 bg-black '>
            {video.slice(0, 3).map(({ name, key }) => {
              return (
                <div key={key} className='w-full h-auto'>
                  <h2 className='text-2xl font-bold text-white mb-2'>{name}</h2>
                  <iframe
                    className='w-full h-screen'
                    src={`https://www.youtube.com/embed/${key}`}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className='bg-black'>
          <h2 className='text-2xl font-bold text-white mb-2 px-4 py-0'>Similar</h2>
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
      </div>
    </MainLayout>
  );
};

export default DetailedCatalog;
