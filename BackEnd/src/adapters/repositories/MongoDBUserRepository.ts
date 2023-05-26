import { User } from '../../domain/entities/User';
import { UserRepository } from '../../ports/UserRepository';
/*
//import { MongoDB } from '../../infrastructure/db/MongoDB';

export class MongoDBUserRepository implements UserRepository {
  constructor(private db: MongoDB) {}

  async save(user: User): Promise<void> {
    // Implementação para salvar o usuário no MongoDB
  }

  async findByEmail(email: string): Promise<User | null> {
    // Implementação para encontrar um usuário no MongoDB pelo email
  }
}*/