import React from 'react';
import logo from '../assets/imovie.png';

interface LogoProps {
  className: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <img className='w-12 h-12 object-cover' src={logo} alt='' />
      <span className='text-white text-4xl font-bold'>iMovies</span>
    </div>
  );
};

export default Logo;
