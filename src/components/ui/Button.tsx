import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  // Define props here
  children: ReactNode;
  className?: string;
  width?: 'w-full' | 'w-fit';
}

const Button = ({ children, className, width = 'w-full', ...rest }: IProps) => {
  return (
    <button
      className={`${className} p-2 ${width} rounded-md text-white`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
