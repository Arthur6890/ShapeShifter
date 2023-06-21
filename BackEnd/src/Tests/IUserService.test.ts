import { IUser } from '../Interfaces/IUser';
import { IUserService } from '../Services/IUserService';
import { UserService } from '../Services/UserService';


describe('IUserService', () => {
  let userService: IUserService;

  beforeEach(() => {
    // Crie uma instância da implementação da interface ou utilize um mock, se aplicável
    userService = new UserService();
  });

  it('should declare login method', () => {
    expect(userService.login).toBeDefined();
    expect(typeof userService.login).toBe('function');
  });

  it('should declare createUserCollection method', () => {
    expect(userService.createUserCollection).toBeDefined();
    expect(typeof userService.createUserCollection).toBe('function');
  });

  it('should return a Promise containing IUser for createUserCollection', async () => {
    const user: IUser = {
      id: '1',
      userName: 'testuser',
      password: 'password',
      email: 'testuser@example.com',
      name: 'John Doe',
      goal: 'Lose weight',
      daysInaRowTraining: 0,
      daysInaMonthTraining: 0,
      trainingSets: [],
    };

    const result = await userService.createUserCollection(user);

    expect(result).toBeDefined();
    expect(result).toEqual(user);
  });
});
