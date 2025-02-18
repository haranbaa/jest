import { Injectable } from '@angular/core'; // ✅ Allows this service to be injected anywhere in the app
import { HttpClient } from '@angular/common/http'; // ✅ Used to make HTTP requests
import { Observable } from 'rxjs'; // ✅ Handles asynchronous data

//Injectable({ providedIn: 'root' }) → Marks this class as an Angular service that can be injected anywhere in the app.
//HttpClient → The built-in Angular module for making HTTP requests.
//Observable from RxJS → Used to handle asynchronous data (since HTTP calls take time to complete).


@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
