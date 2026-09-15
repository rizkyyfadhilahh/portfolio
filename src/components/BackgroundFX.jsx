import { useEffect, useMemo } from "react";
import { motion as Motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const floatAnimation = (distance = 24, duration = 10) => ({
  y: [0, -distance, 0],
  transition: { duration, repeat: Infinity, ease: "easeInOut" },
});

const blobs = [
  { top: "-12rem", left: "-12rem", size: "34rem", color: "primary", parallax: [-24, 24], duration: 11 },
  { top: "-6rem", right: "-14rem", size: "30rem", color: "accent-2", parallax: [20, -20], duration: 13, delay: 3 },
  { bottom: "-12rem", left: "10%", size: "28rem", color: "accent-2", parallax: [-18, 18], duration: 12, delay: 1.5 },
  { bottom: "-10rem", right: "8%", size: "26rem", color: "primary", parallax: [16, -16], duration: 10, delay: 4 },
];

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${(i * 41) % 100}%`,
  top: `${(i * 29) % 100}%`,
  size: 2 + (i % 3),
  duration: 6 + (i % 5),
  delay: (i % 7) * 0.6,
}));

const shapes = [
  { kind: "circle", top: "10%", left: "6%", size: 64, color: "primary", duration: 9, rotate: 360 },
  { kind: "square", top: "16%", right: "8%", size: 46, color: "accent-2", duration: 12, rotate: -360 },
  { kind: "plus", top: "68%", left: "10%", size: 34, color: "accent-2", duration: 7, rotate: 180 },
  { kind: "circle", bottom: "12%", right: "14%", size: 50, color: "primary", duration: 10, rotate: -360 },
  { kind: "square", top: "44%", right: "4%", size: 30, color: "primary", duration: 8, rotate: 360 },
  { kind: "plus", bottom: "22%", left: "46%", size: 26, color: "accent-2", duration: 6.5, rotate: -180 },
];

export const BackgroundFX = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 40, damping: 20 });
  const springY = useSpring(my, { stiffness: 40, damping: 20 });

  const cursorX = useMotionValue(-500);
  const cursorY = useMotionValue(-500);
  const glowX = useSpring(cursorX, { stiffness: 120, damping: 22, mass: 0.6 });
  const glowY = useSpring(cursorY, { stiffness: 120, damping: 22, mass: 0.6 });
  const dotX = useSpring(cursorX, { stiffness: 500, damping: 30, mass: 0.4 });
  const dotY = useSpring(cursorY, { stiffness: 500, damping: 30, mass: 0.4 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mx.set((e.clientX / window.innerWidth) * 2 - 1);
      my.set((e.clientY / window.innerHeight) * 2 - 1);
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mx, my, cursorX, cursorY]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-aurora-wash" />
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 bg-scanline" />

      <Motion.div
        className="absolute rounded-full hidden md:block will-change-transform"
        style={{
          width: 380,
          height: 380,
          left: 0,
          top: 0,
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, hsl(var(--primary)/0.18), hsl(var(--accent-2)/0.1) 45%, transparent 72%)",
        }}
      />
      <Motion.div
        className="absolute rounded-full hidden md:block will-change-transform"
        style={{
          width: 8,
          height: 8,
          left: 0,
          top: 0,
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "hsl(var(--primary))",
          boxShadow: "0 0 12px 3px hsl(var(--primary)/0.6)",
        }}
      />

      {blobs.map((blob, i) => (
        <BlobLayer key={i} blob={blob} springX={springX} springY={springY} />
      ))}

      {shapes.map((shape, i) => (
        <ShapeLayer key={i} shape={shape} />
      ))}

      {particles.map((p) => (
        <Motion.span
          key={p.id}
          className={`absolute rounded-full ${p.id % 2 === 0 ? "bg-primary/50" : "bg-accent-2/50"}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            boxShadow: `0 0 6px 1px ${p.id % 2 === 0 ? "hsl(var(--primary)/0.4)" : "hsl(var(--accent-2)/0.4)"}`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.65, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const ShapeLayer = ({ shape }) => {
  const colorVar = `hsl(var(--${shape.color}))`;
  const shapeClass =
    shape.kind === "circle"
      ? "rounded-full border-2"
      : shape.kind === "square"
      ? "rounded-lg border-2"
      : "";

  return (
    <Motion.div
      className="absolute"
      style={{ top: shape.top, left: shape.left, right: shape.right, bottom: shape.bottom }}
      animate={{ y: [0, -22, 0] }}
      transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
    >
      <Motion.div
        animate={{ rotate: shape.rotate }}
        transition={{ duration: shape.duration * 2.2, repeat: Infinity, ease: "linear" }}
      >
        {shape.kind === "plus" ? (
          <div className="relative" style={{ width: shape.size, height: shape.size }}>
            <span
              className="absolute top-1/2 left-0 w-full h-[3px] -translate-y-1/2 rounded-full"
              style={{ backgroundColor: colorVar, opacity: 0.55, boxShadow: `0 0 10px 1px ${colorVar}` }}
            />
            <span
              className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full"
              style={{ backgroundColor: colorVar, opacity: 0.55, boxShadow: `0 0 10px 1px ${colorVar}` }}
            />
          </div>
        ) : (
          <div
            className={shapeClass}
            style={{
              width: shape.size,
              height: shape.size,
              borderColor: colorVar,
              opacity: 0.55,
              boxShadow: `0 0 18px -2px ${colorVar}`,
            }}
          />
        )}
      </Motion.div>
    </Motion.div>
  );
};

const BlobLayer = ({ blob, springX, springY }) => {
  const x = useTransform(springX, [-1, 1], blob.parallax);
  const y = useTransform(springY, [-1, 1], blob.parallax);
  const anim = useMemo(() => floatAnimation(24, blob.duration), [blob.duration]);

  return (
    <Motion.div
      className="absolute"
      style={{
        top: blob.top,
        left: blob.left,
        right: blob.right,
        bottom: blob.bottom,
        width: blob.size,
        height: blob.size,
        x,
        y,
      }}
    >
      <Motion.div
        className="blob h-full w-full opacity-25"
        style={{ backgroundColor: `hsl(var(--${blob.color}))` }}
        animate={anim}
        transition={{ ...anim.transition, delay: blob.delay || 0 }}
      />
    </Motion.div>
  );
};
