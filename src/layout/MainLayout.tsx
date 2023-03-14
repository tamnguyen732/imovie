import React, { ReactNode } from 'react';
import Header from '~/components/Header';
import bg from '../assets/bg.jpg';
interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div
      className='w-full h-screen bg-cover bg-center  bg-no-repeat z-0 '
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <Header />
      {children}
    </div>
  );
}
