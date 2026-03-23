import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className = '',
  disabled,
  ...props
}) => {
  const base = 'font-bold uppercase tracking-wide transition-transform duration-200 border-2 border-black';

  const variants: Record<string, string> = {
    primary: 'bg-black text-white hover:-translate-x-1 hover:-translate-y-1',
    outline: 'bg-white text-black hover:-translate-x-1 hover:-translate-y-1',
    ghost: 'bg-transparent text-black border-transparent hover:border-black',
  };

  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const shadow = variant !== 'ghost' ? '4px 4px 0px 0px rgba(0,0,0,1)' : 'none';

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      style={{ boxShadow: shadow }}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
