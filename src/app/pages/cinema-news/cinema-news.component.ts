import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, News } from '../../services/news.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cinema-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="max-w-5xl mx-auto px-4 py-8">
      <h1 class="text-3xl font-bold text-center text-gray-800 mb-10">Notícias do Cinema</h1>
      
      <div *ngIf="isLoading" class="text-center text-gray-500">Carregando notícias...</div>

      <div *ngIf="!isLoading && news.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let item of news" class="bg-white shadow-lg rounded-xl p-5 hover:shadow-xl transition">
          <h2 class="font-semibold text-xl mb-2 text-gray-800">{{ item.title }}</h2>
          <p class="text-sm text-gray-600">{{ item.body }}</p>
        </div>
      </div>

      <div *ngIf="!isLoading && news.length === 0" class="text-center text-red-400 mt-8">
        Nenhuma notícia encontrada.
      </div>
    </section>
  `
})
export class CinemaNewsComponent implements OnInit {
  news: News[] = [];
  isLoading = true;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe({
      next: (data) => {
        this.news = data.slice(0, 6);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Erro ao carregar as notícias.');
      }
    });
  }
}
