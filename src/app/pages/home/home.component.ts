import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SectionTitleComponent } from '../../components/section-title/section-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MovieCardComponent,
    SearchBarComponent,
    SectionTitleComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  featuredMovies = [
    {
      id: 1,
      title: 'Duna: Parte 2',
      imageUrl: 'assets/img/duna2.jpg',
      genre: 'Ação, Drama',
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Oppenheimer',
      imageUrl: 'assets/img/oppenheimer.jpg',
      genre: 'Biografia, Drama',
      rating: 4.9,
    },
    {
      id: 4,
      title: 'The Father',
      imageUrl: 'assets/img/the-father.jpg',
      genre: 'Drama',
      rating: 4.7,
    },
    {
      id: 5,
      title: 'Titanic',
      imageUrl: 'assets/img/titanic.jpg',
      genre: 'Romance, Drama',
      rating: 4.6,
    },
  ];
}
