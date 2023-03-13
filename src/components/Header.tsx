import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { headerNav } from '~/utils/common/general';
import logo from '../assets/imovie.png';

const Header = () => {
  const [index, setIndex] = useState<number>(0);

  const handleActiveNav = (index: number) => {
    setIndex(index);
  };

  return (
    <div className='cursor-pointer fixed flex justify-between items-center z-50 w-screen'>
      <div className='w-200 h-auto pt-4 pl-2 flex flex-row justify-start items-center gap-2'>
        <img className='w-20 h-20 object-cover' src={logo} alt='' />
        <span className='text-white text-4xl font-bold'>iMovies</span>
      </div>
      <ul className='text-white flex  gap-10  mr-10 font-bold text-2xl ml-auto justify-end '>
        {headerNav.map(({ display, path }, i) => {
          return (
            <div className='flex flex-col group relative'>
              <li
                onClick={() => {
                  handleActiveNav(i);
                }}
                className={`hover:text-hover hover:transition-all  ${
                  index === i ? 'text-hover' : ''
                }`}
                key={i}
              >
                <Link to={'/'}> {display}</Link>
              </li>
              <div
                className={`w-full h-2px absolute bottom-0 left-0 transform scale-x-0 origin-center transition-all duration-500 ease-in-out  group-hover:bg-hover group-hover:scale-x-100  ${
                  index === i ? 'bg-hover w-full scale-x-100 ' : ''
                }`}
              ></div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
