import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'plain' | 'disabled';
  children: ReactNode;
}

export const Button = ({ variant, ...props }: ButtonProps) => {
  const classes: string | undefined = props.className;
  const primaryStyles = `bg-gradient-to-r from-blue-500 to-pink-500 text-white  transform transition duration-200 focus:-translate-y-0.5 focus:shadow-lg hover:shadow-lg hover:-translate-y-0.5`;
  const secondaryStyles = `bg-gradient-to-r from-pink-500 to-yellow-500 text-white  transform transition duration-200 focus:-translate-y-0.5 focus:shadow-lg hover:shadow-lg hover:-translate-y-0.5`;
  const disabledStyles = `bg-gray-200 text-gray-400 cursor-not-allowed`;
  const plainStyles = ``;
  return (
    <button
      {...props}
      disabled={variant === 'disabled'}
      className={`${classes} ${
        variant === 'disabled'
          ? disabledStyles
          : variant === 'plain'
          ? plainStyles
          : variant === 'primary'
          ? primaryStyles
          : secondaryStyles
      } 
      max-w-max shadow-sm justify-center px-5 py-1 text-lg rounded-lg font-semibold flex items-center border focus:ring-2 `}
    >
      {props.children}
    </button>
  );
};