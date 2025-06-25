import React from 'react';

// Position type definition
type Position =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

// Size presets
type Size = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Color variants
type ColorVariant =
  | 'blue'
  | 'purple'
  | 'pink'
  | 'green'
  | 'orange'
  | 'red'
  | 'yellow';

interface RadialGlowProps {
  position: Position;
  size?: Size;
  color?: ColorVariant;
  intensity?: number; // 0.1 to 1
  blur?: number; // blur amount in px
  className?: string;
  offsetX?: number; // horizontal offset in pixels
  offsetY?: number; // vertical offset in pixels
  halfOffScreen?: boolean; // whether to extend half off screen for edge positions
}

const RadialGlow: React.FC<RadialGlowProps> = ({
  position = 'center',
  size = 'md',
  color = 'blue',
  intensity = 0.3,
  blur = 100,
  className = '',
  offsetX = 0,
  offsetY = 0,
  halfOffScreen = false,
}) => {
  // Size mappings
  const sizeMap: Record<Size, string> = {
    sm: 'w-[200px] h-[200px]',
    md: 'w-[300px] h-[300px]',
    lg: 'w-[400px] h-[400px]',
    xl: 'w-[500px] h-[500px]',
    '2xl': 'w-[600px] h-[600px]',
  };

  // Color mappings with different intensities
  const colorMap: Record<ColorVariant, string> = {
    blue: `bg-blue-500/${Math.round(intensity * 100)}`,
    purple: `bg-purple-500/${Math.round(intensity * 100)}`,
    pink: `bg-pink-500/${Math.round(intensity * 100)}`,
    green: `bg-green-500/${Math.round(intensity * 100)}`,
    orange: `bg-orange-500/${Math.round(intensity * 100)}`,
    red: `bg-red-500/${Math.round(intensity * 100)}`,
    yellow: `bg-yellow-500/${Math.round(intensity * 100)}`,
  };

  // Position mappings
  const getPositionClasses = (pos: Position): string => {
    const baseClasses = 'absolute pointer-events-none';

    // Handle half off-screen positioning for edge positions
    const getTransform = (pos: Position): string => {
      if (halfOffScreen) {
        switch (pos) {
          case 'top-left':
            return '-translate-x-1/2 -translate-y-1/2';
          case 'top-right':
            return 'translate-x-1/2 -translate-y-1/2';
          case 'center-left':
            return '-translate-x-1/2 -translate-y-1/2';
          case 'center-right':
            return 'translate-x-1/2 -translate-y-1/2';
          case 'bottom-left':
            return '-translate-x-1/2 translate-y-1/2';
          case 'bottom-right':
            return 'translate-x-1/2 translate-y-1/2';
          default:
            return '-translate-x-1/2 -translate-y-1/2';
        }
      }
      return '-translate-x-1/2 -translate-y-1/2';
    };

    const positionMap: Record<Position, string> = {
      'top-left': `top-0 left-0 ${getTransform(pos)}`,
      'top-center': `top-0 left-1/2 ${getTransform(pos)}`,
      'top-right': `top-0 right-0 ${getTransform(pos)}`,
      'center-left': `top-1/2 left-0 ${getTransform(pos)}`,
      center: `top-1/2 left-1/2 ${getTransform(pos)}`,
      'center-right': `top-1/2 right-0 ${getTransform(pos)}`,
      'bottom-left': `bottom-0 left-0 ${getTransform(pos)}`,
      'bottom-center': `bottom-1/2 left-1/2 ${getTransform(pos)}`,
      'bottom-right': `bottom-0 right-0 ${getTransform(pos)}`,
    };

    return `${baseClasses} ${positionMap[pos]}`;
  };

  // Generate inline styles for custom positioning and blur
  const customStyles: React.CSSProperties = {
    transform: `translate(${offsetX}px, ${offsetY}px)`,
    filter: `blur(${blur}px)`,
    zIndex: 0,
  };

  return (
    <div
      className={` ${getPositionClasses(position)} ${sizeMap[size]} ${colorMap[color]} rounded-full ${className} `}
      style={customStyles}
    />
  );
};

export default RadialGlow;
