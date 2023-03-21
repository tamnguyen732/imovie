import React, { useEffect } from 'react';
import apiConfig from '~/api/apiConfig';
import { v4 as uuidv4 } from 'uuid';
import { TmdbMovie } from '~/utils/types/movieTypes';
import Button from '../Button';
import { Link } from 'react-router-dom';
import { Category } from '~/api/tmdbClient';
interface ListProps {
  list?: TmdbMovie;
  category: Category;
}

const Card = ({ list, category }: ListProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const bg = apiConfig.w500Image(list?.poster_path || (list?.backdrop_path as string));

  return (
    <Link to={`/${category}/${list?.id}`} className='cursor-pointer'>
      <div
        key={uuidv4()}
        className='z-20 group relative cursor-pointer w-44 lg:w-195px md:w-64 h-72 hover:bg-black bg-white overflow-hidden rounded-3xl flex-1 '
      >
        <img
          className='z-20 w-full h-full hover:brightness-50 transition duration-300 ease-in-out '
          src={bg}
          alt='imovies '
        />
        <Button className=' z-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-14 rounded-full   transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out' />
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  border-solid border-l-white border-l-12px border-y-transparent border-y-8 border-r-0  transform scale-0 group-hover:scale-100 transition duration-300 ease-in-out' />
      </div>
      <h2 className='text-white hover:text-hover font-bold mt-2 text-xl z-10'>
        {list?.title ?? list?.name}
      </h2>
    </Link>
  );
};

export default Card;
