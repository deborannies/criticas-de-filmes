import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filme/:id', component: MovieDetailsComponent },
  { path: 'filmes', loadComponent: () => import('./pages/all-movies/all-movies.component').then(m => m.AllMoviesComponent)},
  { path: 'noticias', loadComponent: () => import('./pages/cinema-news/cinema-news.component').then(m => m.CinemaNewsComponent)}

];
