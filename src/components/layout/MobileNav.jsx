import { NAV_ITEMS } from '../../data/navigation';

const MobileNav = ({ activeTab, setActiveTab }) => {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-ink/95 backdrop-blur-sm lg:hidden"
      aria-label="Primary"
    >
      <div className="flex justify-around py-3">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            aria-current={activeTab === item.id ? 'page' : undefined}
            className={`flex flex-col items-center gap-1 px-3 py-1.5 text-xs font-medium tracking-wide transition-colors active:scale-95 ${
              activeTab === item.id ? 'text-brass-bright' : 'text-parchment-dim'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
