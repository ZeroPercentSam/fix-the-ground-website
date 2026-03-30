'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Lock } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/problem', label: 'The Problem' },
  { href: '/solution', label: 'Solution' },
  { href: '/market', label: 'Market' },
  { href: '/pilot', label: 'Pilot Program' },
  { href: '/team', label: 'Team' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-forest-900 flex items-center justify-center group-hover:bg-forest-700 transition-colors">
                <span className="text-white text-xs font-bold">FTG</span>
              </div>
              <span className="text-lg font-bold text-forest-900 hidden sm:block">
                Fix The Ground
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    pathname === link.href
                      ? 'text-forest-900 bg-forest-100'
                      : 'text-foreground/60 hover:text-forest-900 hover:bg-forest-100/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/investors"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900 text-white text-sm font-medium hover:bg-forest-800 transition-all shadow-lg shadow-forest-900/20 hover:shadow-xl hover:shadow-forest-900/30 hover:-translate-y-0.5"
              >
                <Lock size={14} />
                Investor Access
              </Link>
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-forest-100 transition-colors"
              >
                {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-sand-50 pt-24 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-xl text-lg font-medium transition-colors ${
                      pathname === link.href
                        ? 'text-forest-900 bg-forest-100'
                        : 'text-foreground/60 hover:text-forest-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4"
              >
                <Link
                  href="/investors"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-forest-900 text-white text-lg font-medium"
                >
                  <Lock size={18} />
                  Investor Access
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
