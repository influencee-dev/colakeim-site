import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "uppercase tracking-wider font-semibold text-xs py-3 px-6 transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-rose-700 shadow-sm",
    outline: "bg-transparent border border-white text-white hover:bg-white hover:text-black",
    text: "bg-transparent text-white border-b border-transparent hover:border-white px-0 py-1"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};