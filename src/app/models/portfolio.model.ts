export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Frontend' | 'Mobile' | 'Open Source';
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  yearsOfExperience: number;
  projectsCompleted: number;
}
