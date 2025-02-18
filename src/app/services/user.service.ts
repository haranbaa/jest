// Import Injectable decorator from Angular core
import { Injectable } from '@angular/core';

//@Injectable
// Hey Angular, please handle creating this service for me"
//"Let other parts of my app use this service"
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Array to store usernames
  private users: string[] = [];

  // Add a new user to the array, throws error if username is empty
  addUser(user: string): void {
    if (!user) throw new Error('User name cannot be empty');
    this.users.push(user);
  }

  // Return all users in the array
  getUsers(): string[] {
    return this.users;
  }

  // Check if a user exists in the array
  userExists(user: string): boolean {
    return this.users.includes(user);
  }
}