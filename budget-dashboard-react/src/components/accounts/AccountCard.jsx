import { motion } from 'framer-motion';
import Card from '../ui/Card';
import { formatCurrency } from '../../lib/format';

const AccountCard = ({ account, index }) => {
  const progress = Math.min((account.balance / 300000) * 100, 100);

  return (
    <Card
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
      className="p-8"
    >
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
        <div className="flex items-center gap-5">
          <div className="text-3xl" aria-hidden="true">
            {account.icon}
          </div>
          <div>
            <h3 className="text-lg font-medium text-parchment">{account.name}</h3>
            <p className="mt-1 text-sm capitalize text-parchment-dim">{account.type}</p>
          </div>
        </div>
        <div className="sm:text-right">
          <p className="font-mono text-2xl text-parchment">{formatCurrency(account.balance)}</p>
          <p className="mt-1 text-sm text-parchment-faint">{account.lastUpdated}</p>
        </div>
      </div>

      <div className="mt-7 h-1.5 w-full overflow-hidden rounded-full bg-hairline">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.1, delay: 0.25 + index * 0.08, ease: 'easeOut' }}
          className="h-1.5 rounded-full bg-brass"
        />
      </div>
    </Card>
  );
};

export default AccountCard;
