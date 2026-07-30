import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/layout/Header';
import MobileNav from './components/layout/MobileNav';
import Dashboard from './components/dashboard/Dashboard';
import Accounts from './components/accounts/Accounts';
import Transactions from './components/transactions/Transactions';
import BudgetPlanner from './components/budget/BudgetPlanner';
import Settings from './components/settings/Settings';

const TABS = {
  dashboard: Dashboard,
  accounts: Accounts,
  transactions: Transactions,
  budget: BudgetPlanner,
  settings: Settings,
};

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const ActiveView = TABS[activeTab] ?? Dashboard;

  return (
    <div className="min-h-screen bg-ink text-parchment">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="mx-auto max-w-7xl px-6 py-12 pb-28 sm:px-8 lg:px-10 lg:pb-12">
        <AnimatePresence mode="wait">
          <ActiveView key={activeTab} />
        </AnimatePresence>
      </main>

      <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
