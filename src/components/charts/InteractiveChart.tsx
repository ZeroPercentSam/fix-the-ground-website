'use client';

import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  ComposedChart,
} from 'recharts';

const COLORS = {
  forest900: '#1B4332',
  forest800: '#2D6A4F',
  forest700: '#40916C',
  forest500: '#52B788',
  forest300: '#B7E4C7',
  earth700: '#8B6914',
  earth500: '#C4A35A',
  earth300: '#E8D5A3',
  red: '#CC3333',
  gray: '#6B705C',
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
  formatter?: (value: number, name: string) => string;
}

function CustomTooltip({ active, payload, label, formatter }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-forest-100 p-4 max-w-xs">
      {label && <p className="text-sm font-semibold text-forest-900 mb-2">{label}</p>}
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2 text-sm">
          <div className="w-3 h-3 rounded-full" style={{ background: entry.color }} />
          <span className="text-foreground/60">{entry.name}:</span>
          <span className="font-semibold text-forest-900">
            {formatter ? formatter(entry.value, entry.name) : entry.value}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── TAM/SAM/SOM Chart ──
interface TamDataItem {
  name: string;
  value: number;
  label: string;
  growth: string;
  detail: string;
}

export function TamSamSomChart({ data }: { data: TamDataItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-[350px]">
      {isInView && (
        <ResponsiveContainer>
          <BarChart data={data} layout="vertical" margin={{ left: 20, right: 60 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" horizontal={false} />
            <XAxis type="number" domain={[0, 10]} tickFormatter={(v) => `$${v}B`} />
            <YAxis type="category" dataKey="label" width={180} tick={{ fontSize: 12 }} />
            <Tooltip content={<CustomTooltip formatter={(v) => `$${v}B`} />} />
            <Bar dataKey="value" radius={[0, 8, 8, 0]} animationDuration={1500}>
              {data.map((_, i) => (
                <Cell key={i} fill={[COLORS.forest300, COLORS.forest500, COLORS.forest900][i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// ── Soil Decline Chart ──
interface SoilDataItem {
  year: number;
  som: number;
}

export function SoilDeclineChart({ data }: { data: SoilDataItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-[400px]">
      {isInView && (
        <ResponsiveContainer>
          <AreaChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <defs>
              <linearGradient id="soilGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={COLORS.forest500} stopOpacity={0.3} />
                <stop offset="95%" stopColor={COLORS.forest500} stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis dataKey="year" />
            <YAxis domain={[0, 5.5]} tickFormatter={(v) => `${v}%`} label={{ value: 'Soil Organic Matter (%)', angle: -90, position: 'insideLeft' }} />
            <Tooltip content={<CustomTooltip formatter={(v) => `${v}%`} />} />
            <Area type="monotone" dataKey="som" stroke={COLORS.forest900} strokeWidth={3} fill="url(#soilGradient)" animationDuration={2000} name="Soil Organic Matter" />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// ── Waste Gap Chart ──
interface WasteDataItem {
  name: string;
  value: number;
  color: string;
}

export function WasteGapChart({ data }: { data: WasteDataItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-[350px]">
      {isInView && (
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(v) => `${v}M`} />
            <Tooltip content={<CustomTooltip formatter={(v) => `${v}M tons/yr`} />} />
            <Bar dataKey="value" radius={[8, 8, 0, 0]} animationDuration={1500}>
              {data.map((entry, i) => (
                <Cell key={i} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// ── Revenue Projection Chart ──
interface RevenueDataItem {
  year: string;
  tipping: number;
  amendments: number;
  municipal: number;
  carbon: number;
  facilities: number;
}

export function RevenueProjectionChart({ data }: { data: RevenueDataItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-[400px]">
      {isInView && (
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(v) => `$${v}M`} />
            <Tooltip content={<CustomTooltip formatter={(v) => `$${v}M`} />} />
            <Legend />
            <Bar dataKey="tipping" name="Tipping Fees" stackId="a" fill={COLORS.forest900} radius={[0, 0, 0, 0]} animationDuration={1500} />
            <Bar dataKey="amendments" name="Amendment Sales" stackId="a" fill={COLORS.forest700} animationDuration={1500} />
            <Bar dataKey="municipal" name="Municipal Contracts" stackId="a" fill={COLORS.forest500} animationDuration={1500} />
            <Bar dataKey="carbon" name="Carbon Credits" stackId="a" fill={COLORS.forest300} radius={[8, 8, 0, 0]} animationDuration={1500} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// ── Profitability Chart ──
interface ProfitDataItem {
  year: string;
  revenue: number;
  costs: number;
}

export function ProfitabilityChart({ data }: { data: ProfitDataItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-[400px]">
      {isInView && (
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(v) => `$${v}M`} />
            <Tooltip content={<CustomTooltip formatter={(v) => `$${v}M`} />} />
            <Legend />
            <Area type="monotone" dataKey="revenue" name="Revenue" fill={COLORS.forest500} fillOpacity={0.15} stroke={COLORS.forest900} strokeWidth={3} animationDuration={2000} />
            <Line type="monotone" dataKey="costs" name="Total Costs" stroke={COLORS.red} strokeWidth={3} strokeDasharray="8 4" dot={{ r: 5 }} animationDuration={2000} />
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// ── Use of Funds Pie Chart ──
interface FundsDataItem {
  name: string;
  value: number;
  color: string;
}

export function UseOfFundsChart({ data }: { data: FundsDataItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div ref={ref} className="w-full h-[400px]">
      {isInView && (
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={140}
              paddingAngle={3}
              dataKey="value"
              animationDuration={1500}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.color}
                  stroke="white"
                  strokeWidth={2}
                  style={{
                    transform: activeIndex === i ? 'scale(1.05)' : 'scale(1)',
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => [`$${value}M`, '']}
              contentStyle={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '12px',
                border: '1px solid #B7E4C7',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            />
            <Legend
              verticalAlign="bottom"
              formatter={(value) => <span className="text-sm text-foreground/70">{value}</span>}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// ── Water Retention Chart ──
interface WaterDataItem {
  som: string;
  gallons: number;
}

export function WaterRetentionChart({ data }: { data: WaterDataItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-full h-[350px]">
      {isInView && (
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
            <XAxis dataKey="som" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => `${(v / 1000).toFixed(0)}K`} label={{ value: 'Additional Gallons/Acre', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }} />
            <Tooltip formatter={(value) => [`${Number(value).toLocaleString()} gal/acre`, 'Water Retention']} />
            <Bar dataKey="gallons" radius={[8, 8, 0, 0]} animationDuration={1500}>
              {data.map((_, i) => (
                <Cell key={i} fill={[COLORS.gray, COLORS.forest300, COLORS.forest500, COLORS.forest900][i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// ── Unit Economics Waterfall ──
interface UnitEconItem {
  name: string;
  value: number;
  type: string;
}

export function UnitEconomicsChart({ data }: { data: UnitEconItem[] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const totalRevenue = data.filter(d => d.type === 'revenue').reduce((s, d) => s + d.value, 0);
  const totalCosts = data.filter(d => d.type === 'cost').reduce((s, d) => s + d.value, 0);
  const ebitda = totalRevenue - totalCosts;

  const chartData = [
    ...data.filter(d => d.type === 'revenue').map(d => ({ name: d.name, amount: d.value, fill: COLORS.forest700 })),
    { name: 'Total Revenue', amount: totalRevenue, fill: COLORS.forest900 },
    ...data.filter(d => d.type === 'cost').map(d => ({ name: d.name, amount: d.value, fill: '#E07A5F' })),
    { name: 'Total Costs', amount: totalCosts, fill: COLORS.red },
    { name: 'EBITDA', amount: ebitda, fill: COLORS.forest500 },
  ];

  return (
    <div ref={ref} className="w-full h-[400px]">
      {isInView && (
        <ResponsiveContainer>
          <BarChart data={chartData} margin={{ top: 20, right: 30, bottom: 60, left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} angle={-30} textAnchor="end" />
            <YAxis tickFormatter={(v) => `$${v}K`} />
            <Tooltip formatter={(value) => [`$${value}K`, '']} />
            <Bar dataKey="amount" radius={[6, 6, 0, 0]} animationDuration={1500}>
              {chartData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
