import { motion } from 'framer-motion';
import AccountCard from './AccountCard';
import { mockAccounts } from '../../data/mockData';

const Accounts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-6"
    >
      {mockAccounts.map((account, index) => (
        <AccountCard key={account.id} account={account} index={index} />
      ))}
    </motion.div>
  );
};

export default Accounts;
