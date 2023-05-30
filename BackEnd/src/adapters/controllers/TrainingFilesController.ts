import { User } from '../../domain/entities/User';
import { UserRepository } from '../../ports/UserRepository';
import { TrainingFiles } from '../../domain/entities/TrainingFiles';

export class TrainingFilesController {
  constructor(private userRepository: UserRepository) {}

  async updateTraining(user: User, trainingIndex: number, updatedTraining: TrainingFiles): Promise<void> {
    // Verifica se o usuário existe
    const existingUser = await this.userRepository.findByEmail(user.email);
    if (!existingUser) {
      throw new Error('Usuário não encontrado.');
    }

    // Verifica se o índice do treino é válido
    if (trainingIndex < 0 || trainingIndex >= existingUser.trainingFiles.length) {
      throw new Error('Índice de treino inválido.');
    }

    // Atualiza o treino do usuário com as novas informações
    existingUser.trainingFiles[trainingIndex] = updatedTraining;

    // Salva as alterações no repositório
    await this.userRepository.save(existingUser);
  }
}
