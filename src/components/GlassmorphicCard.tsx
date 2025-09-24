import React from 'react';
interface GlassmorphicCardProps {
  children: React.ReactNode;
  className?: string;
}
const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className = ''
}) => {
  return <div className={`backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl ${className}`}>
      {children}
    </div>;
};
export default GlassmorphicCard;