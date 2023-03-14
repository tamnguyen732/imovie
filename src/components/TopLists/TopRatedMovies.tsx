import React from 'react';
import CardList from '../CardLists';

const TopRatedMovies = () => {
  return (
    <div className='pt-10'>
      <h2 className='font-bold pl-10 text-3xl'>Top Rated Movies</h2>
      <CardList />
    </div>
  );
};

export default TopRatedMovies;
