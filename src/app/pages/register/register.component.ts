import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  model: any = {};  // Agora estamos usando `model`, conforme o HTML.

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const success = this.authService.register({
      name: this.model.name,
      surname: this.model.surname,
      email: this.model.email,
      password_plain: this.model.password
    });
    
    if (success) {
      this.router.navigate(['/login']);
    }
  }

  isInvalid(control: any): boolean {
    return !!(control?.invalid && control?.touched);
  }
}
