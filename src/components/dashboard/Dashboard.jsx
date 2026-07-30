import { motion } from 'framer-motion';
import NetWorthHero from './NetWorthHero';
import AllocationChart from './AllocationChart';
import ExpenditureChart from './ExpenditureChart';
import Card from '../ui/Card';
import { mockBudgetData } from '../../data/mockData';

const Dashboard = () => {
  const pieData = mockBudgetData.map((item) => ({
    name: item.name,
    value: item.spent,
    color: item.color,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-8"
    >
      <NetWorthHero />

      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">
        <Card hoverLift={false} className="p-8">
          <h3 className="mb-8 font-display text-2xl font-normal text-parchment">Allocation Strategy</h3>
          <AllocationChart data={mockBudgetData} />
        </Card>

        <Card hoverLift={false} className="p-8">
          <h3 className="mb-8 font-display text-2xl font-normal text-parchment">Expenditure Portfolio</h3>
          <ExpenditureChart data={pieData} />
        </Card>
      </div>
    </motion.div>
  );
};

export default Dashboard;
