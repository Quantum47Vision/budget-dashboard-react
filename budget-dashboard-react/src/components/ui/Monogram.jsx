import { motion } from 'framer-motion';

/**
 * The one recurring signature element: an engraved medallion, standing
 * in for the "gradient rounded-square logo" every AI dashboard reaches
 * for. Sized via the `size` prop so it can be reused at header scale.
 */
const Monogram = ({ size = 44, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`relative flex shrink-0 items-center justify-center rounded-full bg-ink-deep ${className}`}
      style={{
        width: size,
        height: size,
        boxShadow:
          'inset 0 0 0 1.5px var(--color-brass), inset 0 0 0 4px var(--color-ink-deep), inset 0 0 0 5px color-mix(in srgb, var(--color-brass) 45%, transparent)',
      }}
    >
      <span
        className="font-display text-brass-bright select-none"
        style={{ fontSize: size * 0.44, lineHeight: 1, marginTop: size * 0.02 }}
      >
        W
      </span>
    </motion.div>
  );
};

export default Monogram;
