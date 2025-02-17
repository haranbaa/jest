import { Component } from '@angular/core';

@Component({
  selector: 'app-about', //  This component is used as <app-about>
  template: `
    <h2>About Page</h2> <!-- Displays a heading -->
    <p>This is the about page of our Angular app.</p> <!-- Static text for the About page -->
  `,
})
export class AboutComponent {} // Simple component with no inputs or outputs
