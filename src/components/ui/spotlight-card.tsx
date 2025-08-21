
"use client";
import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
  size?: 'sm' | 'md' | 'lg';
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // When true, ignores size prop and uses width/height or className
}

const glowColorMap = {
  blue: { base: 220, spread: 200 },
  purple: { base: 280, spread: 300 },
  green: { base: 120, spread: 200 },
  red: { base: 0, spread: 200 },
  orange: { base: 30, spread: 200 }
};

const sizeMap = {
  sm: 'w-48 h-64',
  md: 'w-64 h-80',
  lg: 'w-80 h-96'
};

const GlowCard: React.FC<GlowCardProps> = ({
   children,
   className = '',
   glowColor = 'blue',
  size = 'md',
  width,
  height,
  customSize = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
     const syncPointer = (e: PointerEvent) => {
       const { clientX: x, clientY: y } = e;
       
       if (cardRef.current) {
         const rect = cardRef.current.getBoundingClientRect();
         cardRef.current.style.setProperty('--x', (x - rect.left).toFixed(2));
         cardRef.current.style.setProperty('--xp', ((x - rect.left) / rect.width).toFixed(2));
         cardRef.current.style.setProperty('--y', (y - rect.top).toFixed(2));
         cardRef.current.style.setProperty('--yp', ((y - rect.top) / rect.height).toFixed(2));
       }
     };

     document.addEventListener('pointermove', syncPointer);
     return () => document.removeEventListener('pointermove', syncPointer);
   }, []);


   const { base, spread } = glowColorMap[glowColor];

   const getSizeClasses = () => {
     if (customSize) {
       return '';
     }
     return sizeMap[size];
   };

   const getInlineStyles = (): React.CSSProperties => {
     const baseStyles: React.CSSProperties = {
       '--base': base,
       '--spread': spread,
       '--radius': '14',
       '--border': '1', // Adjusted for better look
       '--bg-spot-opacity': '0.2',
       '--border-spot-opacity': '0.7',
       '--size': '150',
       '--border-size': 'calc(var(--border, 2) * 1px)',
       '--spotlight-size': 'calc(var(--size, 150) * 1px)',
       '--hue': 'calc(var(--base) + (var(--xp, 0) * var(--spread, 0)))',
       '--saturation': '100',
       '--lightness': '60',
       position: 'relative',
       touchAction: 'none',
     };

     if (width !== undefined) {
       baseStyles.width = typeof width === 'number' ? `${width}px` : width;
     }
     if (height !== undefined) {
       baseStyles.height = typeof height === 'number' ? `${height}px` : height;
     }

     return baseStyles;
   };

   const beforeAfterStyles = `
     [data-glow]::before,
     [data-glow]::after {
       pointer-events: none;
       content: "";
       position: absolute;
       inset: calc(var(--border-size) * -1);
       border: var(--border-size) solid transparent;
       border-radius: calc(var(--radius) * 1px);
       mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
       mask-clip: padding-box, border-box;
       mask-composite: intersect;
     }
     
     [data-glow]::before {
      background-image: radial-gradient(
        circle at
        calc(var(--x, 0) * 1px)
        calc(var(--y, 0) * 1px),
        hsl(var(--hue) var(--saturation, 100)% var(--lightness, 50)%), transparent 35%
      );
      filter: brightness(1.5) blur(calc(var(--border-size) * 5));
      opacity: var(--border-spot-opacity, 1);
     }
   `;

   return (
     <>
       <style dangerouslySetInnerHTML={{ __html: beforeAfterStyles }} />
       <div
         ref={cardRef}
         data-glow
         style={getInlineStyles()}
         className={`
           ${getSizeClasses()}
           rounded-2xl
           relative
           bg-card
           ${className}
         `}
       >
         <div 
            className="absolute inset-0 rounded-[calc(var(--radius)*1px)]"
            style={{
                backgroundImage: `radial-gradient(
                    circle at
                    calc(var(--x, 0) * 1px)
                    calc(var(--y, 0) * 1px),
                    hsl(var(--hue) var(--saturation)% var(--lightness)% / var(--bg-spot-opacity, 0.1)), transparent 50%
                )`,
            }}
         />
         {children}
       </div>
     </>
   );
 };

 export { GlowCard }
