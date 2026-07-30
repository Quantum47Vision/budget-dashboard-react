import { motion } from 'framer-motion';

/**
 * Shared surface for every panel in the app: solid ink-surface fill,
 * a hairline border, and a restrained hover lift. Deliberately no
 * blur/gradient here — those are reserved for the hero card so the
 * app has one bold moment instead of the same effect on everything.
 */
const Card = ({ children, className = '', hoverLift = true, ...props }) => {
  return (
    <motion.div
      whileHover={
        hoverLift
          ? {
              y: -3,
              borderColor: 'var(--color-hairline-bright)',
              transition: { duration: 0.25, ease: 'easeOut' },
            }
          : undefined
      }
      className={`bg-surface border border-hairline rounded-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
