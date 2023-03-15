import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { headerNav } from '~/utils/common/general';
import Logo from './Logo';

const Header = () => {
  const [index, setIndex] = useState<number>(0);
  const [isScrolled, setIsScroll] = useState<boolean>(false);
  const handleActiveNav = (index: number) => {
    setIndex(index);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`cursor-pointer h-20 ${
        isScrolled ? 'bg-black' : ''
      } fixed flex justify-between items-center z-50 transition-all w-screen `}
    >
      <Logo className='w-200 h-auto py-4 pl-2 flex flex-row  justify-start items-center gap-2' />
      <ul className=' hidden text-white md:flex  gap-10  mr-10 font-bold text-2xl ml-auto justify-end '>
        {headerNav.map(({ display, path }, i) => {
          return (
            <div key={i} className='flex flex-col group relative'>
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
