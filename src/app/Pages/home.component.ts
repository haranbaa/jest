import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home', // ✅ This component is used as <app-home>
  template: `
    <h2>Home Page</h2> <!-- ✅ Displays a heading -->
    <p>Welcome, {{ userName }}!</p> <!-- ✅ Shows the username passed as an input -->
    <button (click)="logout()">Logout</button> <!-- ✅ Calls logout() when clicked -->
  `,
})
export class HomeComponent {
  @Input() userName = ''; // ✅ Receives username from the parent component

  @Output() userLoggedOut = new EventEmitter<void>(); // ✅ Emits an event when the user logs out

  logout() {
    this.userLoggedOut.emit(); // ✅ Notify the parent that the user logged out
  }
}
