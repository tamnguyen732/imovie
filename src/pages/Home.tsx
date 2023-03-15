import React from 'react';
import HeroSlide from '~/components/HeroSlide';
import TopLists from '~/components/TopLists';
import MainLayout from '~/layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className='text-white w-full h-auto z-20 flex flex-col '>
        <HeroSlide />
        <TopLists />
      </div>
    </MainLayout>
  );
};

export default Home;
