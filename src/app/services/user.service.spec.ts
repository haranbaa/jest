import { TestBed } from '@angular/core/testing'; // Import Angular's testing utilities
import { UserService } from './user.service'; // Import the service we are testing

// Describe block groups all related tests for UserService
describe('UserService', () => {
  let service: UserService; // Variable to hold the service instance

  // Runs before each test case
  beforeEach(() => {
    // Initialize the test environment
    TestBed.configureTestingModule({}); 
    
    // Inject an instance of UserService
    service = TestBed.inject(UserService);
  });

  // Test 1: Check if the service is created successfully
  it('should be created', () => {
    expect(service).toBeTruthy(); // The service should not be null or undefined
  });

  // Test 2: Check if we can add a user successfully
  it('should add a user', () => {
    service.addUser('Mustafa'); // Call the addUser method
    expect(service.getUsers()).toContain('Mustafa'); // The user list should include 'Mustafa'
  });

  // Test 3: Ensure adding an empty user throws an error
  it('should not add an empty user', () => {
    expect(() => service.addUser('')).toThrowError('User name cannot be empty'); 
    // Expect the method to throw an error if an empty string is passed
  });

  // Test 4: Check if the userExists method correctly identifies existing and non-existing users
  it('should check if a user exists', () => {
    service.addUser('Mustafa'); // Add a user '
    expect(service.userExists('Mustafa')).toBe(true); // Should return true for existing user
    expect(service.userExists('Abdullah')).toBe(false); // Should return false for a user that wasn't added
  });
});
