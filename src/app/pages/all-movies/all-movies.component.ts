import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-all-movies',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, RouterModule, NavbarComponent, FooterComponent],
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent {
  movies = [
    { id: 1, title: 'Duna: Parte 2', genre: 'Ação, Drama', rating: 4.8, imageUrl: 'assets/img/duna2.jpg' },
    { id: 2, title: 'Oppenheimer', genre: 'Biografia, Drama', rating: 4.9, imageUrl: 'assets/img/oppenheimer.jpg' },
    { id: 3, title: 'The Father', genre: 'Drama', rating: 4.7, imageUrl: 'assets/img/the-father.jpg'},
    { id: 4, title: 'titanic' , genre: 'Fantasia, Drama', rating: 4.6, imageUrl: 'assets/img/titanic.jpg'},
    { id: 5, title: 'Duna: Parte 2', genre: 'Ação, Drama', rating: 4.8, imageUrl: 'assets/img/duna2.jpg' },
    { id: 6, title: 'Oppenheimer', genre: 'Biografia, Drama', rating: 4.9, imageUrl: 'assets/img/oppenheimer.jpg' },
    { id: 7, title: 'The Father', genre: 'Drama', rating: 4.7, imageUrl: 'assets/img/the-father.jpg'},
    { id: 8, title: 'titanic' , genre: 'Fantasia, Drama', rating: 4.6, imageUrl: 'assets/img/titanic.jpg'}
  ];
}

