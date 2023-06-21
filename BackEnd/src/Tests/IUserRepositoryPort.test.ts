import { IUser } from '../Interfaces/IUser';
import { IUserRepository } from '../Ports/IUserRepositoryPort';


describe('IUserRepository', () => {
  let userRepository: IUserRepository;

  beforeEach(() => {
    userRepository = {
      save: jest.fn(),
      findByEmail: jest.fn(),
      findById: jest.fn(),
      createUser: jest.fn(),
    };
  });

  it('should save a user', async () => {
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

    await userRepository.save(user);

    expect(userRepository.save).toHaveBeenCalledWith(user);
  });

  it('should find a user by email', async () => {
    const email = 'testuser@example.com';

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

    (userRepository.findByEmail as jest.Mock).mockResolvedValue(user);

    const result = await userRepository.findByEmail(email);

    expect(userRepository.findByEmail).toHaveBeenCalledWith(email);
    expect(result).toEqual(user);
  });

  it('should find a user by ID', async () => {
    const id = '1';

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

    (userRepository.findById as jest.Mock).mockResolvedValue(user);

    const result = await userRepository.findById(id);

    expect(userRepository.findById).toHaveBeenCalledWith(id);
    expect(result).toEqual(user);
  });

  it('should create a user', () => {
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

    userRepository.createUser(user);

    expect(userRepository.createUser).toHaveBeenCalledWith(user);
  });
});
