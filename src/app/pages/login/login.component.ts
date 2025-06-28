import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router , RouterLink} from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const success = this.authService.login(this.model.email, this.model.password);
    if (success) {
      this.router.navigate(['/']); // Redireciona para a home
    }
  }

  isInvalid(control: any): boolean {
    return !!(control?.invalid && control?.touched);
  }


}
