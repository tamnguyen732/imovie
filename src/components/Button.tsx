import React, { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  textColor?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  color = 'bg-hover',
  textColor = 'text-white',
  hoverTextColor = 'text-white',
  className = '',
  onClick,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` cursor-pointer rounded-2xl py-2 px-4 ${color} ${textColor}  hover:${hoverTextColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
