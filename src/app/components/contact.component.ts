import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="py-20 bg-slate-950 text-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-xs font-semibold tracking-widest uppercase text-indigo-400">Contact</h2>
          <p class="mt-2 text-3xl sm:text-4xl font-extrabold text-white">Let's Connect</p>
          <p class="mt-4 text-slate-400 text-base">Have a project in mind, a question, or just want to say hello? Drop me a message below.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">

          <!-- Contact Info Sidebar -->
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-slate-900 p-6 rounded-xl border border-slate-800 space-y-6">
              <h3 class="text-xl font-bold text-white mb-4">Contact Information</h3>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-indigo-950 text-indigo-400 rounded-lg border border-indigo-800/50">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</p>
                  <a [href]="'mailto:' + profile().email" class="text-base font-medium text-slate-200 hover:text-indigo-400 transition-colors">
                    {{ profile().email }}
                  </a>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="p-3 bg-indigo-950 text-indigo-400 rounded-lg border border-indigo-800/50">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                </div>
                <div>
                  <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                  <p class="text-base font-medium text-slate-200">{{ profile().location }}</p>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-800">
                <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Profiles</p>
                <div class="flex gap-3">
                  <a [href]="profile().github" target="_blank" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors">
                    GitHub
                  </a>
                  <a [href]="profile().linkedin" target="_blank" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-sm font-medium transition-colors">
                    LinkedIn
                  </a>
                </div>
              </div>

            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-7">
            <div class="bg-slate-900 p-8 rounded-xl border border-slate-800">
              @if (submitted()) {
                <div class="p-6 bg-emerald-950/80 border border-emerald-800 text-emerald-200 rounded-xl text-center space-y-3">
                  <div class="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mx-auto text-emerald-300">
                    ✓
                  </div>
                  <h4 class="text-xl font-bold">Message Sent Successfully!</h4>
                  <p class="text-sm text-emerald-300">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  <button (click)="submitted.set(false)" class="mt-4 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium">
                    Send Another Message
                  </button>
                </div>
              } @else {
                <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      [(ngModel)]="formData.name"
                      required
                      class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="Jane Doe">
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-slate-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      email
                      class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="jane@example.com">
                  </div>

                  <div>
                    <label for="message" class="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      [(ngModel)]="formData.message"
                      required
                      class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
                      placeholder="Tell me about your project or inquiry..."></textarea>
                  </div>

                  <button
                    type="submit"
                    [disabled]="!contactForm.form.valid"
                    class="w-full py-3.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white font-medium shadow-lg shadow-indigo-600/20 transition-all cursor-pointer disabled:cursor-not-allowed">
                    Send Message
                  </button>
                </form>
              }
            </div>
          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  portfolioService = inject(PortfolioService);
  profile = this.portfolioService.profile;

  submitted = signal(false);
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    this.submitted.set(true);
    this.formData = { name: '', email: '', message: '' };
  }
}
