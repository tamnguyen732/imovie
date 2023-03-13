import React from 'react';
import HeroSlide from '~/components/HeroSlide';

import MainLayout from '~/layout/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className='text-white relative top-40 h-96 z-20'>
        <HeroSlide />
      </div>
    </MainLayout>
  );
};

export default Home;
