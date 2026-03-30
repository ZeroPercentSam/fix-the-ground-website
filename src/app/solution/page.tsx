'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight, Check, X, Recycle, FlaskConical, Sprout, Truck,
  Factory, Building2, ChevronRight, Zap, Shield, Beaker, Wind,
  Package, Droplets, Leaf, TrendingUp, DollarSign, ArrowDown,
  Microscope, Target, Layers,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { comparisonData } from '@/lib/data';

const breakthroughCards = [
  { title: 'Stabilizes Biology', description: 'Our microbial system creates stable, beneficial microbial communities that survive transport and thrive in the field.', icon: Microscope, color: 'bg-forest-500' },
  { title: 'Reduces Volume 80%', description: 'Proprietary processing drives off water weight and concentrates active biology into a fraction of the original mass.', icon: Package, color: 'bg-forest-700' },
  { title: 'Increases Nutrient Density', description: 'The output is not compost. It is a concentrated biological amendment with measurably higher nutrient availability.', icon: TrendingUp, color: 'bg-earth-500' },
  { title: 'Eliminates Odor', description: 'The system operates without the anaerobic conditions that cause odor. Enabling urban-proximate processing for the first time.', icon: Wind, color: 'bg-forest-900' },
];

const processSteps = [
  { step: '01', title: 'Waste In', subtitle: 'Urban Collection', description: 'Organic waste collected from restaurants, grocers, and municipal programs within city limits.', icon: Recycle, gradient: 'from-forest-300 to-forest-500' },
  { step: '02', title: 'Microbial Processing', subtitle: 'Biological Transformation', description: 'Aerobic microbial systems break down waste, stabilize biology, and eliminate odor in compact urban facilities.', icon: FlaskConical, gradient: 'from-forest-500 to-forest-700' },
  { step: '03', title: 'Concentration', subtitle: 'Volume Reduction', description: 'Water driven off, volume reduced 80%. What remains is biologically dense, nutrient-rich, and transport-efficient.', icon: Beaker, gradient: 'from-forest-700 to-forest-900' },
  { step: '04', title: 'Distribution', subtitle: 'Farm Delivery', description: 'Concentrated amendments shipped economically to farms. One truck replaces five loads of traditional compost.', icon: Truck, gradient: 'from-forest-900 to-earth-500' },
];

const valueChainNodes = [
  { label: 'Waste Generators', detail: 'Restaurants, grocers, municipalities', icon: Building2 },
  { label: 'Urban Micro-Hubs', detail: 'In-city processing facilities', icon: Factory },
  { label: 'Concentrated Amendments', detail: 'High-value biological products', icon: FlaskConical },
  { label: 'Farms', detail: 'Regenerative soil restoration', icon: Sprout },
];

const productCards = [
  {
    title: 'Soil Inoculants',
    description: 'Living microbial communities tailored to restore biological activity in depleted soils. Rapid colonization, measurable within one growing season.',
    features: ['Mycorrhizal fungi networks', 'Nitrogen-fixing bacteria', 'Phosphorus solubilizers'],
    icon: Microscope,
    barColor: 'bg-forest-500',
    iconBg: 'bg-forest-500/10',
    iconColor: 'text-forest-500',
  },
  {
    title: 'Regenerative Amendments',
    description: 'Balanced biological amendments that rebuild soil organic matter, improve structure, and increase water retention capacity.',
    features: ['80% volume reduction vs compost', 'Stable microbial communities', 'Measurable SOM improvement'],
    icon: Layers,
    barColor: 'bg-forest-700',
    iconBg: 'bg-forest-700/10',
    iconColor: 'text-forest-700',
  },
  {
    title: 'Field-Specific Formulations',
    description: 'Custom-blended amendments based on soil testing data. Prescriptive biology matched to specific field deficiencies.',
    features: ['Soil test-driven formulation', 'Crop-specific optimization', 'Performance guarantees'],
    icon: Target,
    barColor: 'bg-earth-500',
    iconBg: 'bg-earth-500/10',
    iconColor: 'text-earth-500',
  },
];

export default function SolutionPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute inset-0 opacity-15">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-forest-300 rounded-full"
                style={{ left: `${(i * 4) % 100}%`, top: `${(i * 8.1) % 100}%` }}
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i % 5, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest-500/20 text-forest-300 text-sm font-medium tracking-wider uppercase mb-6 border border-forest-500/30">
              <Zap className="w-4 h-4" />
              The Breakthrough
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-[family-name:var(--font-display)]"
          >
            Ship{' '}
            <span className="bg-gradient-to-r from-forest-300 to-forest-500 bg-clip-text text-transparent">
              Function
            </span>
            , Not Compost
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-forest-300/80 max-w-3xl mx-auto leading-relaxed"
          >
            What if you could process organic waste inside city limits, without odor, and deliver concentrated
            biological amendments that actually restore soil? That is what we built.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap justify-center gap-6"
          >
            {[
              { icon: Shield, label: 'Odor-Free Urban Processing' },
              { icon: Package, label: '80% Volume Reduction' },
              { icon: Sprout, label: 'Living Biology Delivered' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-forest-300/80 text-sm">
                <item.icon className="w-4 h-4 text-forest-500" />
                {item.label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <ArrowDown className="w-6 h-6 text-forest-500 mx-auto animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── The Breakthrough ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Core Innovation"
            title="Odor-Free Inner-City Composting"
            description="We solved the single biggest barrier to urban organics processing: odor. This unlocks a fundamentally new model."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {breakthroughCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                  <motion.div
                    className="bg-white rounded-2xl border border-forest-100 p-6 h-full shadow-sm group"
                    whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(27,67,50,0.12)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="mt-5 font-bold text-forest-900 text-lg">{card.title}</h3>
                    <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{card.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Old vs New Model ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Model Comparison"
            title="Old Model vs. New Model"
            description="Every dimension of the system changes when you process locally and ship function instead of bulk."
          />

          <ScrollReveal>
            <div className="bg-white rounded-2xl shadow-lg border border-forest-100 overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-forest-950 text-white">
                <div className="p-4 md:p-5 text-sm font-semibold">Dimension</div>
                <div className="p-4 md:p-5 text-sm font-semibold text-center flex items-center justify-center gap-2">
                  <X className="w-4 h-4 text-red-400" /> Old Model
                </div>
                <div className="p-4 md:p-5 text-sm font-semibold text-center flex items-center justify-center gap-2">
                  <Check className="w-4 h-4 text-forest-300" /> New Model
                </div>
              </div>

              {/* Rows */}
              {comparisonData.map((row, i) => (
                <motion.div
                  key={i}
                  className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-white' : 'bg-forest-50/30'} border-t border-forest-100`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <div className="p-4 md:p-5 text-sm font-semibold text-forest-900">{row.dimension}</div>
                  <div className="p-4 md:p-5 text-sm text-foreground/50 flex items-start gap-2">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{row.old}</span>
                  </div>
                  <div className="p-4 md:p-5 text-sm text-forest-800 flex items-start gap-2">
                    <Check className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{row.new}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How The Micro-Hub Works ── */}
      <section className="py-20 md:py-28 bg-forest-950">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Process"
            title="How The Micro-Hub Works"
            description="A four-stage process that transforms urban organic waste into concentrated biological amendments."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line on desktop */}
            <div className="hidden lg:block absolute top-16 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-forest-300 via-forest-500 to-earth-500 z-0" />

            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.15}>
                  <div className="relative text-center z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center mx-auto shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div className="mt-2 w-8 h-8 rounded-full bg-white/10 text-white text-xs font-bold flex items-center justify-center mx-auto border border-white/20">
                      {step.step}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                    <p className="text-sm text-forest-300 font-medium">{step.subtitle}</p>
                    <p className="mt-3 text-sm text-forest-300/60 leading-relaxed">{step.description}</p>
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute -right-3 top-8 z-20">
                        <ChevronRight className="w-6 h-6 text-forest-500" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Value Chain ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="End-to-End"
            title="The Value Chain"
            description="From waste generation to soil restoration, every step creates value instead of destroying it."
          />

          {/* Horizontal flow */}
          <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 justify-center">
            {valueChainNodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <ScrollReveal key={i} direction={i % 2 === 0 ? 'up' : 'down'} delay={i * 0.12}>
                  <div className="flex items-center">
                    <motion.div
                      className="bg-white rounded-2xl border-2 border-forest-200 p-6 text-center min-w-[180px] shadow-sm"
                      whileHover={{ y: -4, borderColor: '#52B788', boxShadow: '0 12px 40px rgba(27,67,50,0.12)' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center mx-auto">
                        <Icon className="w-6 h-6 text-forest-700" />
                      </div>
                      <h3 className="mt-3 font-bold text-forest-900 text-sm">{node.label}</h3>
                      <p className="mt-1 text-xs text-foreground/50">{node.detail}</p>
                    </motion.div>
                    {i < valueChainNodes.length - 1 && (
                      <div className="hidden lg:flex items-center px-3">
                        <motion.div
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight className="w-6 h-6 text-forest-400" />
                        </motion.div>
                      </div>
                    )}
                    {i < valueChainNodes.length - 1 && (
                      <div className="lg:hidden flex items-center justify-center py-2">
                        <ArrowDown className="w-5 h-5 text-forest-400" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Product Output ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Three Product Lines"
            description="Not compost. Concentrated, biologically active amendments designed for measurable soil restoration."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {productCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={i} direction="up" delay={i * 0.12}>
                  <motion.div
                    className="bg-white rounded-2xl border border-forest-100 overflow-hidden h-full shadow-sm group"
                    whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(27,67,50,0.12)' }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Top accent bar */}
                    <div className={`h-1.5 ${card.barColor}`} />
                    <div className="p-6">
                      <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 ${card.iconColor}`} />
                      </div>
                      <h3 className="mt-5 text-xl font-bold text-forest-900 font-[family-name:var(--font-display)]">{card.title}</h3>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{card.description}</p>
                      <ul className="mt-5 space-y-2">
                        {card.features.map((feature, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-forest-800">
                            <Check className="w-4 h-4 text-forest-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Economics Shift ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Paradigm Shift"
            title="From Weight to Function"
            description="The economic model changes fundamentally when you sell outcomes instead of tonnage."
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div className="bg-forest-950 rounded-2xl p-8 md:p-10">
                <div className="relative">
                  <div className="absolute -top-2 -left-2 text-6xl text-forest-500/20 font-bold font-[family-name:var(--font-display)]">&ldquo;</div>
                  <blockquote className="relative z-10 text-xl md:text-2xl text-white font-medium leading-relaxed font-[family-name:var(--font-display)]">
                    The current system gets paid to move weight. Fix The Ground gets paid to deliver function.
                  </blockquote>
                  <div className="absolute -bottom-4 -right-2 text-6xl text-forest-500/20 font-bold font-[family-name:var(--font-display)]">&rdquo;</div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { label: 'Old: Revenue per Ton', value: '$40-60', sub: 'Selling commodity weight', negative: true },
                      { label: 'New: Revenue per Acre', value: '$200-400', sub: 'Selling biological function', negative: false },
                    ].map((item, i) => (
                      <div key={i}>
                        <p className="text-xs text-forest-300/50 uppercase tracking-wider">{item.label}</p>
                        <p className={`text-2xl font-bold mt-1 ${item.negative ? 'text-red-400' : 'text-forest-300'} font-[family-name:var(--font-display)]`}>
                          {item.value}
                        </p>
                        <p className="text-xs text-forest-300/40 mt-0.5">{item.sub}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-5">
              {[
                {
                  icon: DollarSign,
                  title: 'Diversified Revenue',
                  desc: 'Tipping fees, amendment sales, municipal contracts, and carbon credits. No single dependency.',
                },
                {
                  icon: TrendingUp,
                  title: 'Value Increases With Quality',
                  desc: 'Unlike compost, biological amendments command premium prices. Better product means higher margins.',
                },
                {
                  icon: Leaf,
                  title: 'Aligned Incentives',
                  desc: 'Revenue tied to farm outcomes. Better soil restoration means repeat customers and expanding contracts.',
                },
                {
                  icon: Droplets,
                  title: 'Water Value Unlocked',
                  desc: 'Every 1% increase in SOM retains 20,000 additional gallons per acre. Water savings are monetizable.',
                },
              ].map((point, i) => {
                const Icon = point.icon;
                return (
                  <ScrollReveal key={i} direction="right" delay={i * 0.1}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-xl bg-forest-50/50 border border-forest-100"
                      whileHover={{ x: 4, backgroundColor: 'rgba(210,235,220,0.5)' }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-10 h-10 rounded-lg bg-forest-100 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-forest-700" />
                      </div>
                      <div>
                        <h4 className="font-bold text-forest-900">{point.title}</h4>
                        <p className="text-sm text-foreground/60 mt-1">{point.desc}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-forest-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-forest-300 rounded-full"
              style={{ left: `${(i * 6.7) % 100}%`, top: `${(i * 11) % 100}%` }}
              animate={{ y: [0, -40, 0], opacity: [0.1, 0.5, 0.1] }}
              transition={{ duration: 5 + (i % 3), repeat: Infinity, delay: i % 4, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-500/20 text-forest-300 text-sm font-medium tracking-wider uppercase mb-6 border border-forest-500/30">
              The Opportunity
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] leading-tight">
              A $2.7B market waiting for{' '}
              <span className="bg-gradient-to-r from-forest-300 to-forest-500 bg-clip-text text-transparent">
                the right infrastructure
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-forest-300/70 max-w-2xl mx-auto">
              California alone has a 7.25 million ton processing gap and $487M in committed grants.
              The market is not theoretical. It is mandated.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/market" variant="primary" size="lg">
                See The Market <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/investors" variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/15 hover:border-white">
                Investor Deck <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
