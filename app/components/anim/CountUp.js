'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function CountUp({
  to,
  from = 0,
  duration = 1.8,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

    const tick = (now) => {
      const elapsed = (now - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      setValue(from + (to - from) * ease(progress));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, from, duration]);

  const formatted = value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
