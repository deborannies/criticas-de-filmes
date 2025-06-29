import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})



export class NavbarComponent {
  user: User | null = null;
  private userSubscription!: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userSubscription = this.authService.currentUser.subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    // É uma boa prática cancelar a inscrição para evitar vazamentos de memória
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']); // redireciona para home ou login
  }

  allmovies(){
    this.router.navigate(['filmes']);
  }

}
