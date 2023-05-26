import { User } from '../../domain/entities/User';
import { UserRepository } from '../../ports/UserRepository';

export class UserController {
  constructor(private userRepository: UserRepository) {}

  async register(id: string, name: string, email: string, password: string): Promise<void> {
    const user = new User(id,name, email, password);
    await this.userRepository.save(user);
  }

  async login(email: string, password: string): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    if (user && user.password === password) {
      return user;
    } else {
      return null;
    }
  }
}