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
          <ul className='cursor-pointer grid grid-cols-3 gap-7 w-3/4 '>
            {footerGuide.map(({ display }, i) => {
              return (
                <li key={i} className='text-white text-2xl font-bold hover:text-hover'>
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
