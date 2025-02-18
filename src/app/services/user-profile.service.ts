import { Injectable } from '@angular/core';
// Injectable → Makes this service available for dependency injection.
import { AuthService } from './auth.service';
// Imports AuthService → So we can use isLoggedIn() to check authentication.

@Injectable({
  providedIn: 'root',
  //This ensures that UserProfileService is globally available and does not need to be manually provided in a module
})
export class UserProfileService {
  //UserProfileService function checks if the user is logged in using AuthService.
  // Injects AuthService → This allows UserProfileService to use AuthService methods
  //The authService instance is automatically provided by Angular's dependency injection.
  constructor(private authService: AuthService) {}

  getUserProfile(): string {
    if (!this.authService.isLoggedIn()) {
      return 'Access Denied';
    }
    return 'User Profile Data';
  }
}
//Calls authService.isLoggedIn() to check if the user is logged in
//✔ If isLoggedIn() returns false → The user gets "Access Denied".
// If isLoggedIn() returns true → The user gets "User Profile Data"
//relies on *AuthService* to check if the user is logged in
