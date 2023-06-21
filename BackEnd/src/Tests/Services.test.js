import { UserService } from './UserService';
import { getUserCollection, createUserCollection } from '../adapters/repositories/MongoDBUserRepository';

jest.mock('../adapters/repositories/MongoDBUserRepository');

describe('UserService', () => {
  let userService;

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
      const mockUser = { id: 1, username: 'testuser' };
      getUserCollection.mockResolvedValueOnce(mockUser);

      const result = await userService.login('password', 'testuser');

      expect(result).toEqual(mockUser);
    });
  });

  describe('createUserCollection', () => {
    it('should call createUserCollection with the correct argument', async () => {
      const user = { id: 1, username: 'testuser' };

      await userService.createUserCollection(user);

      expect(createUserCollection).toHaveBeenCalledWith(user);
    });

    it('should return the user passed as argument', async () => {
      const user = { id: 1, username: 'testuser' };

      const result = await userService.createUserCollection(user);

      expect(result).toEqual(user);
    });
  });
});
