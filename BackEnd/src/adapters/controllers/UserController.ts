import { User } from '../../domain/entities/User';
import { UserRepository } from '../../ports/UserRepository';
import { SessionManager } from '../../utils/SessionManager';

export interface LoginResponse {
  user: User;
  sessionId: string;
}


export class UserController {
  constructor(private userRepository: UserRepository, private sessionManager: SessionManager) {}
  

  async register(id: string, userName: string, password: string, email: string, name: string, 
                goal: string): Promise<void> {
   
    // Validar os dados inseridos
    if (!id || !userName || !password || !email || !name
      || !goal) {
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

    const trainingFiles: Array<any> = [];

    const user = new User(id, userName, password, email, name, goal,0, 0, trainingFiles);
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