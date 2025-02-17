import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';

// Define the app routes
const routes: Routes = [
  { path: '', component: HomeComponent }, //  Default route (Home Page)
  { path: 'about', component: AboutComponent }, //  '/about' loads AboutComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //  Configure routes globally in the app
  exports: [RouterModule] // Export RouterModule so other components can use routing
})
export class AppRoutingModule {} // ✅This module sets up navigation in the app
