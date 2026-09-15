import { motion as Motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1];

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  y = 24,
  once = true,
  ...props
}) => (
  <Motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: easeOut }}
    {...props}
  >
    {children}
  </Motion.div>
);

export const StaggerContainer = ({
  children,
  className = "",
  stagger = 0.08,
  once = true,
  ...props
}) => (
  <Motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once, amount: 0.15 }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: stagger } },
    }}
    {...props}
  >
    {children}
  </Motion.div>
);

export const StaggerItem = ({ children, className = "", y = 20, ...props }) => (
  <Motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: easeOut },
      },
    }}
    {...props}
  >
    {children}
  </Motion.div>
);
