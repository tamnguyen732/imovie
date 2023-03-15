import React from 'react';
import apiConfig from '~/api/apiConfig';
import { TmdbMovie } from '~/utils/types/movieTypes';
interface ListProps {
  list: TmdbMovie;
}

const Card = ({ list }: ListProps) => {
  const bg = apiConfig.w500Image(list!.poster_path || (list!.backdrop_path as string));
  return (
    <div className=' w-44 lg:w-56 md:w-64 h-72 bg-white  overflow-hidden rounded-3xl flex-1 '>
      <img src={bg} alt='' />
    </div>
  );
};

export default Card;
