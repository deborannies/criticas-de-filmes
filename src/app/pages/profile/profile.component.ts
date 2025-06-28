import { Component , OnInit } from '@angular/core';
import { User } from '../../models/user.model';

import { CommonModule, DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent ,FooterComponent ,CommonModule, DatePipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user: User | null = null;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.user = this.authService.currentUserValue;
  }

  get userInitials(): string {
  if (!this.user) return '';
  const nameInitial = this.user.name?.charAt(0).toUpperCase() || '';
  const surnameInitial = this.user.surname?.charAt(0).toUpperCase() || '';
  return nameInitial + surnameInitial;
}
}
