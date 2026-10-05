import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="min-h-screen pt-28 pb-16 flex items-center bg-slate-950 text-slate-100 relative overflow-hidden">
      <!-- Background Decorative Blur Circle -->
      <div class="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div class="lg:col-span-7 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/50 text-indigo-300 text-xs sm:text-sm font-medium">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new projects & opportunities
            </div>

            <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">{{ profile().name }}</span>
            </h1>

            <h2 class="text-xl sm:text-2xl font-semibold text-slate-300">
              {{ profile().title }}
            </h2>

            <p class="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {{ profile().subtitle }}
            </p>

            <div class="pt-4 flex flex-wrap gap-4 items-center">
              <a href="#projects" class="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 font-medium text-white shadow-lg shadow-indigo-600/25 transition-all">
                Explore Projects
              </a>
              <a href="#contact" class="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 font-medium text-slate-200 border border-slate-700 transition-all">
                Contact Me
              </a>
            </div>

            <!-- Social Links & Quick Stats -->
            <div class="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6">
              <div>
                <p class="text-2xl sm:text-3xl font-bold text-indigo-400">{{ profile().yearsOfExperience }}+</p>
                <p class="text-xs sm:text-sm text-slate-400">Years Experience</p>
              </div>
              <div>
                <p class="text-2xl sm:text-3xl font-bold text-purple-400">{{ profile().projectsCompleted }}+</p>
                <p class="text-xs sm:text-sm text-slate-400">Projects Delivered</p>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <p class="text-2xl sm:text-3xl font-bold text-emerald-400">100%</p>
                <p class="text-xs sm:text-sm text-slate-400">Code Quality & Precision</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl">
              <div class="w-full h-full bg-slate-900 rounded-xl overflow-hidden relative flex items-center justify-center">
                <img src="https://picsum.photos/seed/developer/800/800" alt="Profile avatar" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div class="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3 rounded-lg border border-slate-700/50 text-xs text-slate-300">
                  📍 {{ profile().location }}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
}
