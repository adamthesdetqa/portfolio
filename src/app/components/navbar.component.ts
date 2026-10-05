import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-slate-100 transition-all">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="#hero" class="text-xl font-bold tracking-tight text-white hover:text-indigo-400 transition-colors flex items-center gap-2">
            <span class="p-1.5 bg-indigo-600 rounded-lg text-white font-mono text-sm">&lt;/&gt;</span>
            <span>{{ profile().name }}</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#about" class="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">About</a>
            <a href="#projects" class="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#experience" class="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">Experience</a>
            <a href="#contact" class="px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors shadow-sm">Get in Touch</a>
          </div>

          <!-- Mobile Hamburger Button -->
          <button (click)="toggleMenu()" class="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none" aria-label="Toggle menu">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              @if (!mobileMenuOpen()) {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              } @else {
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              }
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <a (click)="closeMenu()" href="#about" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">About</a>
          <a (click)="closeMenu()" href="#projects" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Projects</a>
          <a (click)="closeMenu()" href="#experience" class="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800">Experience</a>
          <a (click)="closeMenu()" href="#contact" class="block text-center px-3 py-2 rounded-md text-base font-medium bg-indigo-600 hover:bg-indigo-500 text-white">Get in Touch</a>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;
  mobileMenuOpen = signal(false);

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }
}
