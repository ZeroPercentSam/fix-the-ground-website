'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Microscope, TrendingUp, Users, ArrowRight, Droplets, Wheat, Shield, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { coreValues } from '@/lib/data';

const iconMap: Record<string, React.ElementType> = {
  'leaf': Leaf,
  'microscope': Microscope,
  'trending-up': TrendingUp,
  'users': Users,
};

const withdrawals = [
  { label: 'Industrial Farming', value: 85 },
  { label: 'Chemical Fertilizers', value: 72 },
  { label: 'Monoculture', value: 65 },
  { label: 'Tilling & Erosion', value: 58 },
];

const deposits = [
  { label: 'Cover Cropping', value: 12 },
  { label: 'Composting', value: 8 },
  { label: 'Regenerative Ag', value: 5 },
];

const stakes = [
  {
    stat: '60%',
    label: 'of global soils degraded',
    description: 'The United Nations estimates that 60% of the world\'s soils are degraded, threatening the foundation of food production for 8 billion people.',
    icon: Wheat,
  },
  {
    stat: '40%',
    label: 'less water retention',
    description: 'Degraded soils hold dramatically less water, amplifying drought impacts and increasing reliance on irrigation in an era of water scarcity.',
    icon: Droplets,
  },
  {
    stat: '10x',
    label: 'faster topsoil loss than formation',
    description: 'We are losing topsoil ten times faster than it can form naturally. At current rates, the world has roughly 60 harvests remaining.',
    icon: Shield,
  },
];

export default function AboutPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-forest-300 rounded-full"
              style={{ left: `${(i * 5) % 100}%`, top: `${(i * 7) % 100}%` }}
              animate={{ opacity: [0.1, 0.6, 0.1] }}
              transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i % 5 }}
            />
          ))}
        </div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-500/15 text-forest-300 text-sm font-medium tracking-widest uppercase mb-8 border border-forest-500/20">
              Our Mission
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] font-[family-name:var(--font-display)]"
          >
            <span className="text-white">Fix The Ground exists because</span>
            <br />
            <span className="bg-gradient-to-r from-forest-300 via-forest-500 to-earth-500 bg-clip-text text-transparent">
              the current trajectory is not acceptable.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 text-lg md:text-xl text-forest-300/70 max-w-2xl mx-auto leading-relaxed"
          >
            We are building the infrastructure to regenerate living soil at the scale the crisis demands.
          </motion.p>
        </motion.div>
      </section>

      {/* ── Mission Statement ── */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="relative">
              <div className="absolute -left-4 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-500 to-earth-500 rounded-full" />
              <blockquote className="pl-8 md:pl-16">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-900 leading-snug font-[family-name:var(--font-display)]">
                  Return organic biomass to the farms and fields where it is desperately needed, at scale, by fixing the broken economics of composting and soil regeneration.
                </p>
                <footer className="mt-6 text-forest-500 font-medium text-lg">
                  -- The Fix The Ground Mission
                </footer>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── The Soil Bank Account ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Problem"
            title="The Soil Bank Account"
            description="We've been treating living soil like an infinite bank account -- making withdrawals for decades while barely making deposits."
          />

          <div className="grid md:grid-cols-2 gap-12 mt-12">
            {/* Withdrawals */}
            <ScrollReveal direction="left">
              <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
                  <TrendingUp className="rotate-180" size={20} />
                  Withdrawals (Decades of Extraction)
                </h3>
                <div className="space-y-4">
                  {withdrawals.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                      className="relative"
                    >
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-forest-900">{item.label}</span>
                        <span className="text-sm text-red-600 font-semibold">{item.value}%</span>
                      </div>
                      <div className="h-3 bg-red-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Deposits */}
            <ScrollReveal direction="right">
              <div className="bg-forest-50/50 rounded-2xl p-8 border border-forest-100">
                <h3 className="text-xl font-bold text-forest-700 mb-6 flex items-center gap-2">
                  <TrendingUp size={20} />
                  Deposits (Current Regeneration)
                </h3>
                <div className="space-y-4">
                  {deposits.map((item, i) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-forest-900">{item.label}</span>
                        <span className="text-sm text-forest-600 font-semibold">{item.value}%</span>
                      </div>
                      <div className="h-3 bg-forest-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-forest-400 to-forest-600 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 + i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-earth-500/10 rounded-xl border border-earth-500/20">
                  <p className="text-sm text-forest-800 font-medium">
                    The gap between extraction and regeneration is a civilizational risk. Fix The Ground exists to close it.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 md:py-32 bg-forest-950">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Our Values"
            title="What Drives Us"
            description="Four principles that guide every decision we make."
            dark
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {coreValues.map((value, i) => {
              const Icon = iconMap[value.icon] || Leaf;
              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative group bg-forest-900/50 backdrop-blur-sm rounded-2xl p-8 border border-forest-700/30 hover:border-forest-500/50 transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-forest-500/20 to-forest-700/20 flex items-center justify-center mb-6 group-hover:from-forest-500/30 group-hover:to-forest-700/30 transition-colors">
                      <Icon className="text-forest-300" size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 font-[family-name:var(--font-display)]">
                      {value.title}
                    </h3>
                    <p className="text-forest-300/70 leading-relaxed text-sm">
                      {value.description}
                    </p>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-forest-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── The Larger Stakes ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Why This Matters"
            title="The Larger Stakes"
            description="Soil is not an environmental issue. It is a food security, water resilience, and civilizational stability issue."
          />

          <div className="space-y-16 mt-12">
            {stakes.map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0 w-40 h-40 rounded-2xl bg-gradient-to-br from-forest-100 to-forest-50 flex flex-col items-center justify-center border border-forest-200">
                      <Icon className="text-forest-500 mb-2" size={32} />
                      <span className="text-4xl font-bold text-forest-900 font-[family-name:var(--font-display)]">
                        {item.stat}
                      </span>
                      <span className="text-xs text-forest-600 font-medium text-center mt-1 px-2">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg md:text-xl text-forest-800 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-5xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-500">
                Our Approach
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-forest-900 font-[family-name:var(--font-display)] leading-tight">
                Not a composting company.
                <br />
                Not a hauling company.
              </h2>
              <p className="mt-4 text-xl md:text-2xl font-semibold bg-gradient-to-r from-forest-700 to-earth-500 bg-clip-text text-transparent">
                A soil infrastructure and logistics disruption company.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Distributed, Not Centralized',
                description: 'Urban-proximate micro-hubs eliminate one full leg of the waste transport chain, cutting costs and emissions simultaneously.',
              },
              {
                title: 'Biology Over Chemistry',
                description: 'Proprietary microbial processing eliminates odor, reduces volume, and creates biologically active amendments that rebuild living soil systems.',
              },
              {
                title: 'Farmers as Customers, Not Afterthoughts',
                description: 'We build products farmers actually need and deliver them at economics that make regeneration the rational choice.',
              },
              {
                title: 'Four Revenue Streams, One Mission',
                description: 'Tipping fees, amendment sales, municipal contracts, and carbon credits create resilient unit economics at every facility.',
              },
              {
                title: 'Regulation as Tailwind',
                description: 'SB 1383 mandates create guaranteed feedstock supply. We turn compliance pressure into a business advantage.',
              },
              {
                title: 'Scale Through Replication',
                description: 'Modular facility design means every site is a blueprint. Prove it once, replicate everywhere.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-4 p-6 rounded-xl bg-white border border-forest-100 hover:border-forest-200 hover:shadow-lg transition-all duration-300">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-forest-500/10 flex items-center justify-center">
                      <ChevronRight size={14} className="text-forest-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-forest-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-forest-950 to-forest-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-[family-name:var(--font-display)]">
              Ready to see how we do it?
            </h2>
            <p className="mt-4 text-lg text-forest-300/70">
              Explore our solution model or learn about the investment opportunity.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/solution" variant="primary" size="lg" className="bg-forest-500 hover:bg-forest-700 text-white">
                Our Solution <ArrowRight size={18} />
              </Button>
              <Button href="/investors" variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/15 hover:border-white">
                Investor Access <ArrowRight size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
