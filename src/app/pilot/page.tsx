'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  MapPin, ChevronRight, ArrowRight, Target, Calendar, CheckCircle,
  Clock, Factory, Users, Sprout, TrendingUp, DollarSign, Building2,
  Truck, Beaker, FileCheck, Handshake,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { UseOfFundsChart, ProfitabilityChart } from '@/components/charts/InteractiveChart';
import {
  pilotCities, useOfFundsData, timelineData, milestones,
  scalingPhases, profitabilityData,
} from '@/lib/data';

const cityIcons = [Building2, Factory, Sprout];

const kpis = [
  { icon: Factory, value: '3/3', label: 'Facilities operational', sub: 'Within 10 months' },
  { icon: Truck, value: '30-75', label: 'Tons processed per day', sub: 'Per facility capacity' },
  { icon: CheckCircle, value: 'Zero', label: 'Odor complaints', sub: 'Urban-compatible validation' },
  { icon: Beaker, value: 'CDFA', label: 'Standards certified', sub: 'Lab-verified amendments' },
  { icon: DollarSign, value: '$1.8M+', label: 'Year 1 combined revenue', sub: 'Across 3 facilities' },
  { icon: Handshake, value: '3+', label: 'Municipal partnerships', sub: 'Signed offtake contracts' },
  { icon: Sprout, value: '10+', label: 'Farm customers', sub: 'Paid amendment buyers' },
  { icon: FileCheck, value: '100%', label: 'SB 1383 compliance', sub: 'For partner municipalities' },
];

const totalMonths = 18;

export default function PilotPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute inset-0 opacity-15">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-forest-300 rounded-full"
                style={{ left: `${(i * 5) % 100}%`, top: `${(i * 11) % 100}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i % 4, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-earth-500/20 text-earth-500 text-sm font-medium tracking-wider uppercase mb-6 border border-earth-500/30">
              $5M Seed Round
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-[family-name:var(--font-display)]"
          >
            Three Cities.
            <br />
            <span className="bg-gradient-to-r from-forest-300 to-forest-500 bg-clip-text text-transparent">
              One Proof Point.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-forest-300/80 max-w-2xl mx-auto leading-relaxed"
          >
            An 18-month pilot across San Diego, Los Angeles, and San Francisco to validate unit economics,
            prove urban-compatible processing, and generate the data that unlocks Phase 2.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-6"
          >
            {['San Diego', 'Los Angeles', 'San Francisco'].map((city, i) => (
              <div key={city} className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-forest-300" />
                <span className="text-forest-200 font-medium">{city}</span>
                {i < 2 && <div className="hidden sm:block w-6 h-px bg-forest-500/40 ml-4" />}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── City Cards ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Pilot Cities"
            title="Strategically Selected Markets"
            description="Each city was chosen for its unique combination of waste volume, regulatory pressure, and proximity to farmland."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {pilotCities.map((city, i) => {
              const Icon = cityIcons[i];
              return (
                <ScrollReveal key={city.name} delay={i * 0.15}>
                  <motion.div
                    className="bg-white rounded-2xl border border-forest-100 overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -6 }}
                  >
                    {/* Header */}
                    <div className="bg-forest-950 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-forest-800 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-forest-300" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                            {city.name}
                          </h3>
                          <p className="text-forest-400 text-sm">{city.population} metro population</p>
                        </div>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 space-y-4">
                      <div>
                        <span className="text-xs font-semibold text-forest-500 uppercase tracking-wider">Waste Volume</span>
                        <p className="text-sm text-foreground/70 mt-0.5">{city.wasteVolume}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-forest-500 uppercase tracking-wider">Processing Capacity</span>
                        <p className="text-sm text-foreground/70 mt-0.5">{city.capacity}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-forest-500 uppercase tracking-wider">SB 1383 Status</span>
                        <p className="text-sm text-foreground/70 mt-0.5">{city.compliance}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-forest-500 uppercase tracking-wider">Farmland Proximity</span>
                        <p className="text-sm text-foreground/70 mt-0.5">{city.proximity}</p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 pb-6">
                      <div className="flex items-start gap-2 bg-forest-50 rounded-lg p-3">
                        <Target className="w-4 h-4 text-forest-600 mt-0.5 shrink-0" />
                        <p className="text-xs text-forest-700 font-medium">{city.strategic}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Use of Funds ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Capital Allocation"
            title="Use of Funds"
            description="$5M deployed across facility buildout, operations, technology, and team with a focused 18-month runway."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl p-6 border border-forest-100 shadow-sm">
                <UseOfFundsChart data={useOfFundsData} />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-3">
                {useOfFundsData.map((item, i) => (
                  <motion.div
                    key={item.name}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 border border-forest-100"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="w-4 h-4 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-forest-900 truncate">{item.name}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-lg font-bold text-forest-900 font-[family-name:var(--font-display)]">
                        ${item.value}M
                      </span>
                      <span className="text-xs text-foreground/50 ml-1">
                        ({Math.round((item.value / 5) * 100)}%)
                      </span>
                    </div>
                  </motion.div>
                ))}

                <div className="flex items-center gap-4 bg-forest-950 rounded-xl p-4 text-white mt-2">
                  <div className="w-4 h-4 rounded-full bg-earth-500 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Total Raise</p>
                  </div>
                  <span className="text-lg font-bold font-[family-name:var(--font-display)]">$5.0M</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Timeline (Gantt) ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Execution Plan"
            title="18-Month Timeline"
            description="Staggered launch with parallel workstreams for maximum speed and redundancy."
          />

          <ScrollReveal>
            <div className="bg-sand-50 rounded-2xl p-6 md:p-8 border border-forest-100 overflow-x-auto">
              {/* Month labels */}
              <div className="min-w-[700px]">
                <div className="flex mb-2">
                  <div className="w-48 shrink-0" />
                  <div className="flex-1 flex">
                    {Array.from({ length: totalMonths + 1 }, (_, i) => (
                      <div key={i} className="flex-1 text-center">
                        <span className="text-[10px] text-foreground/40 font-medium">M{i}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestone markers */}
                <div className="flex mb-4">
                  <div className="w-48 shrink-0" />
                  <div className="flex-1 relative h-8">
                    {milestones.map((ms) => (
                      <div
                        key={ms.label}
                        className="absolute top-0 flex flex-col items-center -translate-x-1/2"
                        style={{ left: `${(ms.month / totalMonths) * 100}%` }}
                      >
                        <div className="w-3 h-3 rounded-full bg-earth-500 border-2 border-white shadow-md" />
                        <span className="text-[9px] font-semibold text-earth-700 mt-1 whitespace-nowrap">
                          {ms.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gantt bars */}
                <div className="space-y-2">
                  {timelineData.map((phase, i) => (
                    <motion.div
                      key={phase.phase}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div className="w-48 shrink-0 pr-4">
                        <span className="text-xs font-medium text-forest-800 leading-tight block truncate">
                          {phase.phase}
                        </span>
                      </div>
                      <div className="flex-1 relative h-7 bg-forest-100/40 rounded-full">
                        <motion.div
                          className="absolute top-0.5 bottom-0.5 rounded-full"
                          style={{
                            left: `${(phase.start / totalMonths) * 100}%`,
                            backgroundColor: phase.color,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(phase.duration / totalMonths) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + i * 0.06, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Success KPIs ── */}
      <section className="py-20 md:py-28 bg-forest-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Success Metrics"
            title="What Good Looks Like"
            description="Concrete, measurable KPIs that define pilot success and unlock Phase 2 funding."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpis.map((kpi, i) => {
              const Icon = kpi.icon;
              return (
                <ScrollReveal key={kpi.label} delay={i * 0.08}>
                  <div className="bg-forest-900/50 backdrop-blur-sm rounded-xl p-5 border border-forest-700/40 h-full group hover:border-forest-500/60 transition-all duration-300">
                    <Icon className="w-5 h-5 text-forest-400 mb-3 group-hover:text-forest-300 transition-colors" />
                    <div className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                      {kpi.value}
                    </div>
                    <p className="text-sm font-medium text-forest-300 mt-1">{kpi.label}</p>
                    <p className="text-xs text-forest-400/70 mt-0.5">{kpi.sub}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Scaling Roadmap ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Growth Path"
            title="From Pilot to National Infrastructure"
            description="A phased scaling strategy that de-risks each stage before committing capital to the next."
          />

          <ScrollReveal>
            <div className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-forest-200 -translate-y-1/2 z-0" />

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {scalingPhases.map((phase, i) => (
                  <motion.div
                    key={phase.phase}
                    className={`rounded-2xl p-6 border h-full flex flex-col ${
                      i === 0
                        ? 'bg-forest-950 border-forest-700 text-white shadow-xl'
                        : 'bg-white border-forest-100 hover:shadow-lg'
                    } transition-all duration-300`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                  >
                    {/* Phase badge */}
                    <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-4 w-fit ${
                      i === 0
                        ? 'bg-forest-700/50 text-forest-300'
                        : 'bg-forest-100 text-forest-600'
                    }`}>
                      <Clock className="w-3 h-3" />
                      {phase.phase}
                    </div>

                    <div className={`text-2xl font-bold font-[family-name:var(--font-display)] ${
                      i === 0 ? 'text-white' : 'text-forest-900'
                    }`}>
                      {phase.facilities}
                    </div>

                    <div className={`text-sm font-medium mt-1 ${
                      i === 0 ? 'text-earth-500' : 'text-earth-600'
                    }`}>
                      {phase.raise}
                    </div>

                    <p className={`mt-3 text-sm leading-relaxed flex-1 ${
                      i === 0 ? 'text-forest-300/80' : 'text-foreground/60'
                    }`}>
                      {phase.focus}
                    </p>

                    {i < scalingPhases.length - 1 && (
                      <div className="lg:hidden flex justify-center mt-4">
                        <ChevronRight className="w-5 h-5 text-forest-400 rotate-90 lg:rotate-0" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Path to Profitability ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Financial Trajectory"
            title="Path to Profitability"
            description="EBITDA-positive by Year 2, with expanding margins as the network scales and operational efficiencies compound."
          />

          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 border border-forest-100 shadow-sm">
              <ProfitabilityChart data={profitabilityData} />
            </div>
          </ScrollReveal>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { label: 'Year 2 Breakeven', value: '$4.6M', sub: 'Revenue surpasses total costs' },
              { label: 'Year 5 Revenue', value: '$30.3M', sub: '15 facilities operating' },
              { label: 'Year 5 EBITDA', value: '$11.8M', sub: '39% margin at scale' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="text-center p-6 bg-white rounded-xl border border-forest-100">
                  <div className="text-2xl md:text-3xl font-bold text-forest-900 font-[family-name:var(--font-display)]">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-forest-700 mt-1">{item.label}</div>
                  <div className="text-xs text-foreground/50 mt-0.5">{item.sub}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-forest-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-earth-500/20 text-earth-500 text-sm font-medium tracking-wider uppercase mb-6 border border-earth-500/30">
              Join Phase 1
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)]">
              Built for Investors Who Think
              <br />
              in Decades, Not Quarters
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-forest-300/80 max-w-2xl mx-auto">
              $5M to prove the unit economics. The data from these three cities is the foundation
              for a national soil infrastructure company.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/investors" variant="secondary" size="lg">
                Investor Overview <ChevronRight className="w-5 h-5" />
              </Button>
              <Button href="/market" variant="outline" size="lg" className="border-forest-500/40 text-forest-300 hover:bg-forest-800 hover:text-white">
                Market Opportunity <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
