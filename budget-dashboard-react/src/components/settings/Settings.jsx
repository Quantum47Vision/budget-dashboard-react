import { motion } from 'framer-motion';

const inputClasses =
  'w-full rounded-xl border border-hairline bg-ink px-5 py-4 text-parchment placeholder-parchment-faint transition-colors focus:border-brass focus:outline-none';

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mx-auto max-w-3xl"
    >
      <div className="rounded-2xl border border-hairline-bright bg-surface p-8 sm:p-12">
        <h2 className="mb-10 font-display text-3xl font-normal text-parchment">
          Personal Configuration Suite
        </h2>

        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <label
                htmlFor="legal-name"
                className="mb-3 block text-sm font-medium tracking-wide text-parchment-dim"
              >
                Full Legal Name
              </label>
              <input
                id="legal-name"
                type="text"
                defaultValue="Alexandra Victoria Morgan"
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-3 block text-sm font-medium tracking-wide text-parchment-dim">
                Primary Email
              </label>
              <input
                id="email"
                type="email"
                defaultValue="alexandra.morgan@privatewealth.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="currency" className="mb-3 block text-sm font-medium tracking-wide text-parchment-dim">
              Wealth Management Currency
            </label>
            <select id="currency" defaultValue="USD" className={inputClasses}>
              <option value="USD">USD — United States Dollar ($)</option>
              <option value="EUR">EUR — Euro (€)</option>
              <option value="GBP">GBP — British Pound (£)</option>
              <option value="CHF">CHF — Swiss Franc (Fr)</option>
              <option value="JPY">JPY — Japanese Yen (¥)</option>
            </select>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full rounded-xl bg-brass px-8 py-4 text-lg font-semibold text-ink transition-colors hover:bg-brass-bright"
            >
              Secure Configuration
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Settings;
