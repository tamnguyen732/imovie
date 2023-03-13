import React, { ReactNode } from 'react';

import Header from '~/components/Header';
import bg from '../assets/bg.jpg';
interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-cover bg-center  bg-node-repeat z-0 overflow-scroll'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <Header />
      {children}
    </div>
  );
}
