import React from 'react';
import TopRatedMovies from './TopRatedMovies';
import TopRatedTv from './TopRatedTv';
import TrendingMovies from './TrendingMovies';
import TrendingTv from './TrendingTv';

const TopLists = () => {
  return (
    <div className='relative w-full h-auto bg-background'>
      <div className='absolute -top-10 w-full h-14 bg-gradient-to-t from-background to-black/0'></div>
      <TopRatedMovies />
      <TrendingMovies />
      <TrendingTv />
      <TopRatedTv />
    </div>
  );
};

export default TopLists;
