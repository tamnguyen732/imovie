import React from 'react';
import { Swiper } from 'swiper/react';
interface CardList<T> {
  lists: T[];
  render: (list: T) => React.ReactNode;
}

const CardList = <T,>({ lists, render }: CardList<T>) => {
  return (
    <div className='w-full'>
      <Swiper
        spaceBetween={5}
        slidesPerView={2}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 20
          }
        }}
      >
        {lists?.map((list) => {
          return <>{render(list)}</>;
        })}
      </Swiper>
    </div>
  );
};

export default CardList;
