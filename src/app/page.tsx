'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, ArrowRight, Recycle, FlaskConical, Sprout, MapPin, ChevronRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { TamSamSomChart } from '@/components/charts/InteractiveChart';
import { crisisStats, tamSamSomData, howItWorks, pilotCities } from '@/lib/data';

const stepIcons = { 'recycle': Recycle, 'flask-conical': FlaskConical, 'sprout': Sprout };

export default function HomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── Hero Section ── */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-800" />
          <div className="absolute inset-0 opacity-20">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-forest-300 rounded-full"
                style={{ left: `${(i * 3.3) % 100}%`, top: `${(i * 7.7) % 100}%` }}
                animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: (i % 3), ease: 'easeInOut' }}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 to-transparent" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-forest-500/20 text-forest-300 text-sm font-medium tracking-wider uppercase mb-6 border border-forest-500/30">
              Phase 1: $5M Pilot Program
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] font-[family-name:var(--font-display)]"
          >
            Rebuilding California&apos;s
            <br />
            <span className="bg-gradient-to-r from-forest-300 to-forest-500 bg-clip-text text-transparent">
              Soil Infrastructure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg md:text-xl text-forest-300/80 max-w-2xl mx-auto leading-relaxed"
          >
            Turning a 23 million ton waste crisis into a regenerative economic engine.
            Three cities. One mission. The future of food starts in the soil.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="#crisis" variant="primary" size="lg" className="bg-forest-500 hover:bg-forest-700 text-white">
              Learn More <ArrowDown size={18} />
            </Button>
            <Button href="/investors" variant="outline" size="lg" className="border-forest-300/30 text-forest-300 hover:bg-forest-300/10 hover:text-white">
              Investor Access <ArrowRight size={18} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-forest-300/50">
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* ── Crisis Stats ── */}
      <section id="crisis" className="py-20 md:py-28 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-300 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Crisis" title="California's Soil Emergency in Numbers" description="The scale of the problem is staggering. The opportunity is even larger." />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {crisisStats.map((stat, i) => (
              <AnimatedCounter key={i} value={stat.value} prefix={stat.prefix} suffix={stat.suffix} label={stat.label} decimals={stat.value % 1 !== 0 ? 2 : 0} duration={2 + i * 0.3} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Problem → Solution ── */}
      <section className="py-20 md:py-28 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="The Disconnect" title="A Broken Loop That Fix The Ground Repairs" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 mt-12">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm h-full">
                <div className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-4">Current System</div>
                <h3 className="text-2xl font-bold text-forest-900 font-[family-name:var(--font-display)] mb-6">One-Way Extraction</h3>
                <div className="space-y-4">
                  {['Minerals grown in Central Valley soil', 'Harvested and shipped to cities', 'Consumed and flushed into waste systems', 'Chemicalized, landfilled, or lost to ocean'].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-sm font-bold">{i + 1}</span>
                      </div>
                      <p className="text-foreground/70">{step}</p>
                    </div>
                  ))}
                  <div className="mt-4 p-4 rounded-xl bg-red-50 border border-red-100">
                    <p className="text-red-700 font-semibold text-sm">Nothing returns to the soil. The bank account is overdrawn.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-white rounded-2xl p-8 border border-forest-100 shadow-sm h-full">
                <div className="text-sm font-semibold text-forest-500 uppercase tracking-wider mb-4">Fix The Ground Model</div>
                <h3 className="text-2xl font-bold text-forest-900 font-[family-name:var(--font-display)] mb-6">Closed Regenerative Loop</h3>
                <div className="space-y-4">
                  {['Urban organic waste captured at the source', 'Processed in odor-free city micro-hubs', 'Concentrated into high-value amendments', 'Returned to farms as biological fuel'].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-forest-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-forest-700 text-sm font-bold">{i + 1}</span>
                      </div>
                      <p className="text-foreground/70">{step}</p>
                    </div>
                  ))}
                  <div className="mt-4 p-4 rounded-xl bg-forest-50 border border-forest-100">
                    <p className="text-forest-800 font-semibold text-sm">The loop closes. The soil regenerates. The system works.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="Three Steps to Soil Regeneration" description="We don't ship compost. We ship function." />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {howItWorks.map((item, i) => {
              const Icon = stepIcons[item.icon as keyof typeof stepIcons];
              return (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative bg-sand-50 rounded-2xl p-8 border border-forest-100/50 hover:border-forest-300 hover:shadow-xl hover:shadow-forest-900/5 transition-all duration-500">
                    <div className="text-6xl font-bold text-forest-100 absolute top-4 right-6 font-[family-name:var(--font-display)]">{item.step}</div>
                    <div className="w-14 h-14 rounded-2xl bg-forest-900 flex items-center justify-center mb-6 group-hover:bg-forest-700 transition-colors">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-forest-900 font-[family-name:var(--font-display)]">{item.title}</h3>
                    <p className="text-sm font-medium text-forest-500 mt-1">{item.subtitle}</p>
                    <p className="mt-4 text-foreground/60 leading-relaxed">{item.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Market Opportunity ── */}
      <section className="py-20 md:py-28 bg-forest-950 relative grain">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Market Opportunity" title="$8.6 Billion and Growing" description="Fix The Ground sits at the intersection of four converging, multi-billion dollar markets." dark />
          <ScrollReveal>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-10">
              <TamSamSomChart data={tamSamSomData} />
            </div>
          </ScrollReveal>
          <div className="mt-8 text-center">
            <Button href="/market" variant="outline" className="border-forest-300/30 text-forest-300 hover:bg-forest-300/10 hover:text-white">
              Explore Full Market Analysis <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ── Three-City Pilot ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Phase 1 Pilot" title="Three Cities. One Proof Point." description="San Diego, Los Angeles, and San Francisco — proving the model in California's hardest markets." />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {pilotCities.map((city, i) => (
              <ScrollReveal key={city.name} delay={i * 0.15}>
                <motion.div whileHover={{ y: -4 }} className="bg-sand-50 rounded-2xl p-6 border border-forest-100/50 hover:border-forest-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-forest-900">{city.name}</h3>
                      <span className="text-sm text-foreground/50">{city.population} metro</span>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div><span className="text-foreground/50">Waste Volume</span><p className="font-semibold text-forest-900">{city.wasteVolume}</p></div>
                    <div><span className="text-foreground/50">Target Capacity</span><p className="font-semibold text-forest-900">{city.capacity}</p></div>
                    <div><span className="text-foreground/50">Strategic Value</span><p className="font-semibold text-forest-800">{city.strategic}</p></div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/pilot">View Full Pilot Program <ChevronRight size={16} /></Button>
          </div>
        </div>
      </section>

      {/* ── Quote / CTA ── */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-sand-50 to-sand-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-forest-900 leading-snug font-[family-name:var(--font-display)]">
              &ldquo;Organic biomass is the world&apos;s largest unrealized asset class.&rdquo;
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-lg text-foreground/60 max-w-2xl mx-auto">
              The question is no longer whether the closed food loop needs to be rebuilt. It does. The question is whether we rebuild it intentionally now.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/investors" size="lg">Access Investor Portal <ArrowRight size={18} /></Button>
              <Button href="/problem" variant="outline" size="lg">Read the Full Story</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
