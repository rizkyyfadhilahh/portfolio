import { useEffect } from "react";
import { motion as Motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

export const BackgroundFX = () => {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 25, damping: 25 });
  const springY = useSpring(my, { stiffness: 25, damping: 25 });

  const x = useTransform(springX, [-1, 1], [-24, 24]);
  const y = useTransform(springY, [-1, 1], [-16, 16]);

  useEffect(() => {
    if (reduceMotion) return undefined;
    const handleMouseMove = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mx, my, reduceMotion]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-dot-grid" />
      <div className="absolute inset-0 ambient-glow" />
      <Motion.div
        className="blob top-[-14rem] left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] opacity-[0.07]"
        style={{ backgroundColor: "hsl(var(--primary))", x, y }}
      />
    </div>
  );
};
