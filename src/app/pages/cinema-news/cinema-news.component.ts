import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService, News } from '../../services/news.service';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-cinema-news',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <section class="max-w-5xl mx-auto px-4 py-8 bg-[#2A2A2A]">
      <h1 class="text-3xl font-bold text-center text-800 text-white mb-10">Notícias do Cinema</h1>
      
      <div *ngIf="isLoading" class="text-center text-gray-500">Carregando notícias...</div>

      <div *ngIf="!isLoading && news.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let item of news" class="bg-zinc-800 shadow-lg rounded-xl p-5 hover:shadow-xl transition">
          <h2 class="font-semibold text-xl mb-2 text-[#F5EBD1]">{{ item.title }}</h2>
          <p class="text-sm text-neutral-300">{{ item.body }}</p>
        </div>
      </div>

      <div *ngIf="!isLoading && news.length === 0" class="text-center text-red-400 mt-8">
        Nenhuma notícia encontrada.
      </div>
    </section>
    <app-footer></app-footer>
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
