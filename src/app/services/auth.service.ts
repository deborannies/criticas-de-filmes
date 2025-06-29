import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;

  constructor(private router: Router) {
    const storedUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  register(user: { name: string, surname: string, email: string, password_plain: string }): boolean {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find(u => u.email === user.email)) {
      alert('Este e-mail já está cadastrado.');
      return false;
    }

    const newUser: User = {
      name: user.name, 
      surname: user.surname, 
      email: user.email,
      passwordHash: user.password_plain, 
      creationDate: new Date() 
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Cadastro realizado com sucesso! Você será redirecionado para o login.');
    return true;
  }

  login(email: string, password_plain: string): boolean {
    let users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.passwordHash === password_plain);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return true;
    }

    alert('E-mail ou senha inválidos.');
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }
}