import { useState } from "react";
import { motion as Motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export const TiltCard = ({ children, className = "" }) => {
  const [hovering, setHovering] = useState(false);
  const rotateX = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 25 });
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mouseX}% ${mouseY}%, hsl(var(--primary) / 0.15), transparent 70%)`;

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 14);
    mouseX.set(px * 100);
    mouseY.set(py * 100);
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => {
    setHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <Motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative ${className}`}
    >
      <Motion.div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-0"
        style={{ backgroundImage: spotlight }}
        animate={{ opacity: hovering ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </Motion.div>
  );
};
