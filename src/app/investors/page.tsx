'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Lock, Unlock, ArrowRight, Download, Mail, Calendar, AlertTriangle,
  TrendingUp, Building2, Clock, DollarSign, Target, BarChart3, ChevronRight,
  Shield, Leaf,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Button from '@/components/ui/Button';
import {
  RevenueProjectionChart,
  ProfitabilityChart,
  UnitEconomicsChart,
} from '@/components/charts/InteractiveChart';
import {
  revenueProjectionData,
  profitabilityData,
  unitEconomicsData,
  plData,
  riskData,
  scalingPhases,
} from '@/lib/data';

/* ────────────────────────────────────────────────────────────────────── */
/*  Password Gate                                                        */
/* ────────────────────────────────────────────────────────────────────── */

function InvestorGate({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'FIXTHEGROUND2026') {
      onAuth();
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-forest-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-forest-500/30 rounded-full"
            style={{ left: `${(i * 4) % 100}%`, top: `${(i * 7.3) % 100}%` }}
            animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.5, 1] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      {/* Radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-forest-900/40 via-forest-950 to-forest-950" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-10">
          {/* Lock Icon */}
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: 'easeInOut' }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-forest-800 to-forest-900 border border-forest-700/50 shadow-2xl shadow-forest-500/10 mb-8"
          >
            <Lock className="text-forest-300" size={32} />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
            Investor Portal
          </h1>
          <p className="mt-3 text-forest-300/60 text-sm">
            Enter your access code to view confidential materials.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          animate={isShaking ? { x: [-10, 10, -8, 8, -4, 4, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Access code"
              className={`w-full px-5 py-4 rounded-xl bg-forest-900/60 backdrop-blur-sm border text-white placeholder:text-forest-500/50 focus:outline-none focus:ring-2 focus:ring-forest-500/40 transition-all text-center tracking-[0.3em] text-lg ${
                error ? 'border-red-500/60' : 'border-forest-700/40'
              }`}
              autoFocus
            />
          </div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-red-400 text-sm text-center"
              >
                Invalid access code. Please try again.
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-forest-700 to-forest-600 text-white font-semibold hover:from-forest-600 hover:to-forest-500 transition-all duration-300 shadow-lg shadow-forest-900/30 flex items-center justify-center gap-2"
          >
            <Unlock size={18} />
            Access Portal
          </motion.button>
        </motion.form>

        <p className="mt-8 text-center text-xs text-forest-500/40">
          Confidential materials for authorized investors only.
          <br />
          Contact{' '}
          <a href="mailto:invest@fixtheground.com" className="text-forest-400/60 hover:text-forest-300 underline underline-offset-2">
            invest@fixtheground.com
          </a>{' '}
          for access.
        </p>
      </motion.div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Investor Dashboard                                                   */
/* ────────────────────────────────────────────────────────────────────── */

const keyMetrics = [
  { icon: DollarSign, value: 5, prefix: '$', suffix: 'M', label: 'Phase 1 Raise', decimals: 0 },
  { icon: Building2, value: 3, suffix: '', label: 'Pilot Facilities', decimals: 0 },
  { icon: Clock, value: 18, suffix: ' mo', label: 'Pilot Timeline', decimals: 0 },
  { icon: TrendingUp, value: 1.8, prefix: '$', suffix: 'M', label: 'Year 1 Revenue', decimals: 1 },
  { icon: Target, value: 39, suffix: '%', label: 'Year 5 EBITDA Margin', decimals: 0 },
  { icon: BarChart3, value: 8.6, prefix: '$', suffix: 'B', label: 'TAM (Global)', decimals: 1 },
];

function InvestorDashboard() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-forest-950 to-forest-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-forest-500/15 text-forest-300 text-xs font-medium tracking-widest uppercase mb-4 border border-forest-500/20">
                Confidential
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
                Fix The Ground
                <br />
                <span className="text-forest-300">Investor Portal</span>
              </h1>
            </div>
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-forest-800/60 text-forest-200 text-sm font-medium border border-forest-700/40 hover:bg-forest-700/60 transition-colors"
              >
                <Download size={16} />
                Business Plan (PDF)
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Executive Summary Metrics ── */}
      <section className="py-16 bg-forest-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {keyMetrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <ScrollReveal key={metric.label} delay={i * 0.08}>
                  <div className="bg-forest-900/50 backdrop-blur-sm rounded-xl p-5 border border-forest-700/30 text-center">
                    <Icon className="text-forest-400 mx-auto mb-3" size={20} />
                    <AnimatedCounter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      label={metric.label}
                      decimals={metric.decimals}
                      duration={1.5}
                      dark
                    />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Financial Charts ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Financials"
            title="Interactive Financial Projections"
            description="Five-year revenue, profitability, and unit economics models for the Phase 1 pilot program."
          />

          <div className="space-y-16 mt-12">
            {/* Unit Economics */}
            <ScrollReveal>
              <div className="bg-sand-50 rounded-2xl p-8 border border-forest-100">
                <h3 className="text-xl font-bold text-forest-900 mb-6 font-[family-name:var(--font-display)]">
                  Per-Facility Unit Economics
                </h3>
                <UnitEconomicsChart data={unitEconomicsData} />
              </div>
            </ScrollReveal>

            {/* Revenue Projections */}
            <ScrollReveal>
              <div className="bg-sand-50 rounded-2xl p-8 border border-forest-100">
                <h3 className="text-xl font-bold text-forest-900 mb-6 font-[family-name:var(--font-display)]">
                  Revenue Projection (5-Year)
                </h3>
                <RevenueProjectionChart data={revenueProjectionData} />
              </div>
            </ScrollReveal>

            {/* Profitability */}
            <ScrollReveal>
              <div className="bg-sand-50 rounded-2xl p-8 border border-forest-100">
                <h3 className="text-xl font-bold text-forest-900 mb-6 font-[family-name:var(--font-display)]">
                  Path to Profitability
                </h3>
                <ProfitabilityChart data={profitabilityData} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── P&L Table ── */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Projections"
            title="Five-Year P&L Summary"
            description="Consolidated operating projections across all pilot and expansion facilities."
          />

          <ScrollReveal>
            <div className="mt-12 overflow-x-auto rounded-2xl border border-forest-100 bg-white shadow-sm">
              <table className="w-full min-w-[640px]">
                <thead>
                  <tr className="bg-forest-950">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-forest-200">Metric</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-forest-200">Year 1</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-forest-200">Year 2</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-forest-200">Year 3</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-forest-200">Year 4</th>
                    <th className="text-right py-4 px-6 text-sm font-semibold text-forest-200">Year 5</th>
                  </tr>
                </thead>
                <tbody>
                  {plData.map((row, i) => {
                    const isHighlight = row.metric === 'Revenue' || row.metric === 'EBITDA' || row.metric === 'Gross Profit';
                    const isMargin = row.metric.includes('Margin');
                    return (
                      <motion.tr
                        key={row.metric}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className={`border-b border-forest-50 ${isHighlight ? 'bg-forest-50/50 font-semibold' : ''} ${isMargin ? 'text-forest-600 italic' : ''}`}
                      >
                        <td className="py-3.5 px-6 text-sm text-forest-900">{row.metric}</td>
                        <td className="py-3.5 px-6 text-sm text-right text-forest-800">{row.y1}</td>
                        <td className="py-3.5 px-6 text-sm text-right text-forest-800">{row.y2}</td>
                        <td className="py-3.5 px-6 text-sm text-right text-forest-800">{row.y3}</td>
                        <td className="py-3.5 px-6 text-sm text-right text-forest-800">{row.y4}</td>
                        <td className="py-3.5 px-6 text-sm text-right text-forest-800">{row.y5}</td>
                      </motion.tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Risk Matrix ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Risk Management"
            title="Risk Matrix & Mitigations"
            description="Transparent assessment of key risks and our strategies to address them."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {riskData.map((item, i) => (
              <ScrollReveal key={item.risk} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-2xl border border-forest-100 p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="text-amber-500" size={18} />
                    </div>
                    <h3 className="font-bold text-forest-900 text-sm">{item.risk}</h3>
                  </div>
                  <p className="text-sm text-foreground/50 mb-4 flex-1">{item.description}</p>
                  <div className="bg-forest-50 rounded-xl p-4 border border-forest-100">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Shield className="text-forest-500" size={14} />
                      <span className="text-xs font-semibold text-forest-700">Mitigation</span>
                    </div>
                    <p className="text-xs text-forest-600 leading-relaxed">{item.mitigation}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scaling Roadmap ── */}
      <section className="py-24 md:py-32 bg-forest-950">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Growth Plan"
            title="Scaling Roadmap"
            description="From 3 pilot facilities to national infrastructure."
            dark
          />

          <div className="mt-12 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-forest-700 via-forest-500 to-earth-500 -translate-y-1/2" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {scalingPhases.map((phase, i) => (
                <ScrollReveal key={phase.phase} delay={i * 0.12}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative bg-forest-900/50 backdrop-blur-sm rounded-2xl p-6 border border-forest-700/30 hover:border-forest-500/40 transition-all duration-300"
                  >
                    {/* Phase indicator */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        i === 0 ? 'bg-forest-500 ring-2 ring-forest-400/40' : 'bg-forest-700'
                      }`}>
                        {i + 1}
                      </div>
                      <span className="text-xs text-forest-400 font-medium uppercase tracking-wider">
                        {phase.phase}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Building2 size={14} className="text-forest-400" />
                        <span className="text-sm text-forest-200 font-medium">{phase.facilities}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign size={14} className="text-forest-400" />
                        <span className="text-sm text-forest-200 font-medium">{phase.raise}</span>
                      </div>
                      <p className="text-xs text-forest-300/60 leading-relaxed pt-2 border-t border-forest-700/30">
                        {phase.focus}
                      </p>
                    </div>

                    {i < scalingPhases.length - 1 && (
                      <ChevronRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-forest-500 z-10" size={20} />
                    )}
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Schedule ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-forest-900 to-forest-950">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <Leaf className="text-forest-400 mx-auto mb-6" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
              Ready to discuss?
            </h2>
            <p className="mt-4 text-lg text-forest-300/60 max-w-xl mx-auto">
              We welcome conversations with aligned investors who share our conviction that soil infrastructure is the next great climate opportunity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:invest@fixtheground.com" variant="primary" size="lg" className="bg-forest-500 hover:bg-forest-700 text-white">
                <Mail size={18} />
                invest@fixtheground.com
              </Button>
              <Button href="#" variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/15 hover:border-white">
                <Calendar size={18} />
                Schedule a Call
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────── */
/*  Page Wrapper                                                         */
/* ────────────────────────────────────────────────────────────────────── */

export default function InvestorsPage() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!authenticated ? (
        <motion.div
          key="gate"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
        >
          <InvestorGate onAuth={() => setAuthenticated(true)} />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <InvestorDashboard />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
