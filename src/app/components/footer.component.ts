import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-slate-900 border-t border-slate-800 text-slate-400 py-10">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div class="flex items-center gap-2 text-white font-bold text-lg">
          <span class="p-1 bg-indigo-600 rounded text-xs font-mono">&lt;/&gt;</span>
          <span>{{ profile().name }}</span>
        </div>

        <div class="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a href="#hero" class="hover:text-white transition-colors">Home</a>
          <a href="#about" class="hover:text-white transition-colors">About</a>
          <a href="#projects" class="hover:text-white transition-colors">Projects</a>
          <a href="#experience" class="hover:text-white transition-colors">Experience</a>
          <a href="#contact" class="hover:text-white transition-colors">Contact</a>
        </div>

        <p class="text-xs text-slate-500">
          © {{ currentYear }} {{ profile().name }}. Built with Angular 19 & Tailwind CSS.
        </p>

      </div>
    </footer>
  `
})
export class FooterComponent {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
  currentYear = new Date().getFullYear();
}
