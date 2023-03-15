import React from 'react';
import Button from './Button';

const HeroSlide = () => {
  return (
    <div className='mb-40 z-40'>
      {/* <div
        className=' fixed w-full h-screen bg-cover bg-center  bg-node-repeat z-0 '
        style={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1663099788093-1126766f624a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80)`
        }}
      ></div> */}
      <div className=' text-black pl-4 md:pl-12 pt-20 relative top-24 w-full h-96 z-20 flex  justify-center items-center gap-10'>
        <div className='md:w-2/4 flex flex-col gap-7'>
          <h2 className='text-white text-center md:text-left text-2xl md:text-4xl lg:text-6xl font-extrabold'>
            Application level authentication on version 3 is
          </h2>
          <p className='text-white text-center md:text-left text-2xl font-semibold'>
            Our API is available for everyone to use. A TMDB user account is required to request an
            API key. Professional users are approved on a per application basis.
          </p>
          <div className='flex gap-4'>
            <Button className='font-semibold text-2xl hover:smoky-btn'>Watch Now</Button>
            <Button
              color='bg-transparent '
              className='outline outline-white hover:bg-white font-semibold text-2xl'
              hoverTextColor='text-hover'
            >
              Watch Later
            </Button>
          </div>
        </div>
        <div className='w-2/4 hidden md:block'>
          <img
            className='w-80 h-auto rounded-xl object-cover'
            src='https://images.unsplash.com/photo-1678661983484-4e834d0aec20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
