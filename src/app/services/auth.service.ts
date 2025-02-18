import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
  //The service is automatically available everywhere in the app
})
export class AuthService {
  //AuthService simple authentication service 
  //his creates the AuthService class
  private isAuthenticated = false;
  //true if logged in, false if not
  //its private so  auth service can change it

  login(): void {
    this.isAuthenticated = true;
    // sets true if logged in, false if not
  }

  logout(): void {
    //logs out
    //Changes the login state to true
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    //returns the current login status
    return this.isAuthenticated;
  }
}
