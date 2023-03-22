import React from 'react';
import { footerGuide } from '~/utils/common/general';
import bg from '../assets/bg.jpg';
import Logo from './Logo';
const Footer = () => {
  return (
    <div className='z-10'>
      <div
        className=' w-full h-96  bg-cover bg-center  bg-node-repeat '
        style={{
          backgroundImage: `url(${bg})`
        }}
      >
        <Logo className='w-200 h-auto py-4 pl-2 flex flex-row  justify-center items-center gap-2 ' />
        <div className='flex justify-center items-center pt-5'>
          <ul className='w-full px-2 cursor-pointer grid grid-cols-2 lg:grid-cols-3  md:grid-cols-3 gap-2 lg:gap-7 md:gap-7 lg:w-3/4 md:pl-5'>
            {footerGuide.map(({ display }, i) => {
              return (
                <li key={i} className='text-white text-2xl md:text-3xl font-bold hover:text-hover'>
                  {display}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
