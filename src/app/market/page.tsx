'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Scale, Banknote, Sprout, Landmark, Leaf, ChevronRight, ArrowRight,
  Target, TrendingUp, Droplets, Truck, Factory, Globe, DollarSign,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { TamSamSomChart, RevenueProjectionChart } from '@/components/charts/InteractiveChart';
import {
  tamSamSomData, regulatoryData, competitorData, revenueProjectionData,
} from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  scale: Scale,
  banknote: Banknote,
  sprout: Sprout,
  landmark: Landmark,
  leaf: Leaf,
};

const californiaStats = [
  { icon: Factory, value: '23M', label: 'Tons organic waste generated annually', detail: 'Largest volume in the nation' },
  { icon: Scale, value: '75%', label: 'SB 1383 diversion mandate', detail: 'Most aggressive in the US' },
  { icon: Droplets, value: '#1', label: 'Water stress ranking', detail: 'Worst drought conditions nationally' },
  { icon: Truck, value: '200+', label: 'Average miles hauled one-way', detail: 'Longest distances, highest costs' },
];

export default function MarketPage() {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-500/20 text-forest-300 text-sm font-medium tracking-wider uppercase mb-6 border border-forest-500/30">
              Market Opportunity
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-[family-name:var(--font-display)]"
          >
            <span className="bg-gradient-to-r from-forest-300 to-forest-500 bg-clip-text text-transparent">
              $8.6 Billion
            </span>
            <br />
            and Growing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-forest-300/80 max-w-2xl mx-auto leading-relaxed"
          >
            The global soil amendment market is expanding at 9.4% CAGR, driven by regulatory mandates,
            climate urgency, and a growing recognition that soil health is food security.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-8"
          >
            <AnimatedCounter value={8.6} prefix="$" suffix="B" label="Total Addressable Market" decimals={1} duration={2.5} dark />
            <div className="hidden md:block w-px h-16 bg-forest-500/30" />
            <AnimatedCounter value={9.4} suffix="%" label="Annual Growth Rate" decimals={1} duration={2} dark />
            <div className="hidden md:block w-px h-16 bg-forest-500/30" />
            <AnimatedCounter value={2.7} prefix="$" suffix="B" label="US Serviceable Market" decimals={1} duration={2} dark />
          </motion.div>
        </motion.div>
      </section>

      {/* ── TAM / SAM / SOM ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Market Sizing"
            title="Three Layers of Opportunity"
            description="From global demand down to the immediate, regulation-driven gap in California."
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="bg-sand-50 rounded-2xl p-6 border border-forest-100">
                <TamSamSomChart data={tamSamSomData} />
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              {tamSamSomData.map((tier, i) => (
                <ScrollReveal key={tier.name} direction="right" delay={i * 0.15}>
                  <div className="relative pl-6 border-l-4 border-forest-500/30 hover:border-forest-500 transition-colors">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-2xl font-bold text-forest-900 font-[family-name:var(--font-display)]">
                        ${tier.value}B
                      </span>
                      <span className="text-sm font-semibold text-forest-500 tracking-wider uppercase">
                        {tier.name}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-forest-800">{tier.label}</h3>
                    <p className="text-foreground/60 mt-1">{tier.detail}</p>
                    <span className="inline-block mt-2 text-xs font-medium px-2 py-0.5 rounded-full bg-forest-100 text-forest-700">
                      {tier.growth}
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Regulatory Tailwinds ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Regulatory Drivers"
            title="Five Tailwinds Accelerating Demand"
            description="State and federal mandates are creating non-optional demand for organic waste processing infrastructure."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regulatoryData.map((reg, i) => {
              const Icon = iconMap[reg.icon] || Leaf;
              return (
                <ScrollReveal key={reg.name} delay={i * 0.1}>
                  <motion.div
                    className="bg-white rounded-2xl p-6 shadow-sm border border-forest-100 h-full flex flex-col hover:shadow-lg hover:border-forest-300 transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-forest-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-forest-700" />
                    </div>
                    <h3 className="text-lg font-bold text-forest-900 font-[family-name:var(--font-display)]">
                      {reg.name}
                    </h3>
                    <p className="text-sm text-forest-600 mt-1 font-medium">{reg.scope}</p>
                    <div className="mt-auto pt-4">
                      <div className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                        <p className="text-sm text-foreground/60">{reg.impact}</p>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}

            {/* Summary Card */}
            <ScrollReveal delay={0.5}>
              <motion.div
                className="bg-forest-900 rounded-2xl p-6 text-white h-full flex flex-col justify-center"
                whileHover={{ y: -4 }}
              >
                <Globe className="w-10 h-10 text-forest-300 mb-4" />
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)]">
                  Combined Impact
                </h3>
                <p className="mt-2 text-forest-300/80 text-sm leading-relaxed">
                  Together, these five forces create a unique window: mandated feedstock supply,
                  subsidized farmer adoption, and billions in available capital. The question is not
                  whether the market will grow, but who will capture it.
                </p>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── California as Proof Market ── */}
      <section className="py-20 md:py-28 bg-forest-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Why California"
            title="The Perfect Proof Market"
            description="California is where every driver converges: the highest waste volume, the toughest mandates, the worst water crisis, and the furthest haul distances."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {californiaStats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.label} delay={i * 0.12}>
                  <div className="relative bg-forest-900/50 backdrop-blur-sm rounded-2xl p-6 border border-forest-700/40 h-full group hover:border-forest-500/60 transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-forest-700/40 flex items-center justify-center mb-4 group-hover:bg-forest-500/30 transition-colors">
                      <Icon className="w-5 h-5 text-forest-300" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm font-medium text-forest-300">{stat.label}</p>
                    <p className="mt-1 text-xs text-forest-400/70">{stat.detail}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-16 bg-forest-900/50 backdrop-blur-sm rounded-2xl p-8 border border-forest-700/40 max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-earth-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">
                    First-Mover Advantage
                  </h3>
                  <p className="mt-2 text-forest-300/80 leading-relaxed">
                    With SB 1383 enforcement ramping and a 7.25M ton processing gap, California
                    municipalities are actively searching for compliant infrastructure partners.
                    Fix The Ground&apos;s distributed model is the only solution that can deploy
                    within city limits, eliminate hauling costs, and deliver farm-ready amendments
                    at the same time.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Revenue Projection ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Five-Year Outlook"
            title="Revenue Projection"
            description="Diversified revenue streams from tipping fees, amendment sales, municipal contracts, and carbon credits."
          />

          <ScrollReveal>
            <div className="bg-sand-50 rounded-2xl p-6 border border-forest-100">
              <RevenueProjectionChart data={revenueProjectionData} />
            </div>
          </ScrollReveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Year 1 Revenue', value: '$1.8M', sub: '3 facilities' },
              { label: 'Year 3 Revenue', value: '$10.5M', sub: '6 facilities' },
              { label: 'Year 5 Revenue', value: '$30.3M', sub: '15 facilities' },
              { label: 'Year 5 EBITDA', value: '39%', sub: '$11.8M margin' },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.1}>
                <div className="text-center p-6 rounded-xl bg-sand-50 border border-forest-100">
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

      {/* ── Comparable Companies ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Competitive Landscape"
            title="Large Market, Fragmented Solutions"
            description="Billions have been invested in adjacent spaces, but no one has solved the full loop from urban waste to farm-ready soil biology."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitorData.map((comp, i) => (
              <ScrollReveal key={comp.name} delay={i * 0.08}>
                <motion.div
                  className="bg-white rounded-2xl p-6 border border-forest-100 h-full flex flex-col hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-forest-900 font-[family-name:var(--font-display)]">
                      {comp.name}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-earth-500/10 text-earth-700 whitespace-nowrap">
                      {comp.funding}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed flex-1">
                    {comp.model}
                  </p>
                  <div className="mt-4 pt-4 border-t border-forest-100">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                      <p className="text-xs text-foreground/50">{comp.limitation}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment Landscape ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Investment Context"
            title="Capital Is Flowing"
            description="The convergence of regenerative agriculture and waste infrastructure is attracting historic levels of investment."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal direction="left">
              <div className="bg-forest-950 rounded-2xl p-8 text-white">
                <DollarSign className="w-10 h-10 text-forest-300 mb-4" />
                <div className="text-4xl font-bold font-[family-name:var(--font-display)]">$2.6B</div>
                <p className="mt-2 text-lg font-medium text-forest-300">AgTech Investment in 2024</p>
                <p className="mt-3 text-sm text-forest-400/80 leading-relaxed">
                  Despite a broader venture downturn, agricultural technology continues to attract
                  significant capital as investors recognize the fundamental need to rebuild food system infrastructure.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-forest-950 rounded-2xl p-8 text-white">
                <TrendingUp className="w-10 h-10 text-earth-500 mb-4" />
                <div className="text-4xl font-bold font-[family-name:var(--font-display)]">$47.9B</div>
                <p className="mt-2 text-lg font-medium text-forest-300">Regen Ag Market by 2035</p>
                <p className="mt-3 text-sm text-forest-400/80 leading-relaxed">
                  The regenerative agriculture market is projected to grow from $12.7B today to
                  $47.9B by 2035, a nearly 4x expansion driven by carbon markets, soil health mandates,
                  and consumer demand.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-forest-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-500/20 text-forest-300 text-sm font-medium tracking-wider uppercase mb-6 border border-forest-500/30">
              Next Step
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)]">
              See How We&apos;ll Prove It
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-4 text-lg text-forest-300/80 max-w-2xl mx-auto">
              Three cities. Eighteen months. The data that unlocks everything.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/pilot" variant="secondary" size="lg">
                View Pilot Program <ChevronRight className="w-5 h-5" />
              </Button>
              <Button href="/investors" variant="outline" size="lg" className="border-forest-500/40 text-forest-300 hover:bg-forest-800 hover:text-white">
                Investor Overview <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
