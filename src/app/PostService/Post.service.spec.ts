//It tests PostService to ensure it correctly fetches posts
//PostService correctly makes HTTP requests 
//It mocks API calls using HttpClientTestingModule so that no real HTTP requests are made.

//It verifies that the API URL is correct and that the request returns the expected data
//HttpTestingController	Intercepts HTTP requests in tests, allowing us to simulate responses.
import { TestBed } from '@angular/core/testing';
//TestBed configure and create an Angular testing module
//It sets up the environment for testing the PostService
//HttpClientTestingModule It replaces the real HttpClient so no actual network requests are made.
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';

describe('PostService', () => { //Groups all tests related to PostService
  let service: PostService;
  let httpMock: HttpTestingController; // ✅ Mock controller HTTP requests

  beforeEach(() => {
    TestBed.configureTestingModule({ //Creates a testing environment for PostService.
      imports: [HttpClientTestingModule], // use HttpClientTestingModule to mock HTTP requests and prevent real API calls.
      providers: [PostService],
      //Registers PostService as a provider so it can be injected into tests.
    });

    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
    // Injects PostService → This allows the test to create an instance of PostService so we can call its methods (e.g., getPosts()).
    //This tool intercepts HTTP requests made by PostService, preventing real network calls.
  });

  afterEach(() => {
    httpMock.verify(); // ✅ Ensure no unexpected requests were made
    //Prevents unexpected API calls from causing test failures
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    //If PostService fails to initialize, this test will fail.
  });

  it('should fetch posts from API', () => {
    const mockPosts = [
      { id: 1, title: 'Post One' },
      { id: 2, title: 'Post Two' },
    ];
    // Fake API response data
    //This is fake data that we will return instead of calling a real API.


    service.getPosts().subscribe((posts) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);
    });
    //Calls getPosts(), which normally makes a real HTTP request.
//Since we are mocking the request, it does NOT reach the API.
//The test expects 2 posts in the response.

    // ✅ Simulate API response
    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    //httpMock.expectOne() catches the request before it reaches the network.
//Ensures that the request is made to the correct API URL.
    expect(req.request.method).toBe('GET');
    //Ensures that the request is a GET request
    req.flush(mockPosts); // ✅ Respond with mock data
    //Sends mockPosts back to getPosts() as if it came from the API.
//This triggers the .subscribe() callback, which processes the response.
  });
});
