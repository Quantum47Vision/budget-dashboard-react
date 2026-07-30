import { motion } from 'framer-motion';
import AnimatedNumber from '../ui/AnimatedNumber';
import { mockAccounts } from '../../data/mockData';

const CornerTick = ({ position }) => {
  const variants = {
    'top-left': 'top-4 left-4 border-t border-l',
    'top-right': 'top-4 right-4 border-t border-r',
    'bottom-left': 'bottom-4 left-4 border-b border-l',
    'bottom-right': 'bottom-4 right-4 border-b border-r',
  };
  return (
    <span
      className={`pointer-events-none absolute h-5 w-5 border-brass/60 ${variants[position]}`}
      aria-hidden="true"
    />
  );
};

const NetWorthHero = () => {
  const totalNetWorth = mockAccounts.reduce((sum, account) => sum + account.balance, 0);

  return (
    <motion.div
      whileHover={{ y: -2, transition: { duration: 0.3, ease: 'easeOut' } }}
      className="engraved-texture relative overflow-hidden rounded-2xl border border-hairline-bright bg-surface p-10 md:p-14"
    >
      <CornerTick position="top-left" />
      <CornerTick position="top-right" />
      <CornerTick position="bottom-left" />
      <CornerTick position="bottom-right" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-parchment-dim">
            Your Financial Legacy
          </p>
          <AnimatedNumber
            value={totalNetWorth}
            className="font-display text-6xl font-normal leading-none tracking-tight text-parchment md:text-7xl"
          />
          <div className="mt-5 h-px w-24 bg-brass/70" />
          <p className="mt-4 text-base text-parchment-dim">Total Net Worth &middot; Curated Growth</p>
        </div>

        <div className="flex gap-10 border-t border-hairline pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <div>
            <p className="font-mono text-2xl text-brass-bright">{mockAccounts.length}</p>
            <p className="mt-1 text-sm text-parchment-dim">Accounts</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-brass-bright">Live</p>
            <p className="mt-1 text-sm text-parchment-dim">Updated moments ago</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NetWorthHero;
