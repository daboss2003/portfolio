export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: 'fintech' | 'tech' | 'internship';
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 'credlock',
    role: 'Software Developer',
    company: 'Credlock-Africa',
    location: 'Nigeria',
    period: 'Jan 2025 - Present',
    duration: 'Current',
    description: [
      'Built CredLock FoneFlex & CredLock Business mobile applications using React Native, Capacitor, and Ionic',
      'Developed CredLock Agents desktop application for field agents using Electron',
      'Contributed to loan origination and collections management systems',
      'Currently building the front-end for a new comprehensive loan management system',
    ],
    technologies: ['React Native', 'Capacitor', 'Ionic', 'Electron', 'TypeScript'],
    type: 'fintech',
    isCurrent: true,
  },
  {
    id: 'anter-dev',
    role: 'Software Developer',
    company: 'Anter Technologies',
    location: 'Nigeria',
    period: '2024',
    duration: '3 months',
    description: [
      'Built FairShop Marketplace mobile application using React Native, TypeScript, and Expo',
      'Developed FairShop Admin mobile application for marketplace management and operations',
      'Created ControlFind web application using Next.js and TypeScript',
      'Successfully deployed multiple production applications to iOS App Store and Google Play Store',
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'Next.js'],
    type: 'tech',
  },
  {
    id: 'anter-intern',
    role: 'Software Development Intern',
    company: 'Anter Technologies',
    location: 'Nigeria',
    period: '2023 - 2024',
    duration: '6 months',
    description: [
      'Completed intensive developer training program and transitioned to full development role',
      'Gained hands-on experience in mobile and web application development',
      'Developed proficiency in Git version control and agile development methodologies',
    ],
    technologies: ['React Native', 'TypeScript', 'Git'],
    type: 'internship',
  },
];

