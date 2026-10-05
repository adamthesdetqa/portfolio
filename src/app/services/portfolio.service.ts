import { Injectable, signal } from '@angular/core';
import { Profile, Project, SkillCategory, Experience } from '../models/portfolio.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  readonly profile = signal<Profile>({
    name: 'Alex Morgan',
    title: 'Senior Software Engineer & Frontend Architect',
    subtitle: 'Crafting high-performance web applications with Angular & modern web technologies',
    bio: 'Passionate software engineer with 6+ years of experience building scalable, accessible, and user-centric web applications. Specialized in modern Angular ecosystem, reactive architecture, and responsive design systems.',
    location: 'San Francisco, CA (Open to Remote)',
    email: 'alex.morgan@example.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    yearsOfExperience: 6,
    projectsCompleted: 24
  });

  readonly projects = signal<Project[]>([
    {
      id: '1',
      title: 'DevDash - Developer Analytics Platform',
      description: 'A real-time dashboard for developer metrics, PR tracking, and team productivity insights.',
      category: 'Full Stack',
      tags: ['Angular', 'RxJS', 'Tailwind CSS', 'Node.js', 'Chart.js'],
      imageUrl: 'https://picsum.photos/seed/devdash/600/400',
      demoUrl: 'https://example.com/devdash',
      githubUrl: 'https://github.com/example/devdash',
      featured: true
    },
    {
      id: '2',
      title: 'Nexus UI Component Design System',
      description: 'Accessible, customizable Angular 19 component library built with Tailwind CSS v4.',
      category: 'Frontend',
      tags: ['Angular 19', 'Tailwind CSS', 'Storybook', 'TypeScript'],
      imageUrl: 'https://picsum.photos/seed/nexusui/600/400',
      demoUrl: 'https://example.com/nexus-ui',
      githubUrl: 'https://github.com/example/nexus-ui',
      featured: true
    },
    {
      id: '3',
      title: 'CloudFlow - Visual Workflow Builder',
      description: 'Interactive drag-and-drop workflow canvas for automation and cloud orchestrations.',
      category: 'Full Stack',
      tags: ['Angular', 'NgRx', 'TypeScript', 'WebSockets', 'Tailwind CSS'],
      imageUrl: 'https://picsum.photos/seed/cloudflow/600/400',
      demoUrl: 'https://example.com/cloudflow',
      githubUrl: 'https://github.com/example/cloudflow',
      featured: true
    },
    {
      id: '4',
      title: 'EcoTrack Mobile Companion App',
      description: 'Cross-platform progressive web application for tracking daily carbon footprint and sustainability goals.',
      category: 'Mobile',
      tags: ['Angular', 'PWA', 'Tailwind CSS', 'IndexedDB'],
      imageUrl: 'https://picsum.photos/seed/ecotrack/600/400',
      demoUrl: 'https://example.com/ecotrack',
      githubUrl: 'https://github.com/example/ecotrack',
      featured: false
    },
    {
      id: '5',
      title: 'ngx-signal-store (Open Source Library)',
      description: 'Lightweight state management extension library for Angular Signals.',
      category: 'Open Source',
      tags: ['Angular', 'TypeScript', 'npm', 'RxJS'],
      imageUrl: 'https://picsum.photos/seed/ngxsignal/600/400',
      demoUrl: 'https://npmjs.com',
      githubUrl: 'https://github.com/example/ngx-signal-store',
      featured: false
    }
  ]);

  readonly skills = signal<SkillCategory[]>([
    {
      category: 'Frontend Development',
      skills: [
        { name: 'Angular / TypeScript', level: 95 },
        { name: 'RxJS & Angular Signals', level: 90 },
        { name: 'HTML5 / CSS3 / SASS', level: 95 },
        { name: 'Tailwind CSS v4', level: 92 },
        { name: 'State Management (NgRx/Signals)', level: 88 }
      ]
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'Node.js & Express', level: 82 },
        { name: 'RESTful & GraphQL APIs', level: 85 },
        { name: 'PostgreSQL / MongoDB', level: 78 }
      ]
    },
    {
      category: 'Tools & Testing',
      skills: [
        { name: 'Git & GitHub Actions CI/CD', level: 90 },
        { name: 'Jasmine / Karma / Cypress', level: 85 },
        { name: 'pnpm / npm / Webpack / Vite', level: 88 }
      ]
    }
  ]);

  readonly experiences = signal<Experience[]>([
    {
      company: 'TechCorp Solutions',
      role: 'Senior Frontend Engineer',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description: [
        'Led modernizing the core Angular application suite, improving initial load time by 40% and upgrading to latest Angular versions.',
        'Architected a shared design system with Tailwind CSS used across 5 engineering product teams.',
        'Mentored junior engineers and conducted weekly frontend technical sharing sessions.'
      ],
      technologies: ['Angular 18/19', 'TypeScript', 'Tailwind CSS', 'RxJS', 'NgRx', 'Cypress']
    },
    {
      company: 'Digital Wave Interactive',
      role: 'Frontend Web Developer',
      period: '2020 - 2022',
      location: 'Austin, TX',
      description: [
        'Built dynamic client-facing web portals for enterprise clients using Angular and Sass.',
        'Integrated REST services with reactive state handling and optimized rendering performance for large datasets.',
        'Collaborated directly with UI/UX designers to translate Figma mockups into pixel-perfect frontend layouts.'
      ],
      technologies: ['Angular', 'RxJS', 'Sass', 'REST APIs', 'Jasmine']
    },
    {
      company: 'Innovate Studio',
      role: 'Junior Web Developer',
      period: '2018 - 2020',
      location: 'Seattle, WA',
      description: [
        'Developed responsive landing pages, interactive forms, and client dashboards.',
        'Participated in code reviews, bug fixes, and automated test coverage expansion.'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Angular', 'Git']
    }
  ]);
}
