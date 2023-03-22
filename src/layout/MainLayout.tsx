import React, { ReactNode } from 'react';
import { useParams } from 'react-router-dom';
import apiConfig from '~/api/apiConfig';
import { Category } from '~/api/tmdbClient';
import Footer from '~/components/Footer';
import Header from '~/components/Header';
import useGetMoviesById, { Args, dataType } from '~/hooks/useGetMoviesById';
import bg from '../assets/bg.jpg';
interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  const { category, id } = useParams();
  const args: Args<Category> = {
    cate: category as Category,
    id: id ? Number(id) : undefined
  };

  const { data } = useGetMoviesById({
    ...args,
    type: dataType.DETAIL,
    params: {}
  });
  const detailBg = apiConfig.originalImage(data?.poster_path || (data?.backdrop_path as string));

  return (
    <div className='flex flex-col'>
      <div
        className='fixed  w-full h-screen bg-cover bg-center bg-no-repeat z-0 '
        style={{
          backgroundImage: `url(${id ? detailBg : bg})`
        }}
      ></div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
