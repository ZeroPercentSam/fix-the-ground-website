'use client';

import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignment} mb-12 md:mb-16`}>
      {eyebrow && (
        <ScrollReveal>
          <span className={`text-sm font-semibold tracking-[0.2em] uppercase ${dark ? 'text-forest-300' : 'text-forest-500'}`}>
            {eyebrow}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className={`mt-3 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight font-[family-name:var(--font-display)] ${dark ? 'text-white' : 'text-forest-900'}`}>
          {title}
        </h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p className={`mt-4 text-lg md:text-xl leading-relaxed ${dark ? 'text-forest-300/80' : 'text-foreground/60'}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
