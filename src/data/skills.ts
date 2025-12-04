export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
  color: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  label: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'web',
    label: 'WEB SECTOR',
    color: '#00ff88',
    skills: [
      { name: 'React', level: 95, category: 'web', color: '#61DAFB' },
      { name: 'Next.js', level: 90, category: 'web', color: '#ffffff' },
      { name: 'TypeScript', level: 92, category: 'web', color: '#3178C6' },
      { name: 'JavaScript', level: 95, category: 'web', color: '#F7DF1E' },
      { name: 'Tailwind CSS', level: 90, category: 'web', color: '#38B2AC' },
      { name: 'HTML5/CSS3', level: 95, category: 'web', color: '#E34F26' },
      { name: 'Vite', level: 88, category: 'web', color: '#646CFF' },
    ],
  },
  {
    name: 'mobile',
    label: 'MOBILE SECTOR',
    color: '#ffb800',
    skills: [
      { name: 'React Native', level: 92, category: 'mobile', color: '#61DAFB' },
      { name: 'Expo', level: 88, category: 'mobile', color: '#000020' },
      { name: 'Capacitor', level: 85, category: 'mobile', color: '#119EFF' },
      { name: 'Ionic', level: 82, category: 'mobile', color: '#3880FF' },
      { name: 'Kotlin', level: 70, category: 'mobile', color: '#7F52FF' },
      { name: 'SwiftUI', level: 65, category: 'mobile', color: '#FA7343' },
    ],
  },
  {
    name: 'desktop',
    label: 'DESKTOP SECTOR',
    color: '#3b82f6',
    skills: [
      { name: 'Electron', level: 85, category: 'desktop', color: '#47848F' },
    ],
  },
  {
    name: 'backend',
    label: 'BACKEND SECTOR',
    color: '#a855f7',
    skills: [
      { name: 'Node.js', level: 85, category: 'backend', color: '#339933' },
      { name: 'Express', level: 82, category: 'backend', color: '#ffffff' },
      { name: 'Python', level: 78, category: 'backend', color: '#3776AB' },
      { name: 'Django', level: 70, category: 'backend', color: '#092E20' },
      { name: 'Flask', level: 68, category: 'backend', color: '#ffffff' },
    ],
  },
  {
    name: 'tools',
    label: 'DEV TOOLS',
    color: '#00d4ff',
    skills: [
      { name: 'Git', level: 90, category: 'tools', color: '#F05032' },
      { name: 'VS Code', level: 95, category: 'tools', color: '#007ACC' },
      { name: 'Figma', level: 80, category: 'tools', color: '#F24E1E' },
      { name: 'Android Studio', level: 80, category: 'tools', color: '#3DDC84' },
      { name: 'Xcode', level: 75, category: 'tools', color: '#147EFB' },
    ],
  },
];

export const stats = [
  { label: 'APPS DEPLOYED', value: '5+', prefix: '' },
  { label: 'YEARS CODING', value: '3+', prefix: '' },
  { label: 'PLATFORMS', value: '3', prefix: '' },
  { label: 'CERTIFICATIONS', value: '5', prefix: '' },
];

