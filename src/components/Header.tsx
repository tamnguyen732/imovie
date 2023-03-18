import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { headerNav } from '~/utils/common/general';
import Logo from './Logo';
import { v4 as uuidv4 } from 'uuid';
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScroll] = useState<boolean>(false);
  const handleActiveNav = (path: string) => {
    navigate(`${path}`);
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
      } fixed flex justify-between items-center z-30 transition-all w-screen `}
    >
      <Link to={'/'}>
        <Logo className='w-200 h-auto py-4 pl-2 flex flex-row  justify-start items-center gap-2' />{' '}
      </Link>
      <ul className=' hidden text-white md:flex  gap-10  mr-10 font-bold text-2xl ml-auto justify-end '>
        {headerNav.map(({ display, path }, i) => {
          const isActive = location.pathname === path;
          return (
            <div key={uuidv4()} className='flex flex-col group relative'>
              <li
                onClick={() => {
                  handleActiveNav(path);
                }}
                className={`hover:text-hover hover:transition-all`}
                key={i}
              >
                <Link to={'/'}> {display}</Link>
              </li>
              <div
                className={`w-full h-2px absolute bottom-0 left-0 transform scale-x-0 origin-center transition-all duration-500 ease-in-out  group-hover:bg-hover group-hover:scale-x-100  ${
                  isActive ? 'bg-hover w-full scale-x-100 ' : ''
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
