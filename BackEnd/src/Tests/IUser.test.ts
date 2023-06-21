import { IUser } from "../Interfaces/IUser";


describe('IUser', () => {
  let user: IUser;

  beforeEach(() => {
    user = {
      id: '1235',
      userName: 'Pele',
      password: 'password123',
      email: 'testuser@example.com',
      name: 'Test User',
      goal: 'Fitness',
      daysInaRowTraining: 5,
      daysInaMonthTraining: 15,
      trainingSets: [],
    };
  });

  it('should have all properties defined', () => {
    expect(user.id).toBeDefined();
    expect(user.userName).toBeDefined();
    expect(user.password).toBeDefined();
    expect(user.email).toBeDefined();
    expect(user.name).toBeDefined();
    expect(user.goal).toBeDefined();
    expect(user.daysInaRowTraining).toBeDefined();
    expect(user.daysInaMonthTraining).toBeDefined();
    expect(user.trainingSets).toBeDefined();
  });

  it('should initialize with empty trainingSets array', () => {
    expect(user.trainingSets).toEqual([]);
  });

  it('should update daysInaRowTraining', () => {
    user.daysInaRowTraining = 10;
    expect(user.daysInaRowTraining).toBe(10);
  });

});
