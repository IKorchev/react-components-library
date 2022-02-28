import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant: 'primary' | 'secondary';
  children: ReactNode;
}

export const Button = ({
  isLoading = false,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const primaryStyles = `bg-gradient-to-r from-blue-500 to-pink-500 text-white`;
  const secondaryStyles = `bg-gradient-to-r from-pink-500 to-yellow-500 text-white`;
  const disabledStyles =
    'cursor-not-allowed border border-gray-400 bg-gray-200 text-gray-500 ';
  return (
    <button
      {...props}
      disabled={props.disabled}
      className={`${
        props.disabled
          ? disabledStyles
          : variant === 'primary'
          ? primaryStyles
          : secondaryStyles
      } 
       shadow-sm justify-center px-5 py-1 text-lg rounded-lg font-semibold flex items-center border focus:ring-2 transform transition duration-200 focus:-translate-y-0.5 focus:shadow-lg hover:shadow-lg hover:-translate-y-0.5`}
    >
      {isLoading ? <Icon /> : null} {props.children}
    </button>
  );
};

const Icon = () => {
  return (
    <svg
      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
};
