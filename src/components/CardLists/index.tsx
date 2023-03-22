import React from 'react';
import { Swiper } from 'swiper/react';
import { v4 as uuidv4 } from 'uuid';
import { useGlobalContext } from '~/contexts/ModalContext';

interface CardList<T> {
  lists: T[];
  render: (list: T) => React.ReactNode;
  slidesPerView: number;
  breakpoint?: boolean;
}

const CardList = <T,>({ lists = [], render, slidesPerView, breakpoint }: CardList<T>) => {
  const { modal } = useGlobalContext();
  return (
    <div className='w-full z-20'>
      <Swiper
        allowSlideNext={modal !== 'open'}
        allowSlidePrev={modal !== 'open'}
        spaceBetween={10}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true
        }}
        slidesPerView={breakpoint ? 1 : 2}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: breakpoint ? 1 : 2,
            spaceBetween: 20
          },
          // when window width is >= 768px
          768: {
            slidesPerView: breakpoint ? 1 : 3,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: slidesPerView,
            spaceBetween: 20
          }
        }}
      >
        {lists?.map((list) => {
          return <div key={uuidv4()}>{render(list)}</div>;
        })}
      </Swiper>
    </div>
  );
};

export default CardList;
