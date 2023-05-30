import { v4 as uuidv4 } from 'uuid';

export class SessionManager {
    private sessions: { [sessionId: string]: string };
  
    constructor() {
      this.sessions = {};
    }
  
    createSession(userId: string): string {
      // Gere um ID de sessão único
      const sessionId = generateUniqueId();
  
      // Associe o ID da sessão ao ID do usuário
      this.sessions[sessionId] = userId;
  
      return sessionId;
    }
  
    getSessionUserId(sessionId: string): string | null {
      // Verifique se o ID da sessão existe e retorne o ID do usuário associado
      return this.sessions[sessionId] || null;
    }
  
    // Outros métodos de gerenciamento de sessão, como revogação de sessão, limpeza de sessões inativas, etc.
  }
  
  function generateUniqueId(): string {
    const uniqueId = uuidv4();
    return uniqueId;
  }