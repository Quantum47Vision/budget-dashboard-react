import { motion } from 'framer-motion';
import Monogram from '../ui/Monogram';
import { NAV_ITEMS } from '../../data/navigation';

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
        <div className="flex items-center gap-4">
          <Monogram size={40} />
          <span className="font-display text-xl tracking-wide text-parchment">
            WealthCraft <span className="text-brass-bright">Elite</span>
          </span>
        </div>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              aria-current={activeTab === item.id ? 'page' : undefined}
              className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                activeTab === item.id
                  ? 'text-brass-bright'
                  : 'text-parchment-dim hover:text-parchment'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-4 -bottom-px h-[1.5px] bg-brass-bright"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </button>
          ))}
        </nav>

        <div
          className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-bright bg-surface text-sm font-medium text-brass-bright"
          aria-hidden="true"
        >
          AM
        </div>
      </div>
    </header>
  );
};

export default Header;
