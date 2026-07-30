import { motion } from 'framer-motion';
import { formatCurrency, formatDate } from '../../lib/format';

const TransactionRow = ({ transaction, index }) => {
  const isPositive = transaction.amount > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ x: -4, transition: { duration: 0.2 } }}
      className="flex items-center justify-between gap-6 rounded-xl border border-hairline bg-surface p-6 transition-colors hover:border-hairline-bright"
    >
      <div className="flex items-center gap-5">
        <span
          className="h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ backgroundColor: transaction.color }}
          aria-hidden="true"
        />
        <div>
          <p className="text-lg font-medium text-parchment">{transaction.description}</p>
          <p className="mt-1 text-sm text-parchment-dim">{formatDate(transaction.date)}</p>
        </div>
      </div>

      <div className="text-right">
        <p className={`font-mono text-lg font-semibold ${isPositive ? 'text-verdigris' : 'text-oxblood'}`}>
          {formatCurrency(transaction.amount)}
        </p>
        <span
          className="mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium text-parchment"
          style={{
            backgroundColor: `color-mix(in srgb, ${transaction.color} 18%, transparent)`,
            border: `1px solid color-mix(in srgb, ${transaction.color} 45%, transparent)`,
          }}
        >
          {transaction.category}
        </span>
      </div>
    </motion.div>
  );
};

export default TransactionRow;
