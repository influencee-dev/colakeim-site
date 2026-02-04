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
  const baseStyles = "uppercase tracking-[0.2em] font-bold text-[10px] py-4 px-8 transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-rose-700 shadow-xl",
    outline: "bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/5",
    text: "bg-transparent text-white border-b border-transparent hover:border-white px-0 py-1"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
         <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      )}
    </button>
  );
};