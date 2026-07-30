import { useState } from 'react';
import { motion } from 'framer-motion';
import BudgetItem from './BudgetItem';
import { mockBudgetData } from '../../data/mockData';

const BudgetPlanner = () => {
  // maxAllocation is fixed at mount from the original data, so the
  // slider range stays stable while dragging instead of recentering
  // on every change.
  const [budgetItems, setBudgetItems] = useState(() =>
    mockBudgetData.map((item) => ({ ...item, maxAllocation: item.allocated * 2.5 }))
  );

  const handleAllocationChange = (index, newAmount) => {
    setBudgetItems((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], allocated: Math.max(0, newAmount) };
      return updated;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-6"
    >
      {budgetItems.map((item, index) => (
        <BudgetItem key={item.name} item={item} index={index} onAllocationChange={handleAllocationChange} />
      ))}
    </motion.div>
  );
};

export default BudgetPlanner;
