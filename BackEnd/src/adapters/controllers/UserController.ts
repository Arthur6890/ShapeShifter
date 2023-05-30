import { User } from '../../domain/entities/User';
import { UserRepository } from '../../ports/UserRepository';
import { SessionManager } from '../../utils/SessionManager';

export interface LoginResponse {
  user: User;
  sessionId: string;
}


export class UserController {
  constructor(private userRepository: UserRepository, private sessionManager: SessionManager) {}
  

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

  async login(email: string, password: string): Promise<LoginResponse | null> {
    const user = await this.userRepository.findByEmail(email);
    
    if (user && user.password === password) {
      // Cria uma sessão de usuário segura
      const sessionId = this.sessionManager.createSession(user.id);

      // Retorna o usuário e o ID da sessão
      return { user, sessionId };

    } else {
      return null;
    }
  }

}