import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { formatCurrency, formatCompactCurrency } from '../../lib/format';

const tooltipStyle = {
  backgroundColor: 'var(--color-surface-raised)',
  border: '1px solid var(--color-hairline-bright)',
  borderRadius: '12px',
  color: 'var(--color-parchment)',
  fontSize: '13px',
};

const AllocationChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <CartesianGrid strokeDasharray="3 5" stroke="var(--color-hairline)" horizontal={false} />
        <XAxis
          type="number"
          stroke="var(--color-hairline-bright)"
          tick={{ fill: 'var(--color-parchment-dim)', fontSize: 12 }}
          tickFormatter={formatCompactCurrency}
        />
        <YAxis
          dataKey="name"
          type="category"
          stroke="var(--color-hairline-bright)"
          tick={{ fill: 'var(--color-parchment-dim)', fontSize: 13 }}
          width={92}
        />
        <Tooltip
          cursor={{ fill: 'var(--color-hairline)', opacity: 0.4 }}
          formatter={(value, name) => [formatCurrency(value), name === 'allocated' ? 'Allocated' : 'Spent']}
          contentStyle={tooltipStyle}
          labelStyle={{ color: 'var(--color-parchment-dim)', marginBottom: 4 }}
        />
        <Bar dataKey="allocated" radius={[0, 4, 4, 0]} opacity={0.28}>
          {data.map((entry) => (
            <Cell key={`alloc-${entry.name}`} fill={entry.color} />
          ))}
        </Bar>
        <Bar dataKey="spent" radius={[0, 4, 4, 0]}>
          {data.map((entry) => (
            <Cell key={`spent-${entry.name}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AllocationChart;
