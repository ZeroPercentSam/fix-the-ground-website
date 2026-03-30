'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowRight, AlertTriangle, Droplets, TrendingDown, Truck, DollarSign,
  Carrot, Factory, Building2, Trash2, Leaf, ChevronRight, BarChart3,
  XCircle, ArrowDown, Sprout, Scale,
} from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { SoilDeclineChart, WasteGapChart, WaterRetentionChart } from '@/components/charts/InteractiveChart';
import { soilDeclineData, wasteGapData, waterRetentionData } from '@/lib/data';

const extractionSteps = [
  { step: '01', title: 'Grown', description: 'Carrots cultivated in Central Valley farmland, drawing nutrients from soil.', icon: Carrot, color: 'text-forest-500' },
  { step: '02', title: 'Shipped', description: 'Transported 200+ miles to urban population centers.', icon: Truck, color: 'text-earth-500' },
  { step: '03', title: 'Consumed', description: 'Eaten in cities. Nutrients extracted from the agricultural cycle.', icon: Building2, color: 'text-forest-700' },
  { step: '04', title: 'Flushed', description: 'Organic waste enters sewage or landfill. Biology destroyed.', icon: Trash2, color: 'text-red-500' },
  { step: '05', title: 'Nothing Returns', description: 'Zero nutrients cycle back to the soil. The extraction loop repeats.', icon: XCircle, color: 'text-red-700' },
];

const logisticsCards = [
  { stat: '$4.50-5.00', label: 'Per loaded mile', detail: 'Full truckload transport cost for bulk compost' },
  { stat: '50-75 mi', label: 'Economic range', detail: 'Beyond this, transport exceeds product value' },
  { stat: '$30-40/ton', label: 'Transport cost', detail: 'Often exceeds the sale price of finished compost' },
  { stat: '60-70%', label: 'Water weight', detail: 'You are paying to ship water, not biology' },
];

export default function ProblemPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Hero ── */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-950 to-forest-900" />
          <div className="absolute inset-0 opacity-10">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-red-400 rounded-full"
                style={{ left: `${(i * 5) % 100}%`, top: `${(i * 7.3) % 100}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.1, 0.6, 0.1] }}
                transition={{ duration: 4 + (i % 3), repeat: Infinity, delay: i % 5, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 text-red-300 text-sm font-medium tracking-wider uppercase mb-6 border border-red-500/25">
              <AlertTriangle className="w-4 h-4" />
              The Crisis Below Our Feet
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-[family-name:var(--font-display)]"
          >
            A Civilizational{' '}
            <span className="bg-gradient-to-r from-red-400 to-earth-500 bg-clip-text text-transparent">
              Blind Spot
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-forest-300/80 max-w-3xl mx-auto leading-relaxed"
          >
            We extract nutrients from the soil, ship food to cities, and flush the biology into oblivion.
            Nothing returns. The soil dies. And we call it a supply chain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-red-500/10 border border-red-500/20"
          >
            <DollarSign className="w-6 h-6 text-red-400" />
            <div className="text-left">
              <p className="text-2xl md:text-3xl font-bold text-white font-[family-name:var(--font-display)]">$3.7B</p>
              <p className="text-sm text-red-300/70">Annual agricultural losses from soil degradation in California alone</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <ArrowDown className="w-6 h-6 text-forest-500 mx-auto animate-bounce" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── The Carrot Problem ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Extraction Loop"
            title="The Carrot Problem"
            description="Every carrot tells the story of a broken system. Nutrients leave the soil and never come back."
          />

          <div className="relative mt-12">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-forest-300 via-earth-300 to-red-300 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {extractionSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <ScrollReveal key={step.step} direction="up" delay={i * 0.12}>
                    <motion.div
                      className="relative bg-white rounded-2xl border border-forest-100 p-6 text-center shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                      whileHover={{ y: -4 }}
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-forest-950 text-white text-xs font-bold flex items-center justify-center">
                        {step.step}
                      </div>
                      <div className={`w-14 h-14 mx-auto mt-3 rounded-2xl bg-forest-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 ${step.color}`} />
                      </div>
                      <h3 className="mt-4 font-bold text-forest-900 text-lg">{step.title}</h3>
                      <p className="mt-2 text-sm text-foreground/60 leading-relaxed">{step.description}</p>
                      {i < extractionSteps.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                          <ChevronRight className="w-6 h-6 text-forest-300" />
                        </div>
                      )}
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          <ScrollReveal delay={0.4} className="mt-12 text-center">
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic">
              This is not a waste problem. It is a logistics problem disguised as an environmental one.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Soil Decline Chart ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Soil Health Crisis"
            title="68% Decline Since 1950"
            description="California's agricultural soils have lost two-thirds of their organic matter in just 75 years. The foundation of our food system is eroding."
          />

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-white rounded-2xl shadow-lg border border-forest-100 p-6">
                  <h3 className="text-sm font-semibold text-forest-500 uppercase tracking-wider mb-4">
                    Soil Organic Matter (%) Over Time
                  </h3>
                  <SoilDeclineChart data={soilDeclineData} />
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="bg-white rounded-2xl border border-forest-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                      <TrendingDown className="w-6 h-6 text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-900">From 4.8% to 1.5%</h4>
                      <p className="text-sm text-foreground/60 mt-1">Soil organic matter has plummeted, reducing water retention, nutrient cycling, and crop resilience.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-white rounded-2xl border border-forest-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-earth-500/10 flex items-center justify-center shrink-0">
                      <Leaf className="w-6 h-6 text-earth-500" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-900">Biology Collapse</h4>
                      <p className="text-sm text-foreground/60 mt-1">Healthy soil contains billions of microorganisms per gram. Depleted soils are biologically dead, requiring ever-increasing synthetic inputs.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <div className="bg-white rounded-2xl border border-forest-100 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-forest-50 flex items-center justify-center shrink-0">
                      <Scale className="w-6 h-6 text-forest-700" />
                    </div>
                    <div>
                      <h4 className="font-bold text-forest-900">A Self-Reinforcing Spiral</h4>
                      <p className="text-sm text-foreground/60 mt-1">Less organic matter means less water retention, which means more irrigation, which means more degradation.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waste Infrastructure Gap ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Infrastructure Failure"
            title="7.25 Million Ton Gap"
            description="California mandates 75% organics diversion by 2025. The infrastructure to process it does not exist."
          />

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-2 space-y-5">
              {[
                { label: '23M tons/yr', desc: 'Organic waste generated annually in California' },
                { label: '10M tons/yr', desc: 'Current processing capacity across all facilities' },
                { label: '17.25M tons/yr', desc: 'SB 1383 target for diversion by 2025' },
                { label: '7.25M ton gap', desc: 'Infrastructure shortfall with no clear solution', highlight: true },
              ].map((item, i) => (
                <ScrollReveal key={i} direction="left" delay={i * 0.1}>
                  <div className={`flex items-start gap-4 p-4 rounded-xl ${item.highlight ? 'bg-red-50 border border-red-200' : 'bg-forest-50 border border-forest-100'}`}>
                    <BarChart3 className={`w-5 h-5 mt-0.5 shrink-0 ${item.highlight ? 'text-red-500' : 'text-forest-500'}`} />
                    <div>
                      <p className={`font-bold ${item.highlight ? 'text-red-700' : 'text-forest-900'}`}>{item.label}</p>
                      <p className="text-sm text-foreground/60">{item.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.1}>
                <div className="bg-white rounded-2xl shadow-lg border border-forest-100 p-6">
                  <h3 className="text-sm font-semibold text-forest-500 uppercase tracking-wider mb-4">
                    California Organic Waste Infrastructure
                  </h3>
                  <WasteGapChart data={wasteGapData} />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Water Crisis ── */}
      <section className="py-20 md:py-28 bg-forest-950">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Water & Land Crisis"
            title="The Groundwater Reckoning"
            description="SGMA compliance will fallow hundreds of thousands of acres. Soil that retains more water is the only way to grow more with less."
            dark
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <ScrollReveal>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                <h3 className="text-sm font-semibold text-forest-300 uppercase tracking-wider mb-4">
                  Water Retention by Soil Organic Matter
                </h3>
                <WaterRetentionChart data={waterRetentionData} />
                <p className="mt-4 text-sm text-forest-300/60">
                  Each 1% increase in SOM adds ~20,000 gallons of water retention per acre.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.1}>
                <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                  SGMA Impact Scenarios
                </h3>
                <p className="mt-2 text-forest-300/70 text-sm">
                  The Sustainable Groundwater Management Act will force dramatic changes to California agriculture.
                </p>
              </ScrollReveal>
              {[
                { value: '500K-900K', label: 'Acres Fallowed by 2040', desc: 'Depending on enforcement scenario and water availability', icon: Sprout },
                { value: '$7B', label: 'Annual Economic Impact', desc: 'Lost agricultural output from mandated fallowing', icon: DollarSign },
                { value: '20,000 gal', label: 'Per Acre Per 1% SOM', desc: 'Additional water retention from healthy soil biology', icon: Droplets },
              ].map((card, i) => (
                <ScrollReveal key={i} direction="right" delay={0.15 + i * 0.1}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 flex items-start gap-4"
                    whileHover={{ x: 4, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-forest-500/20 flex items-center justify-center shrink-0">
                      <card.icon className="w-6 h-6 text-forest-300" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">{card.value}</p>
                      <p className="text-sm font-semibold text-forest-300 mt-0.5">{card.label}</p>
                      <p className="text-xs text-forest-300/50 mt-1">{card.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── The Logistics Trap ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="The Economics of Failure"
            title="The Logistics Trap"
            description="Compost is heavy, wet, and low-value. The economics of moving it make large-scale soil restoration impossible."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {logisticsCards.map((card, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <motion.div
                  className="bg-white rounded-2xl border border-forest-100 p-6 text-center h-full shadow-sm"
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(27,67,50,0.12)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto">
                    <Truck className="w-7 h-7 text-red-500" />
                  </div>
                  <p className="mt-5 text-3xl font-bold text-forest-900 font-[family-name:var(--font-display)]">{card.stat}</p>
                  <p className="mt-1 text-sm font-semibold text-forest-700">{card.label}</p>
                  <p className="mt-3 text-sm text-foreground/50 leading-relaxed">{card.detail}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4} className="mt-12">
            <div className="bg-white rounded-2xl border border-forest-100 p-8 max-w-3xl mx-auto text-center">
              <p className="text-lg text-forest-900 font-medium leading-relaxed">
                The result: compost that costs more to deliver than it is worth. Farms cannot afford it.
                Cities cannot mandate it. The system is{' '}
                <span className="font-bold text-red-600">structurally broken</span>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Profitable But Broken ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Perverse Incentives"
            title="Profitable But Broken"
            description="The compost industry's revenue model is inverted. Profit is tied to waste intake, not soil outcomes."
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <ScrollReveal>
              <div className="relative">
                {/* Visual: Revenue Split */}
                <div className="bg-forest-950 rounded-2xl p-8 text-white">
                  <h3 className="text-sm font-semibold text-forest-300 uppercase tracking-wider mb-6">
                    Current Industry Revenue Model
                  </h3>

                  {/* 80/20 Bar */}
                  <div className="mb-8">
                    <div className="flex rounded-xl overflow-hidden h-16">
                      <motion.div
                        className="bg-red-500/80 flex items-center justify-center"
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                      >
                        <span className="text-sm font-bold text-white">80% Tipping Fees</span>
                      </motion.div>
                      <motion.div
                        className="bg-forest-500 flex items-center justify-center"
                        initial={{ width: 0 }}
                        whileInView={{ width: '20%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                      >
                        <span className="text-xs font-bold text-white">20%</span>
                      </motion.div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-forest-300/60">
                      <span>Revenue from accepting waste</span>
                      <span>Revenue from product</span>
                    </div>
                  </div>

                  {/* Key points */}
                  <div className="space-y-3">
                    {[
                      'Paid to take in waste, not to produce results',
                      'Compost quality is an afterthought',
                      'No incentive to invest in biological efficacy',
                      'Farmers receive a commodity, not a solution',
                    ].map((point, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-forest-300/80">
                        <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-6">
              <ScrollReveal direction="right" delay={0.1}>
                <div className="bg-sand-50 rounded-2xl border border-forest-100 p-6">
                  <h3 className="font-bold text-forest-900 text-lg">The Misalignment</h3>
                  <p className="mt-2 text-foreground/60 leading-relaxed">
                    Composters maximize revenue by maximizing intake volume. The quality of the output product
                    is economically irrelevant. This creates a system where waste companies profit while
                    soil continues to degrade.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="bg-sand-50 rounded-2xl border border-forest-100 p-6">
                  <h3 className="font-bold text-forest-900 text-lg">The Consequence</h3>
                  <p className="mt-2 text-foreground/60 leading-relaxed">
                    Billions of dollars flow through waste management annually, yet topsoil loss accelerates.
                    The industry is profitable. The planet is not.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <div className="bg-forest-50 rounded-2xl border border-forest-200 p-6">
                  <h3 className="font-bold text-forest-900 text-lg flex items-center gap-2">
                    <Factory className="w-5 h-5 text-forest-700" />
                    What If The Incentive Changed?
                  </h3>
                  <p className="mt-2 text-foreground/60 leading-relaxed">
                    What if a company got paid for biological function delivered to the field?
                    Not weight moved. Not volume processed. Outcomes.
                  </p>
                </div>
              </ScrollReveal>
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
              There Is Another Way
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] leading-tight">
              The system is broken.{' '}
              <span className="bg-gradient-to-r from-forest-300 to-forest-500 bg-clip-text text-transparent">
                We are building the fix.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-forest-300/70 max-w-2xl mx-auto">
              Ship function, not compost. Process waste where it is generated. Deliver biology, not bulk.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/solution" variant="primary" size="lg">
                See The Solution <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href="/market" variant="outline" size="lg" className="border-white/60 text-white hover:bg-white/15 hover:border-white">
                Explore The Market <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
