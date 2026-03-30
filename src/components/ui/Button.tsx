'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

const variants = {
  primary: 'bg-forest-900 text-white hover:bg-forest-800 shadow-lg shadow-forest-900/20',
  secondary: 'bg-earth-500 text-white hover:bg-earth-700 shadow-lg shadow-earth-500/20',
  outline: 'border-2 border-forest-900 text-forest-900 hover:bg-forest-900 hover:text-white',
  ghost: 'text-forest-800 hover:bg-forest-100',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.create(Link) : motion.button;

  return (
    <MotionComponent
      href={href || ''}
      onClick={onClick}
      type={!href ? type : undefined}
      className={baseStyles}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
