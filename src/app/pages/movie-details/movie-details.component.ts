import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReviewCardComponent } from '../../components/review-card/review-card.component';

interface Review {
  reviewer: string;
  rating: number;
  comment: string;
}

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent, FormsModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string | null = null;

  movie = {
    id: '1',
    title: 'The Royal Hotel',
    imageUrl: 'assets/img/cinema.jpg',
    genre: ['Suspense', 'Drama'],
    description: 'No suspense psicológico estrelado por Julia Garner...',
    rating: 92,
    critics: [
      { reviewer: 'Roger Hobbs', rating: 5.0, comment: 'Surpreendente, intenso e provocativo.' },
      { reviewer: 'A.O. Scott', rating: 4.0, comment: 'Condução envolvente e performances fortes.' }
    ]
  };

  audience: Review[] = [];

  newReview: Review = {
    reviewer: '',
    rating: 0,
    comment: ''
  };

  constructor(private route: ActivatedRoute) {
    this.movieId = this.route.snapshot.paramMap.get('id');
  }

  novaReview: string = '';
  novaNota: number = 0;

  enviarReview() {
    const nova = {
      reviewer: 'Você',
      rating: this.novaNota,
      comment: this.novaReview
    };

    this.audience.push(nova);
    localStorage.setItem('avaliacoes', JSON.stringify(this.audience));

    // Limpar o formulário
    this.novaReview = '';
    this.novaNota = 0;
  }


  ngOnInit() {
    const salvas = localStorage.getItem('avaliacoes');
    if (salvas) {
      this.audience = JSON.parse(salvas);
    }
  }

  submitReview() {
    if (this.newReview.reviewer && this.newReview.comment && this.newReview.rating > 0) {
      this.audience.push({ ...this.newReview });
      localStorage.setItem(`reviews-${this.movie.id}`, JSON.stringify(this.audience));
      this.newReview = { reviewer: '', rating: 0, comment: '' };
    }
  }
}