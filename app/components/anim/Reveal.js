'use client';

import { motion } from 'framer-motion';

const variants = {
  up: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -32 }, show: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 48 }, show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -48 }, show: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.9 }, show: { opacity: 1, scale: 1 } },
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.3,
  as = 'div',
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial='hidden'
      whileInView='show'
      viewport={{ once, amount }}
      variants={variants[direction]}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
