// ── Market Data ──────────────────────────────────────────────────────

export const crisisStats = [
  { value: 23, suffix: 'M', label: 'Tons of organic waste generated annually in California' },
  { value: 7.25, suffix: 'M', label: 'Ton infrastructure gap in processing capacity' },
  { value: 3.7, suffix: 'B', prefix: '$', label: 'Annual agricultural losses from soil degradation' },
  { value: 68, suffix: '%', label: 'Soil organic matter decline since 1950' },
];

export const tamSamSomData = [
  { name: 'TAM', value: 8.6, label: 'Global Soil Amendment Market', growth: '9.4% CAGR', detail: 'Growing to $13.5B by 2030' },
  { name: 'SAM', value: 2.7, label: 'US Market (North America)', growth: '31% of global', detail: 'Fastest growing region' },
  { name: 'SOM', value: 0.55, label: 'California SB 1383 Gap', growth: 'Immediate demand', detail: '$220-550M incremental market' },
];

export const soilDeclineData = [
  { year: 1950, som: 4.8 },
  { year: 1960, som: 4.3 },
  { year: 1970, som: 3.8 },
  { year: 1980, som: 3.2 },
  { year: 1990, som: 2.7 },
  { year: 2000, som: 2.3 },
  { year: 2010, som: 2.0 },
  { year: 2020, som: 1.7 },
  { year: 2025, som: 1.5 },
];

export const wasteGapData = [
  { name: 'Generated', value: 23, color: '#6B705C' },
  { name: 'Current Capacity', value: 10, color: '#40916C' },
  { name: 'SB 1383 Target', value: 17.25, color: '#52B788' },
  { name: 'Infrastructure Gap', value: 7.25, color: '#CC3333' },
];

export const waterRetentionData = [
  { som: '+0% (Current)', gallons: 0 },
  { som: '+1% SOM', gallons: 20000 },
  { som: '+2% SOM', gallons: 40000 },
  { som: '+3% SOM', gallons: 60000 },
];

export const sgmaData = [
  { scenario: 'Best Case', acres: 500, color: '#52B788' },
  { scenario: 'Expected', acres: 650, color: '#E8A838' },
  { scenario: 'Worst Case', acres: 900, color: '#CC3333' },
];

export const revenueProjectionData = [
  { year: 'Year 1', tipping: 1.35, amendments: 0.3, municipal: 0.15, carbon: 0, facilities: 3 },
  { year: 'Year 2', tipping: 2.7, amendments: 1.2, municipal: 0.6, carbon: 0.1, facilities: 3 },
  { year: 'Year 3', tipping: 5.4, amendments: 3.6, municipal: 1.2, carbon: 0.3, facilities: 6 },
  { year: 'Year 4', tipping: 9.0, amendments: 7.2, municipal: 2.4, carbon: 0.6, facilities: 10 },
  { year: 'Year 5', tipping: 13.5, amendments: 12.0, municipal: 3.6, carbon: 1.2, facilities: 15 },
];

export const profitabilityData = [
  { year: 'Year 1', revenue: 1.8, costs: 2.8 },
  { year: 'Year 2', revenue: 4.6, costs: 3.9 },
  { year: 'Year 3', revenue: 10.5, costs: 7.2 },
  { year: 'Year 4', revenue: 19.2, costs: 12.5 },
  { year: 'Year 5', revenue: 30.3, costs: 18.5 },
];

export const unitEconomicsData = [
  { name: 'Tipping Fees', value: 900, type: 'revenue' },
  { name: 'Amendment Sales', value: 480, type: 'revenue' },
  { name: 'Municipal Contracts', value: 180, type: 'revenue' },
  { name: 'Carbon Credits', value: 40, type: 'revenue' },
  { name: 'Labor', value: 360, type: 'cost' },
  { name: 'Lease & Utilities', value: 240, type: 'cost' },
  { name: 'Inputs & Transport', value: 200, type: 'cost' },
  { name: 'SG&A', value: 100, type: 'cost' },
];

export const useOfFundsData = [
  { name: 'Facility Buildout & Equipment', value: 2.5, color: '#1B4332' },
  { name: 'Operations (18-month runway)', value: 1.2, color: '#2D6A4F' },
  { name: 'Microbial Processing Tech', value: 0.5, color: '#40916C' },
  { name: 'Team Hiring', value: 0.5, color: '#52B788' },
  { name: 'Regulatory & Permitting', value: 0.15, color: '#B7E4C7' },
  { name: 'Working Capital', value: 0.15, color: '#D8F3DC' },
];

export const pilotCities = [
  {
    name: 'San Diego',
    population: '3.3M',
    wasteVolume: '~1.5M tons/yr',
    compliance: 'Early adopter; strong infrastructure',
    proximity: 'Imperial Valley, San Diego County ag',
    strategic: 'Proof of economics in mid-size market',
    capacity: '30-50 tons/day',
    lat: 32.7157,
    lng: -117.1611,
  },
  {
    name: 'Los Angeles',
    population: '13.2M',
    wasteVolume: '~6.5M tons/yr',
    compliance: 'Massive gap; highest volume need',
    proximity: 'Central Valley (3-4 hour haul)',
    strategic: 'Scale validation in largest market',
    capacity: '50-75 tons/day',
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    name: 'San Francisco',
    population: '4.7M',
    wasteVolume: '~2.2M tons/yr',
    compliance: 'Progressive policies; community support',
    proximity: 'Central Valley, Salinas Valley',
    strategic: 'Policy leadership and visibility',
    capacity: '30-50 tons/day',
    lat: 37.7749,
    lng: -122.4194,
  },
];

export const comparisonData = [
  { dimension: 'Processing Location', old: 'Remote, far from waste sources', new: 'Urban-proximate micro-hubs' },
  { dimension: 'Odor Management', old: 'Major barrier; requires isolation', new: 'Eliminated via microbial system' },
  { dimension: 'Transport Burden', old: 'Two full legs (waste out, compost back)', new: 'One short leg (local collection)' },
  { dimension: 'Output Product', old: 'Bulky, wet, low-value compost', new: 'Concentrated biological amendments' },
  { dimension: 'Value Density', old: 'Low (selling weight)', new: 'High (selling function)' },
  { dimension: 'Revenue Model', old: '~80% tipping fees', new: 'Diversified: tipping + amendments + municipal + carbon' },
  { dimension: 'Farm Relationship', old: 'Farmers as afterthought', new: 'Farmers as core customers' },
  { dimension: 'Scalability', old: 'Capital-intensive, permit-heavy', new: 'Modular, replicable, distributed' },
];

export const competitorData = [
  { name: 'Agromin', model: 'Largest CA composter; 21 centralized facilities', funding: 'Private; est. $50M+ rev', limitation: 'Centralized model; same logistics trap' },
  { name: 'Divert', model: 'AI waste prevention + anaerobic digestion', funding: '$1B+ (Enbridge)', limitation: 'Energy output, not soil outcomes' },
  { name: 'Mill', model: 'Home appliance; food-to-chicken-feed', funding: '$100M+ Series C', limitation: 'Consumer hardware; no soil amendment' },
  { name: 'Pivot Bio', model: 'Engineered microbial nitrogen for crops', funding: '$430M Series D', limitation: 'Single nutrient; no composting' },
  { name: 'Locus FS', model: 'Microbial soil health products', funding: '$250M total', limitation: 'Product only; no feedstock capture' },
  { name: 'Recology', model: 'Municipal waste collection & composting', funding: 'Private; $1B+ rev', limitation: 'Traditional hauler; centralized' },
];

export const regulatoryData = [
  { name: 'SB 1383', scope: '75% organics diversion by 2025', impact: 'Creates mandated feedstock supply', icon: 'scale' },
  { name: 'CalRecycle Grants', scope: '$487M committed to infrastructure', impact: 'Non-dilutive capital for buildout', icon: 'banknote' },
  { name: 'CDFA Healthy Soils', scope: '~$12M/year; up to $100K/project', impact: 'Subsidizes farmer adoption', icon: 'sprout' },
  { name: 'USDA IRA Programs', scope: '$19.5B over 5 years', impact: 'Federal co-investment in scale-out', icon: 'landmark' },
  { name: 'Carbon Markets', scope: 'Removal credits $14.80-$20+/ton', impact: 'Additional revenue stream', icon: 'leaf' },
];

export const timelineData = [
  { phase: 'Site Selection & Permitting', start: 0, duration: 4, color: '#1B4332' },
  { phase: 'Facility Design & Buildout', start: 3, duration: 8, color: '#2D6A4F' },
  { phase: 'Equipment & Tech Install', start: 6, duration: 4, color: '#40916C' },
  { phase: 'Team Hiring & Training', start: 4, duration: 5, color: '#52B788' },
  { phase: 'Pilot Operations Launch', start: 9, duration: 3, color: '#E8A838' },
  { phase: 'Data Collection & Optimization', start: 10, duration: 6, color: '#B7E4C7' },
  { phase: 'Performance Reporting', start: 14, duration: 4, color: '#6B705C' },
  { phase: 'Phase 2 Planning', start: 15, duration: 3, color: '#8B6914' },
];

export const milestones = [
  { month: 0, label: 'Close Funding' },
  { month: 4, label: 'Permits Secured' },
  { month: 9, label: 'Operations Begin' },
  { month: 12, label: 'First Revenue' },
  { month: 18, label: 'Pilot Complete' },
];

export const plData = [
  { metric: 'Facilities Operating', y1: '3', y2: '3', y3: '6', y4: '10', y5: '15' },
  { metric: 'Revenue', y1: '$1.8M', y2: '$4.6M', y3: '$10.5M', y4: '$19.2M', y5: '$30.3M' },
  { metric: 'COGS', y1: '($1.5M)', y2: '($2.4M)', y3: '($4.8M)', y4: '($8.0M)', y5: '($11.5M)' },
  { metric: 'Gross Profit', y1: '$0.3M', y2: '$2.2M', y3: '$5.7M', y4: '$11.2M', y5: '$18.8M' },
  { metric: 'Gross Margin', y1: '17%', y2: '48%', y3: '54%', y4: '58%', y5: '62%' },
  { metric: 'Operating Expenses', y1: '($1.3M)', y2: '($1.5M)', y3: '($2.4M)', y4: '($4.5M)', y5: '($7.0M)' },
  { metric: 'EBITDA', y1: '($1.0M)', y2: '$0.7M', y3: '$3.3M', y4: '$6.7M', y5: '$11.8M' },
  { metric: 'EBITDA Margin', y1: 'neg', y2: '15%', y3: '31%', y4: '35%', y5: '39%' },
];

export const riskData = [
  { risk: 'Technology Risk', description: 'Microbial processing may not perform at target specs', mitigation: 'System based on proven biology; pilots validate before scale' },
  { risk: 'Regulatory Risk', description: 'Permitting delays or SB 1383 enforcement changes', mitigation: 'Three-city diversification; strong compliance incentives' },
  { risk: 'Market Adoption', description: 'Farmers slow to adopt new amendments', mitigation: 'Free trials, field demos, performance guarantees' },
  { risk: 'Competitive Response', description: 'Large waste companies enter the space', mitigation: 'First-mover advantage; biological IP; sticky municipal contracts' },
  { risk: 'Execution Risk', description: 'Building 3 facilities simultaneously', mitigation: 'Staggered launch; modular design reduces complexity' },
  { risk: 'Capital Risk', description: 'Costs exceed Phase 1 budget', mitigation: '20% contingency; revenue at Month 12; parallel grant applications' },
];

export const scalingPhases = [
  { phase: 'Phase 1 (Current)', facilities: '3 pilots', raise: '$5M', focus: 'Prove unit economics in 3 California metros' },
  { phase: 'Phase 2', facilities: '10 total', raise: '$15-20M', focus: 'Scale across California; refine product lines' },
  { phase: 'Phase 3', facilities: '25+ total', raise: '$40-50M', focus: 'Multi-state expansion; national partnerships' },
  { phase: 'Phase 4', facilities: '50+ total', raise: 'Growth equity / IPO', focus: 'National infrastructure; international licensing' },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Capture',
    subtitle: 'Urban Organic Waste',
    description: 'Collect organic waste at the source within city limits, eliminating one full leg of the traditional transport chain.',
    icon: 'recycle',
  },
  {
    step: '02',
    title: 'Transform',
    subtitle: 'Odor-Free Processing',
    description: 'Our proprietary microbial system processes waste in urban micro-hubs without odor, dramatically reducing volume while increasing nutrient density.',
    icon: 'flask-conical',
  },
  {
    step: '03',
    title: 'Regenerate',
    subtitle: 'Soil Restoration',
    description: 'Deliver concentrated, biologically active soil amendments to farms at a fraction of traditional compost logistics cost.',
    icon: 'sprout',
  },
];

export const coreValues = [
  { title: 'Regeneration', description: 'We rebuild living soil systems, not just manage waste.', icon: 'leaf' },
  { title: 'Science', description: 'Every decision is grounded in soil biology and data.', icon: 'microscope' },
  { title: 'Scale', description: 'Solutions that work for one farm must work for a million.', icon: 'trending-up' },
  { title: 'Community', description: 'We build with cities, farmers, and people\u2014not around them.', icon: 'users' },
];
