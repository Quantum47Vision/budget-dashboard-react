import { motion } from 'framer-motion';
import TransactionRow from './TransactionRow';
import { mockTransactions } from '../../data/mockData';

const Transactions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-4"
    >
      {mockTransactions.map((transaction, index) => (
        <TransactionRow key={transaction.id} transaction={transaction} index={index} />
      ))}
    </motion.div>
  );
};

export default Transactions;
