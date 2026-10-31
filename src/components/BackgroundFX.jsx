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
        className="blob top-[-12rem] left-[8%] h-[34rem] w-[34rem] opacity-[0.28]"
        style={{ backgroundColor: "hsl(var(--primary))", x, y }}
      />
      <Motion.div
        className="blob bottom-[-10rem] right-[-6rem] h-[30rem] w-[30rem] opacity-[0.18]"
        style={{ backgroundColor: "hsl(var(--accent-2))", x: y, y: x }}
      />
      <Motion.div
        className="blob top-[40%] left-[-10rem] h-[24rem] w-[24rem] opacity-[0.14]"
        style={{ backgroundColor: "hsl(var(--primary))", x }}
      />
    </div>
  );
};
