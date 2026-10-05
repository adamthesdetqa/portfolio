import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-20 bg-slate-900 text-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs font-semibold tracking-widest uppercase text-indigo-400">Career</h2>
          <p class="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Work Experience</p>
          <p class="mt-4 text-slate-400 text-base">My professional journey and key contributions across organizations.</p>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <!-- Vertical Timeline Line -->
          <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-800"></div>

          <div class="space-y-12">
            @for (exp of experiences(); track exp.company + exp.period; let i = $index) {
              <div class="relative flex flex-col md:flex-row items-start" [class.md:flex-row-reverse]="i % 2 !== 0">

                <!-- Timeline Dot -->
                <div class="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-indigo-500 text-indigo-400 shadow-md">
                  <div class="w-2.5 h-2.5 rounded-full bg-indigo-500"></div>
                </div>

                <!-- Content Card -->
                <div class="ml-12 md:ml-0 md:w-1/2 px-0 md:px-8">
                  <div class="bg-slate-800/60 p-6 rounded-xl border border-slate-700/80 shadow-lg hover:border-indigo-500/50 transition-all">
                    <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span class="text-xs font-semibold text-indigo-400 px-2.5 py-0.5 rounded-full bg-indigo-950/80 border border-indigo-800/50">
                        {{ exp.period }}
                      </span>
                      <span class="text-xs text-slate-400">📍 {{ exp.location }}</span>
                    </div>

                    <h3 class="text-xl font-bold text-white">{{ exp.role }}</h3>
                    <h4 class="text-sm font-semibold text-slate-300 mb-4">{{ exp.company }}</h4>

                    <ul class="space-y-2 mb-6">
                      @for (bullet of exp.description; track bullet) {
                        <li class="text-sm text-slate-400 flex items-start gap-2">
                          <span class="text-indigo-400 mt-1">•</span>
                          <span>{{ bullet }}</span>
                        </li>
                      }
                    </ul>

                    <div class="flex flex-wrap gap-1.5">
                      @for (tech of exp.technologies; track tech) {
                        <span class="text-xs bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-700">
                          {{ tech }}
                        </span>
                      }
                    </div>

                  </div>
                </div>

              </div>
            }
          </div>

        </div>

      </div>
    </section>
  `
})
export class ExperienceComponent {
  portfolioService = inject(PortfolioService);
  experiences = this.portfolioService.experiences;
}
