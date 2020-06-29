import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userIsAuthenticated = true;
  private userId = 'abc';

  get getUserIsAuthenticated() {
    return this.userIsAuthenticated;
  }

  get getUserId() {
    return this.userId;
  }

  constructor(private router: Router) { }

  login() {
    this.userIsAuthenticated = true;
  }

  logout() {
    this.userIsAuthenticated = false;
    this.router.navigateByUrl('/auth');
  }
}
