'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Clock, Sprout, Users, Target, Heart } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

const leadership = [
  {
    initials: 'SH',
    name: '[Founder Name]',
    role: 'CEO & Founder',
    bio: 'Background in agricultural technology and waste infrastructure. Spent a decade studying the disconnect between organic waste generation and soil degradation before founding Fix The Ground to bridge the gap at scale.',
    gradient: 'from-forest-500 to-forest-700',
  },
  {
    initials: 'MR',
    name: '[VP Name]',
    role: 'VP of Operations',
    bio: 'Former operations lead at a major California waste management company. Deep expertise in facility buildout, regulatory compliance, and scaling distributed logistics networks.',
    gradient: 'from-earth-500 to-forest-700',
  },
  {
    initials: 'JT',
    name: '[Partnerships Lead]',
    role: 'Head of Municipal Partnerships',
    bio: 'Previously led municipal sustainability programs for two major California cities. Extensive network across local government, CalRecycle, and environmental agencies.',
    gradient: 'from-forest-700 to-forest-900',
  },
];

const advisors = [
  {
    initials: 'Dr.',
    name: '[Advisor Name]',
    expertise: 'Soil Science',
    affiliation: 'University of California, Davis',
    description: 'Leading researcher in soil microbiology and organic matter dynamics. Published extensively on soil health metrics and amendment efficacy.',
  },
  {
    initials: 'AP',
    name: '[Advisor Name]',
    expertise: 'Agricultural Policy',
    affiliation: 'Former CDFA',
    description: 'Former senior official at the California Department of Food and Agriculture. Architect of key soil health incentive programs.',
  },
  {
    initials: 'LK',
    name: '[Advisor Name]',
    expertise: 'Municipal Waste Management',
    affiliation: 'Industry Consultant',
    description: 'Three decades of experience in municipal waste systems. Advised on SB 1383 implementation strategy for over a dozen California municipalities.',
  },
  {
    initials: 'RN',
    name: '[Advisor Name]',
    expertise: 'Regenerative Finance',
    affiliation: 'Climate Fund',
    description: 'Managing partner at a climate-focused venture fund. Deep expertise in carbon markets, environmental credit structures, and soil carbon monetization.',
  },
];

const openRoles = [
  {
    title: 'VP of Operations',
    type: 'Full-time',
    location: 'California (Hybrid)',
    description: 'Lead facility buildout and daily operations across three pilot sites. Own the operational playbook that scales to 50+ locations.',
    responsibilities: [
      'Oversee construction and commissioning of initial 3 facilities',
      'Develop SOPs for microbial processing and quality control',
      'Build and manage site operations teams',
      'Drive operational efficiency and throughput targets',
    ],
  },
  {
    title: 'Lead Agronomist',
    type: 'Full-time',
    location: 'California',
    description: 'Design and validate soil amendment products. Own the science that makes our output the most effective product on the market.',
    responsibilities: [
      'Develop soil amendment formulations and quality standards',
      'Design and run field trials with partner farms',
      'Build relationships with agricultural extension services',
      'Publish data supporting product efficacy claims',
    ],
  },
  {
    title: 'Site Managers (x3)',
    type: 'Full-time',
    location: 'San Diego / Los Angeles / San Francisco',
    description: 'Run daily operations at a pilot facility. Be the on-the-ground leader who turns the blueprint into reality.',
    responsibilities: [
      'Manage daily facility operations and team of 5-8',
      'Coordinate waste intake scheduling with municipal partners',
      'Monitor processing quality and output metrics',
      'Maintain regulatory compliance and safety standards',
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950" />
        <div className="absolute inset-0 opacity-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-forest-300 rounded-full"
              style={{ left: `${(i * 7) % 100}%`, top: `${(i * 11) % 100}%` }}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i % 3 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-forest-500/15 text-forest-300 text-sm font-medium tracking-widest uppercase mb-8 border border-forest-500/20"
          >
            Our People
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] font-[family-name:var(--font-display)]"
          >
            The Team Behind
            <br />
            <span className="bg-gradient-to-r from-forest-300 to-earth-500 bg-clip-text text-transparent">
              the Mission
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg text-forest-300/70 max-w-xl mx-auto"
          >
            Operators, scientists, and builders working to regenerate soil at scale.
          </motion.p>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Leadership"
            title="Founding Team"
            description="Experienced operators with deep domain expertise in waste infrastructure, agriculture, and municipal systems."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.role} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl border border-forest-100 p-8 hover:shadow-xl hover:border-forest-200 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${person.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                      <span className="text-2xl font-bold text-white tracking-wider">
                        {person.initials}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-forest-900 font-[family-name:var(--font-display)]">
                      {person.name}
                    </h3>
                    <span className="text-sm font-medium text-forest-500 mt-1">
                      {person.role}
                    </span>
                  </div>
                  <p className="text-sm text-foreground/60 leading-relaxed text-center flex-1">
                    {person.bio}
                  </p>
                  <div className="mt-6 pt-6 border-t border-forest-100 flex justify-center">
                    <span className="text-xs text-forest-400 italic">Profile details coming soon</span>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advisory Board ── */}
      <section className="py-24 md:py-32 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Advisors"
            title="Advisory Board"
            description="World-class advisors across soil science, policy, waste management, and climate finance."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {advisors.map((advisor, i) => (
              <ScrollReveal key={advisor.expertise} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-xl border border-forest-100 p-6 hover:shadow-lg hover:border-forest-200 transition-all duration-300 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-forest-100 flex items-center justify-center mb-4">
                    <span className="text-sm font-bold text-forest-700">{advisor.initials}</span>
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-forest-500/10 text-forest-700 text-xs font-semibold mb-3 w-fit">
                    {advisor.expertise}
                  </span>
                  <h3 className="text-base font-bold text-forest-900 mb-1">
                    {advisor.name}
                  </h3>
                  <span className="text-xs text-forest-500 mb-3">{advisor.affiliation}</span>
                  <p className="text-xs text-foreground/50 leading-relaxed flex-1">
                    {advisor.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Hires ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeading
            eyebrow="Join Us"
            title="Key Hires"
            description="We are building the team to execute Phase 1. These are the roles that will define our trajectory."
          />

          <div className="space-y-6 mt-12">
            {openRoles.map((role, i) => (
              <ScrollReveal key={role.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-2xl border border-forest-100 p-8 hover:shadow-lg hover:border-forest-200 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-bold text-forest-900 font-[family-name:var(--font-display)]">
                          {role.title}
                        </h3>
                        <span className="px-2.5 py-0.5 rounded-full bg-forest-500/10 text-forest-700 text-xs font-semibold">
                          {role.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-foreground/50">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} /> {role.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={14} /> Immediate start
                        </span>
                      </div>

                      <p className="text-foreground/60 mb-4">{role.description}</p>

                      <ul className="grid sm:grid-cols-2 gap-2">
                        {role.responsibilities.map((resp) => (
                          <li key={resp} className="flex items-start gap-2 text-sm text-foreground/50">
                            <Briefcase size={14} className="text-forest-500 mt-0.5 flex-shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-shrink-0 md:self-center">
                      <Button href="mailto:careers@fixtheground.com" variant="outline" size="sm">
                        Inquire <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Culture ── */}
      <section className="py-24 md:py-32 bg-forest-950">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <ScrollReveal>
              <span className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-300">
                Culture
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-display)] leading-tight">
                Mission-driven team building
                <br />
                <span className="bg-gradient-to-r from-forest-300 to-earth-500 bg-clip-text text-transparent">
                  mission-critical infrastructure.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-6 text-lg text-forest-300/70 max-w-2xl mx-auto leading-relaxed">
                We are building something that matters. The team we assemble will define whether soil regeneration
                happens at the pace the crisis demands or remains a niche aspiration.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: Sprout, label: 'Purpose First', desc: 'Every role connects directly to soil outcomes.' },
              { icon: Target, label: 'Operator Mindset', desc: 'We build, measure, iterate, and ship.' },
              { icon: Users, label: 'Radical Ownership', desc: 'Small team. Big responsibility. Full trust.' },
              { icon: Heart, label: 'Long-Term Thinking', desc: 'Soil takes time. So does great work.' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} delay={i * 0.1}>
                  <div className="text-center p-6">
                    <div className="w-12 h-12 rounded-xl bg-forest-800/50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-forest-300" size={24} />
                    </div>
                    <h3 className="text-white font-bold mb-2">{item.label}</h3>
                    <p className="text-forest-300/60 text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-forest-900 font-[family-name:var(--font-display)]">
              Want to be part of this?
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Whether you want to join the team or back the mission, we want to hear from you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="mailto:careers@fixtheground.com" variant="primary" size="lg">
                Get in Touch <ArrowRight size={18} />
              </Button>
              <Button href="/investors" variant="outline" size="lg">
                Investor Portal <ArrowRight size={18} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
