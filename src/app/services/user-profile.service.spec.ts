import { TestBed } from '@angular/core/testing';
import { UserProfileService } from './user-profile.service';
import { AuthService } from './auth.service';

describe('UserProfileService', () => {
  let service: UserProfileService; // The service we are testing
  let authServiceMock: Partial<AuthService>; // ✅ Mock version of AuthService to avoid real dependency
  //partial means that we are only mocking the methods we need to test

  beforeEach(() => {
    // ✅ Create a Jest mock for AuthService
    authServiceMock = {
      isLoggedIn: jest.fn(), // ✅ Mock only the method we need to check authentication status
      login: jest.fn(), // ✅ Mock login method so we can track if it gets called
      logout: jest.fn(), // ✅ Mock logout method so we can track if it gets called
      //jest.fn() creates a mock function that we can use to track calls and return values
    };

    //  Configure Angular's TestBed to inject mocks instead of real dependencies
    TestBed.configureTestingModule({
      providers: [
        UserProfileService, // ✅ Provide the actual UserProfileService
        { provide: AuthService, useValue: authServiceMock }, // ✅ Replace real AuthService with mock
      ],
    });

    //  Inject the service instance after TestBed setup
    service = TestBed.inject(UserProfileService);
  });

  // Test to check if the service instance is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy(); // ✅ Service should not be null or undefined
  });

  //  Test to check behavior when user is NOT logged in
  it('should return "Access Denied" if user is not logged in', () => {
    (authServiceMock.isLoggedIn as jest.Mock).mockReturnValue(false); // ✅ Mock return value: User is NOT logged in
    expect(service.getUserProfile()).toBe('Access Denied'); // ✅ Expect service to return "Access Denied"
  });

  // Test to check behavior when user IS logged in
  it('should return "User Profile Data" if user is logged in', () => {
    (authServiceMock.isLoggedIn as jest.Mock).mockReturnValue(true); // ✅ Mock return value: User IS logged in
    expect(service.getUserProfile()).toBe('User Profile Data'); // ✅ Expect service to return profile data
  });

  // Test to check if login() method from AuthService is called (or not)
  it('should call login method from AuthService', () => {
    service.getUserProfile(); // ✅ Call getUserProfile(), but since it doesn’t call login, login() should NOT be called
    expect(authServiceMock.login).not.toHaveBeenCalled(); // ✅ Verify that login() was NEVER called
  });

  // Test to check if logout() method from AuthService is called (or not)
  it('should call logout method from AuthService', () => {
    service.getUserProfile(); // ✅ Call getUserProfile(), but since it doesn’t call logout, logout() should NOT be called
    expect(authServiceMock.logout).not.toHaveBeenCalled(); // ✅ Verify that logout() was NEVER called
  });
});
