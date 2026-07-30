// Mock data for the WealthCraft Elite dashboard.
// Colors reference the design tokens defined in src/index.css (@theme),
// so the palette only ever has to change in one place.

export const mockAccounts = [
  { id: 1, name: 'Signature Checking', balance: 18750.5, type: 'checking', lastUpdated: 'Just now', icon: '🏦' },
  { id: 2, name: 'Platinum Savings', balance: 67800.0, type: 'savings', lastUpdated: '3 min ago', icon: '💎' },
  { id: 3, name: 'Private Equity Portfolio', balance: 245600.75, type: 'investment', lastUpdated: '12 min ago', icon: '📈' },
];

export const TRANSACTION_CATEGORY_COLORS = {
  Luxury: 'var(--color-oxblood)',
  Income: 'var(--color-verdigris)',
  Travel: 'var(--color-teal-deep)',
  Dining: 'var(--color-plum)',
  Collectibles: 'var(--color-brass)',
};

export const mockTransactions = [
  { id: 1, date: '2026-07-29', description: 'Ritz-Carlton Spa', amount: -320.0, category: 'Luxury' },
  { id: 2, date: '2026-07-27', description: 'Quarterly Dividend', amount: 3200.0, category: 'Income' },
  { id: 3, date: '2026-07-25', description: 'Rolex Boutique', amount: -12500.0, category: 'Luxury' },
  { id: 4, date: '2026-07-23', description: 'Private Jet Charter', amount: -8500.0, category: 'Travel' },
  { id: 5, date: '2026-07-21', description: 'Michelin Star Dinner', amount: -450.0, category: 'Dining' },
  { id: 6, date: '2026-07-18', description: 'Art Gallery Purchase', amount: -28000.0, category: 'Collectibles' },
].map((t) => ({ ...t, color: TRANSACTION_CATEGORY_COLORS[t.category] }));

export const BUDGET_CATEGORY_COLORS = {
  Residence: 'var(--color-brass)',
  Culinary: 'var(--color-oxblood)',
  Mobility: 'var(--color-teal-deep)',
  Experiences: 'var(--color-plum)',
  Legacy: 'var(--color-verdigris)',
};

export const mockBudgetData = [
  { name: 'Residence', allocated: 8500, spent: 7200 },
  { name: 'Culinary', allocated: 2200, spent: 1850 },
  { name: 'Mobility', allocated: 1800, spent: 1420 },
  { name: 'Experiences', allocated: 3500, spent: 2980 },
  { name: 'Legacy', allocated: 5000, spent: 5000 },
].map((b) => ({ ...b, color: BUDGET_CATEGORY_COLORS[b.name] }));
