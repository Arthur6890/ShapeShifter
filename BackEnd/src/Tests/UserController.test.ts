import { Request, Response } from 'express';
import { IUser } from '../Interfaces/IUser';
import { IUserService } from '../Services/IUserService';
import UserController from '../Controllers/UserController';
import { NextFunction } from 'connect';

jest.mock('../Services/IUserService');

describe('UserController', () => {
  let mockUserService: jest.Mocked<IUserService>;
  let userController: UserController;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockUserService = {
      createUserCollection: jest.fn(),
      login: jest.fn(),
    } as jest.Mocked<IUserService>;

    userController = new UserController(mockUserService);

    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  describe('createUser', () => {
    it('should create a user and return 201 status code', async () => {
      const mockUser: IUser = {
        id: '1',
        userName: 'testuser',
        password: 'password',
        email: 'testuser@example.com',
        name: '',
        goal: '',
        daysInaRowTraining: 0,
        daysInaMonthTraining: 0,
        trainingSets: [],
      };

      mockRequest.body = mockUser;

      mockUserService.createUserCollection.mockResolvedValue(mockUser);

      await userController.createUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserService.createUserCollection).toHaveBeenCalledWith(mockUser);
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
    });

    it('should handle errors and return 400 status code', async () => {
      const errorMessage = 'Invalid user data';

      mockRequest.body = {};

      mockUserService.createUserCollection.mockRejectedValueOnce(new Error(errorMessage));

      await userController.createUser(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserService.createUserCollection).toHaveBeenCalledWith({});
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });

  describe('login', () => {
    it('should log in a user and return 200 status code', async () => {
      const mockUser: IUser = {
        id: '1',
        userName: 'testuser',
        password: 'password',
        email: 'testuser@example.com',
        name: '',
        goal: '',
        daysInaRowTraining: 0,
        daysInaMonthTraining: 0,
        trainingSets: [],
      };

      mockRequest.body = {
        userName: 'testuser',
        password: 'password',
      };

      mockUserService.login.mockResolvedValueOnce(mockUser);

      await userController.login(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserService.login).toHaveBeenCalledWith('password', 'testuser');
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
    });

    it('should handle invalid credentials and return 401 status code', async () => {
      mockRequest.body = {
        userName: 'testuser',
        password: 'password',
      };

      mockUserService.login.mockResolvedValueOnce(null);

      await userController.login(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserService.login).toHaveBeenCalledWith('password', 'testuser');
      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Invalid credentials' });
    });

    it('should handle errors and return 400 status code', async () => {
      const errorMessage = 'Invalid login data';

      mockRequest.body = {};

      mockUserService.login.mockRejectedValueOnce(new Error(errorMessage));

      await userController.login(
        mockRequest as Request,
        mockResponse as Response,
        mockNext
      );

      expect(mockUserService.login).toHaveBeenCalledWith(undefined, undefined);
      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: errorMessage });
    });
  });
});
