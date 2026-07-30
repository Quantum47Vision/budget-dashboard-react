import { useEffect, useState } from 'react';
import { animate, useReducedMotion } from 'framer-motion';
import { formatCurrency } from '../../lib/format';

/**
 * Animates from 0 up to `value` once on mount/value change. Falls back
 * to an instant, unanimated figure when the user prefers reduced motion.
 */
const AnimatedNumber = ({ value, className = '' }) => {
  const [display, setDisplay] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const controls = animate(0, value, {
      duration: shouldReduceMotion ? 0 : 1.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest),
    });

    return () => controls.stop();
  }, [value, shouldReduceMotion]);

  return <span className={className}>{formatCurrency(display)}</span>;
};

export default AnimatedNumber;
