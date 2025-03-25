import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
  triggerOnce?: boolean;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
  className = '',
  once = true,
  triggerOnce = true,
}) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  // Check for reduced motion preference
  const prefersReducedMotion = 
    typeof window !== 'undefined' 
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
      : false;

  // If user prefers reduced motion, don't animate
  if (prefersReducedMotion || animation === 'none') {
    return <div className={className}>{children}</div>;
  }

  // Define animation classes
  const animationClasses = {
    'fade-up': 'animate-fade-up',
    'fade-down': 'animate-fade-down',
    'fade-left': 'animate-fade-left',
    'fade-right': 'animate-fade-right',
    'zoom-in': 'animate-zoom-in',
    'none': '',
  };

  const animationClass = animationClasses[animation];
  
  return (
    <div
      ref={ref}
      className={`${className} ${inView ? animationClass : 'opacity-0'}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionProperty: 'opacity, transform',
        transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;