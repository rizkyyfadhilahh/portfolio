import { motion as Motion } from "framer-motion";

const auroras = [
  {
    className: "-top-24 -left-16 h-[34rem] w-[34rem]",
    color: "primary",
    opacity: 0.28,
    path: [
      [0, 0],
      [50, 40],
      [-25, 75],
      [0, 0],
    ],
    duration: 16,
  },
  {
    className: "top-10 -right-10 h-[30rem] w-[30rem]",
    color: "accent-2",
    opacity: 0.24,
    path: [
      [0, 0],
      [-40, 50],
      [25, -40],
      [0, 0],
    ],
    duration: 20,
  },
  {
    className: "bottom-0 left-1/3 h-[26rem] w-[26rem]",
    color: "primary",
    opacity: 0.18,
    path: [
      [0, 0],
      [40, -25],
      [-40, -15],
      [0, 0],
    ],
    duration: 18,
  },
];

export const HeroAurora = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {auroras.map((a, i) => (
        <Motion.div
          key={i}
          className={`blob ${a.className}`}
          style={{ backgroundColor: `hsl(var(--${a.color}))`, opacity: a.opacity }}
          animate={{
            x: a.path.map(([x]) => x),
            y: a.path.map(([, y]) => y),
          }}
          transition={{
            duration: a.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
