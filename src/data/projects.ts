export interface Project {
  id: string;
  name: string;
  company: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  status: 'live' | 'in-development' | 'completed';
  platforms: ('ios' | 'android' | 'web' | 'desktop')[];
  metrics?: {
    label: string;
    value: string;
  }[];
  links?: {
    live?: string;
    github?: string;
    appStore?: string;
    playStore?: string;
  };
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'fairshop-marketplace',
    name: 'FairShop Marketplace',
    company: 'Anter Technologies',
    description: 'Complete e-commerce marketplace mobile application connecting buyers and sellers.',
    longDescription: 'A full-featured e-commerce marketplace mobile application that connects buyers and sellers for seamless shopping experiences. Built with React Native and TypeScript, featuring real-time product browsing, secure checkout, and intuitive user interface.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Native Modules'],
    features: [
      'Real-time product browsing',
      'Secure checkout functionality',
      'User authentication',
      'Push notifications',
      'Order tracking',
    ],
    status: 'live',
    platforms: ['ios', 'android'],
    metrics: [
      { label: 'Platforms', value: '2' },
      { label: 'Status', value: 'LIVE' },
      { label: 'Type', value: 'E-commerce' },
    ],
  },
  {
    id: 'fairshop-admin',
    name: 'FairShop Admin',
    company: 'Anter Technologies',
    description: 'Administrative mobile application for managing marketplace platform and operations.',
    longDescription: 'A comprehensive admin dashboard accessible on mobile devices for managing the FairShop marketplace platform. Features real-time inventory management, order processing, and vendor management capabilities.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'Native Modules'],
    features: [
      'Inventory management',
      'Order processing',
      'Vendor management',
      'Analytics dashboard',
      'Real-time updates',
    ],
    status: 'live',
    platforms: ['ios', 'android'],
    metrics: [
      { label: 'Platforms', value: '2' },
      { label: 'Status', value: 'LIVE' },
      { label: 'Type', value: 'Admin' },
    ],
  },
  {
    id: 'controlfind',
    name: 'ControlFind',
    company: 'Anter Technologies',
    description: 'Web application connecting companies with recruiters for efficient talent acquisition.',
    longDescription: 'A streamlined recruitment platform that bridges the gap between businesses and recruitment professionals. Built with Next.js and TypeScript, featuring efficient talent matching and application management.',
    technologies: ['Next.js', 'TypeScript', 'React'],
    features: [
      'Company-recruiter matching',
      'Application management',
      'Talent search',
      'Interview scheduling',
      'Analytics',
    ],
    status: 'live',
    platforms: ['web'],
    metrics: [
      { label: 'Platform', value: 'WEB' },
      { label: 'Status', value: 'LIVE' },
      { label: 'Type', value: 'SaaS' },
    ],
    links: {
      live: 'https://controlfindtalent.com',
    },
  },
  {
    id: 'credlock-foneflex',
    name: 'CredLock FoneFlex',
    company: 'Credlock-Africa',
    description: 'Mobile application for loan management and financial services across Africa.',
    longDescription: 'A comprehensive mobile loan management system enabling seamless loan processing and customer account management. Built for fintech operations serving customers across Africa with real-time transaction processing.',
    technologies: ['React Native', 'Capacitor', 'Ionic', 'TypeScript'],
    features: [
      'Loan application processing',
      'Customer account management',
      'Real-time transaction tracking',
      'Credit scoring integration',
      'Payment processing',
    ],
    status: 'live',
    platforms: ['ios', 'android'],
    metrics: [
      { label: 'Platforms', value: '2' },
      { label: 'Status', value: 'LIVE' },
      { label: 'Type', value: 'Fintech' },
    ],
  },
  {
    id: 'credlock-business',
    name: 'CredLock Business',
    company: 'Credlock-Africa',
    description: 'Mobile application for business operations and merchant management.',
    longDescription: 'A business-focused mobile solution for merchant operations within the CredLock ecosystem. Features integrated financial management, reporting tools, and seamless business service management.',
    technologies: ['React Native', 'Capacitor', 'Ionic', 'TypeScript'],
    features: [
      'Merchant account management',
      'Financial reporting',
      'Business analytics',
      'Transaction management',
      'Invoice processing',
    ],
    status: 'live',
    platforms: ['ios', 'android'],
    metrics: [
      { label: 'Platforms', value: '2' },
      { label: 'Status', value: 'LIVE' },
      { label: 'Type', value: 'Fintech' },
    ],
  },
  {
    id: 'credlock-agents',
    name: 'CredLock Agents',
    company: 'Credlock-Africa',
    description: 'Desktop application empowering field agents to process loans and manage transactions.',
    longDescription: 'A desktop solution for field agents and loan officers enabling real-time loan processing and customer onboarding. Built with Electron for reliable performance in remote locations across Africa.',
    technologies: ['Electron', 'React', 'TypeScript'],
    features: [
      'Agent loan processing',
      'Customer onboarding',
      'KYC verification',
      'Offline capability',
      'Transaction syncing',
    ],
    status: 'live',
    platforms: ['desktop'],
    metrics: [
      { label: 'Platform', value: 'DESKTOP' },
      { label: 'Status', value: 'LIVE' },
      { label: 'Type', value: 'Fintech' },
    ],
  },
  {
    id: 'credlock-loan-origination',
    name: 'CredLock Loan Origination System',
    company: 'Credlock-Africa',
    description: 'Contributed to building a comprehensive loan origination platform for processing and approving loan applications.',
    longDescription: 'Assisted in developing a robust loan origination system that streamlines the entire loan application process from submission to approval. Features automated credit assessment, document verification, and approval workflows.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    features: [
      'Automated credit assessment',
      'Document verification',
      'Approval workflows',
      'Risk scoring',
      'Compliance checks',
    ],
    status: 'live',
    platforms: ['web'],
    metrics: [
      { label: 'Platform', value: 'WEB' },
      { label: 'Role', value: 'CONTRIB' },
      { label: 'Type', value: 'Fintech' },
    ],
  },
  {
    id: 'credlock-collections',
    name: 'CredLock Collections Manager',
    company: 'Credlock-Africa',
    description: 'Contributed to building a loan collections and recovery management system for tracking repayments.',
    longDescription: 'Assisted in developing a specialized collections management system for tracking loan repayments, managing delinquent accounts, and automating recovery workflows. Helps maintain healthy portfolio performance.',
    technologies: ['React', 'TypeScript', 'Node.js'],
    features: [
      'Repayment tracking',
      'Delinquency management',
      'Automated reminders',
      'Recovery workflows',
      'Portfolio analytics',
    ],
    status: 'live',
    platforms: ['web'],
    metrics: [
      { label: 'Platform', value: 'WEB' },
      { label: 'Role', value: 'CONTRIB' },
      { label: 'Type', value: 'Fintech' },
    ],
  },
  {
    id: 'credlock-loan-management',
    name: 'CredLock Loan Management System',
    company: 'Credlock-Africa',
    description: 'New comprehensive loan management system currently in development.',
    longDescription: 'Building the front-end for a new comprehensive loan management system that will serve as the core platform for all CredLock lending operations. Features modern UI/UX and seamless integration with existing services.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Modern loan dashboard',
      'Customer management',
      'Loan lifecycle tracking',
      'Reporting & analytics',
      'Integration APIs',
    ],
    status: 'in-development',
    platforms: ['web'],
    metrics: [
      { label: 'Platform', value: 'WEB' },
      { label: 'Role', value: 'FRONTEND' },
      { label: 'Type', value: 'Fintech' },
    ],
  },
];

export const certifications = [
  {
    id: 'cs50-intro',
    name: "CS50's Introduction to Computer Science",
    issuer: 'Harvard University (edX)',
    icon: '🎓',
    verified: true,
  },
  {
    id: 'cs50-python',
    name: "CS50's Introduction to Programming with Python",
    issuer: 'Harvard University (edX)',
    icon: '🐍',
    verified: true,
  },
  {
    id: 'cs50-web',
    name: "CS50's Web Programming with Python and JavaScript",
    issuer: 'Harvard University (edX)',
    icon: '🌐',
    verified: true,
  },
  {
    id: 'fcc-responsive',
    name: 'Responsive Web Design Certificate',
    issuer: 'FreeCodeCamp',
    icon: '📱',
    verified: true,
  },
  {
    id: 'fcc-js',
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'FreeCodeCamp',
    icon: '⚡',
    verified: true,
  },
];

