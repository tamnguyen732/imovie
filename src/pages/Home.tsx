import React from 'react';
import HeroSlide from '~/components/HeroSlide';
import TopLists from '~/components/TopLists';

import MainLayout from '~/layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className='text-white relative w-full  h-screen z-20 flex flex-col gap-28'>
        <HeroSlide />
        <TopLists />
      </div>
    </MainLayout>
  );
};

export default Home;
