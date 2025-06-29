import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { LoginComponent } from "../app/pages/login/login.component";
import { RegisterComponent } from "../app/pages/register/register.component";
import { AboutComponent } from "../app/pages/about/about.component";
import { HomeComponent } from "../app/pages/home/home.component";
import { ProfileComponent } from "../app/pages/profile/profile.component";
import { authGuard } from './guards/auth.guard';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';


export const routes: Routes = [
  {path:'' , component : HomeComponent},  
  {path:'login' , component : LoginComponent},
  {path:'register' , component : RegisterComponent},
  {path:'about' , component : AboutComponent},
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [authGuard]
  },
  { path: 'filme/:id', component: MovieDetailsComponent },
  { path: 'filmes', loadComponent: () => import('./pages/all-movies/all-movies.component').then(m => m.AllMoviesComponent)},
  { path: 'noticias', loadComponent: () => import('./pages/cinema-news/cinema-news.component').then(m => m.CinemaNewsComponent)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}