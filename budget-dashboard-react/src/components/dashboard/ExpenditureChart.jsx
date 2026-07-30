import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCurrency, formatCompactCurrency } from '../../lib/format';

const RADIAN = Math.PI / 180;

const renderLabel = ({ cx, cy, midAngle, outerRadius, percent, name }) => {
  const radius = outerRadius + 24;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text
      x={x}
      y={y}
      fill="var(--color-parchment-dim)"
      fontSize={12}
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ExpenditureChart = ({ data }) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={78}
            outerRadius={112}
            paddingAngle={3}
            dataKey="value"
            label={renderLabel}
            labelLine={{ stroke: 'var(--color-hairline-bright)', strokeWidth: 1 }}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} stroke="var(--color-ink)" strokeWidth={2} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => formatCurrency(value)}
            contentStyle={{
              backgroundColor: 'var(--color-surface-raised)',
              border: '1px solid var(--color-hairline-bright)',
              borderRadius: '12px',
              color: 'var(--color-parchment)',
              fontSize: '13px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-xl text-parchment">{formatCompactCurrency(total)}</span>
        <span className="mt-1 text-xs uppercase tracking-widest text-parchment-dim">Spent</span>
      </div>
    </div>
  );
};

export default ExpenditureChart;
