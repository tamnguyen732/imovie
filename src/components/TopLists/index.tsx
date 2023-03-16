import React from 'react';
import TopRatedMovies from './TopRatedMovies';
import TopRatedTv from './TopRatedTv';
import TrendingMovies from './TrendingMovies';
import TrendingTv from './TrendingTv';

const TopLists = () => {
  return (
    <div className='relative w-full h-auto bg-background z-60 '>
      <div className='absolute -top-10 w-full h-14 bg-gradient-to-t from-background to-black/0'></div>
      <TopRatedMovies />
      <TrendingMovies />
      <TrendingTv />
      <TopRatedTv />
      <div className='absolute -bottom-6 w-full h-14 bg-gradient-to-b from-background to-black/0'></div>
    </div>
  );
};

export default TopLists;
