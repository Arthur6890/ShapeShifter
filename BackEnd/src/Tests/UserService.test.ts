import { jest } from '@jest/globals';
import { UserService } from '../Services/UserService';
import { createUserCollection, getUserCollection } from '../adapters/repositories/MongoDBUserRepository';
import { IUser } from '../Interfaces/IUser';

jest.mock('../adapters/repositories/MongoDBUserRepository', () => ({
  getUserCollection: jest.fn(),
  createUserCollection: jest.fn().mockImplementation((user: IUser) => {
    return Promise.resolve(user);
  })
}));

describe('UserService', () => {
  let userService : UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('login', () => {
    it('should call getUserCollection with the correct arguments', async () => {
      const userName = 'testuser';
      const password = 'password';

      await userService.login(password, userName);

      expect(getUserCollection).toHaveBeenCalledWith(userName, password);
    });

    it('should return the user from getUserCollection', async () => {
      const mockUser: IUser = {
        id: '1', userName: 'testuser',
        password: '123456789',
        email: 'test@gmail.com',
        name: 'Teste',
        goal: 'Emagrecer',
        daysInaRowTraining: 0,
        daysInaMonthTraining: 0,
        trainingSets: []
      };
      (getUserCollection as jest.Mock).mockImplementationOnce(() => Promise.resolve(mockUser));

      const result = await userService.login('password', 'testuser');

      expect(result).toEqual(mockUser);
    });
  });

  describe('createUserCollection', () => {
    it('should call createUserCollection with the correct argument', async () => {
      const user: IUser = {
        id: '1', userName: 'testuser',
        password: '123456789',
        email: 'test@gmail.com',
        name: 'Teste',
        goal: 'Emagrecer',
        daysInaRowTraining: 0,
        daysInaMonthTraining: 0,
        trainingSets: []
      };

      await userService.createUserCollection(user);

      expect(createUserCollection).toHaveBeenCalledWith(user);
    });

    it('should return the user passed as argument', async () => {
      const user: IUser = {
        id: '1', userName: 'testuser',
        password: '123456789',
        email: 'test@gmail.com',
        name: 'Teste',
        goal: 'Emagrecer',
        daysInaRowTraining: 0,
        daysInaMonthTraining: 0,
        trainingSets: []
      };

      const result = await userService.createUserCollection(user);

      expect(result).toEqual(user);
    });
  });
});
