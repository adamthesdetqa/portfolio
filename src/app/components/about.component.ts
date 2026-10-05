import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-20 bg-slate-900 text-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs font-semibold tracking-widest uppercase text-indigo-400">About Me</h2>
          <p class="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Skills, Expertise & Passion</p>
          <p class="mt-4 text-slate-400 text-base sm:text-lg">
            {{ profile().bio }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          @for (category of skillCategories(); track category.category) {
            <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700/60 shadow-lg hover:border-indigo-500/50 transition-all">
              <h3 class="text-xl font-bold text-indigo-300 mb-6 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-indigo-500"></span>
                {{ category.category }}
              </h3>

              <div class="space-y-4">
                @for (skill of category.skills; track skill.name) {
                  <div>
                    <div class="flex justify-between text-sm font-medium mb-1">
                      <span class="text-slate-200">{{ skill.name }}</span>
                      <span class="text-slate-400">{{ skill.level }}%</span>
                    </div>
                    <div class="w-full bg-slate-700 rounded-full h-2">
                      <div class="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" [style.width.%]="skill.level"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class AboutComponent {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
  skillCategories = this.portfolioService.skills;
}
