import React from 'react';

const Loading = () => {
  return (
    <div className='flex items-center justify-center z-full pt-20'>
      <div className='w-10 h-10 border-4 border-dashed rounded-full animate-spin dark:border-hover'></div>
    </div>
  );
};

export default Loading;
