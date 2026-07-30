import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { formatCurrency } from '../../lib/format';

const BudgetItem = ({ item, index, onAllocationChange }) => {
  const spentRatio = item.allocated > 0 ? Math.min((item.spent / item.allocated) * 100, 100) : 0;
  const allocationRatio = item.maxAllocation > 0 ? (item.allocated / item.maxAllocation) * 100 : 0;

  return (
    <Card
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      hoverLift={false}
      className="p-8"
    >
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span
            className="h-3 w-3 shrink-0 rounded-full"
            style={{ backgroundColor: item.color }}
            aria-hidden="true"
          />
          <h3 className="text-xl font-medium text-parchment">{item.name}</h3>
        </div>
        <div className="sm:text-right">
          <p className="font-mono text-2xl text-parchment">{formatCurrency(item.allocated)}</p>
          <p className="text-sm text-parchment-dim">Allocated</p>
        </div>
      </div>

      <div className="mt-6 flex justify-between text-sm text-parchment-dim">
        <span>Spent: {formatCurrency(item.spent)}</span>
        <span>Remaining: {formatCurrency(item.allocated - item.spent)}</span>
      </div>

      <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-hairline">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${spentRatio}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="h-2.5 rounded-full"
          style={{ backgroundColor: item.color }}
        />
      </div>

      <div className="mt-7">
        <input
          type="range"
          min="0"
          max={item.maxAllocation}
          value={item.allocated}
          onChange={(e) => onAllocationChange(index, parseFloat(e.target.value))}
          className="ledger-slider w-full cursor-pointer appearance-none rounded-full"
          style={{
            height: '4px',
            background: `linear-gradient(to right, ${item.color} 0%, ${item.color} ${allocationRatio}%, var(--color-hairline) ${allocationRatio}%, var(--color-hairline) 100%)`,
          }}
          aria-label={`Adjust ${item.name} allocation`}
        />
      </div>
    </Card>
  );
};

export default BudgetItem;
