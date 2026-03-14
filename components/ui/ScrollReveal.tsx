"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
  stagger?: boolean;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)", scale: 0.97 },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
  },
  down: {
    hidden: { opacity: 0, y: -40, filter: "blur(4px)", scale: 0.97 },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: 40, filter: "blur(4px)", scale: 0.97 },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 },
  },
  right: {
    hidden: { opacity: 0, x: -40, filter: "blur(4px)", scale: 0.97 },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", scale: 1 },
  },
  none: {
    hidden: { opacity: 0, filter: "blur(4px)", scale: 0.97 },
    visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
  },
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: ScrollRevealProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
