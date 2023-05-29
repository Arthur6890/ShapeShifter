import { User } from '../../domain/entities/User';
import { UserRepository } from '../../ports/UserRepository';

export class UserController {
  constructor(private userRepository: UserRepository) {}
  

  async register(id: string, name: string, email: string, password: string): Promise<void> {
   
    // Validar os dados inseridos
    if (!id || !name || !email || !password) {
      throw new Error('Todos os campos devem ser preenchidos.');
    }
    // Verificar se o email é válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('O email fornecido não é válido.');
    }

    const existingUser = await this.userRepository.findByEmail(email);
    if (existingUser) {
      throw new Error('Já existe um usuário com esse email.');
    }

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

  async getUserById(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    return user;
  }  
}