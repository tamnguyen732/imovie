import React from 'react';

const DetailInfo = () => {
  return (
    <div className='z-20'>
      <div
        className=' fixed w-full h-auto bg-cover bg-center bg-no-repeat z-0 '
        style={{
          backgroundImage: `url()`
        }}
      ></div>
      <div className='flex  mt-28 ml-10 justify-center items-start gap-6'>
        <img
          className='w-350px h-550px rounded-2xl object-cover '
          src='https://images.unsplash.com/photo-1679067899998-b9d4cd41239f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
          alt=''
        />

        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-5'>
            <h2 className='text-white text-6xl font-bold'>Black Panther: Wakanda Forever</h2>
            <div className='flex gap-5 text-white '>
              <span className='border px-3 py-1 bg-black rounded-lg'>Action</span>
              <span className='border px-3 py-1 bg-black rounded-lg'>Adventure</span>
              <span className='border px-3 py-1 bg-black rounded-lg'>Science Fiction</span>
            </div>
            <p className='text-white'>
              Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation
              from intervening world powers in the wake of King T’Challa’s death. As the Wakandans
              strive to embrace their next chapter, the heroes must band together with the help of
              War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            <h2 className='text-white text-lg font-bold'>Casts</h2>
            <div className='flex gap-1'>
              <div>
                <img
                  className='w-24 h-40 object-cover'
                  src='https://images.unsplash.com/photo-1679067899998-b9d4cd41239f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  alt=''
                />
                <span className='text-white text-sm'>Letitia Wright</span>
              </div>
              <div>
                <img
                  className='w-24 h-40 object-cover'
                  src='https://images.unsplash.com/photo-1679067899998-b9d4cd41239f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                  alt=''
                />
                <span className='text-white text-sm'>Letitia Wright</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInfo;
