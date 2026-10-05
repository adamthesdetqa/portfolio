import { Component, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-20 bg-slate-950 text-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-xs font-semibold tracking-widest uppercase text-indigo-400">Portfolio</h2>
          <p class="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</p>
          <p class="mt-4 text-slate-400 text-base">Explore recent web applications, design systems, and open source work.</p>
        </div>

        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-2 mb-12">
          @for (cat of categories; track cat) {
            <button
              (click)="selectedCategory.set(cat)"
              [class]="selectedCategory() === cat
                ? 'bg-indigo-600 text-white font-medium px-4 py-2 rounded-lg text-sm transition-all'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white px-4 py-2 rounded-lg text-sm transition-all'">
              {{ cat }}
            </button>
          }
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of filteredProjects(); track project.id) {
            <div class="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all flex flex-col group">
              <div class="relative overflow-hidden aspect-video">
                <img [src]="project.imageUrl" [alt]="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                @if (project.featured) {
                  <span class="absolute top-3 right-3 bg-indigo-600/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-md">
                    Featured
                  </span>
                }
              </div>

              <div class="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span class="text-xs font-semibold text-indigo-400 tracking-wider uppercase">{{ project.category }}</span>
                  <h3 class="text-xl font-bold text-white mt-1 mb-2 group-hover:text-indigo-300 transition-colors">{{ project.title }}</h3>
                  <p class="text-slate-400 text-sm leading-relaxed mb-4">{{ project.description }}</p>
                </div>

                <div>
                  <!-- Tags -->
                  <div class="flex flex-wrap gap-1.5 mb-6">
                    @for (tag of project.tags; track tag) {
                      <span class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50">
                        {{ tag }}
                      </span>
                    }
                  </div>

                  <!-- Links -->
                  <div class="flex items-center gap-4 pt-4 border-t border-slate-800 text-sm">
                    @if (project.demoUrl) {
                      <a [href]="project.demoUrl" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1">
                        Live Demo
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    }
                    @if (project.githubUrl) {
                      <a [href]="project.githubUrl" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-200 font-medium inline-flex items-center gap-1">
                        GitHub
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                      </a>
                    }
                  </div>
                </div>

              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class ProjectsComponent {
  portfolioService = inject(PortfolioService);
  projects = this.portfolioService.projects;

  categories = ['All', 'Full Stack', 'Frontend', 'Mobile', 'Open Source'];
  selectedCategory = signal<string>('All');

  filteredProjects = computed(() => {
    const cat = this.selectedCategory();
    if (cat === 'All') return this.projects();
    return this.projects().filter(p => p.category === cat);
  });
}
