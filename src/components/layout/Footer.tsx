'use client';

import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Contact', href: 'mailto:info@fixtheground.com' },
  ],
  Learn: [
    { label: 'The Problem', href: '/problem' },
    { label: 'Our Solution', href: '/solution' },
    { label: 'Market Opportunity', href: '/market' },
  ],
  Invest: [
    { label: 'Pilot Program', href: '/pilot' },
    { label: 'Investor Portal', href: '/investors' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-forest-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">FTG</span>
              </div>
              <span className="text-xl font-bold">Fix The Ground</span>
            </div>
            <p className="text-forest-300/70 leading-relaxed max-w-sm">
              Rebuilding California&apos;s soil infrastructure by turning a broken disposal system into a regenerative economic engine.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm text-forest-300/60">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>California, United States</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:info@fixtheground.com" className="hover:text-forest-300 transition-colors">
                  info@fixtheground.com
                </a>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold tracking-wider uppercase text-forest-300/50 mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-forest-300/80 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-forest-300/40">
            &copy; {new Date().getFullYear()} Fix The Ground. All rights reserved.
          </p>
          <p className="text-sm text-forest-300/40">
            Confidential &mdash; Distribution restricted to intended recipients
          </p>
        </div>
      </div>
    </footer>
  );
}
