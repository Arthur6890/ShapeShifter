const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'nome_do_banco_de_dados';

async function createUserCollection() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Criação da coleção "users"
    const usersCollection = db.collection('users');

    // Definição do índice único para o campo "userName"
    await usersCollection.createIndex({ userName: 1 }, { unique: true });

    console.log('Coleção "users" criada com sucesso!');

    // Exemplo de documento de usuário
    const user = {
      userName: 'john123',
      password: 'senha123',
      email: 'john@example.com',
      passwordTip: 'Dica de senha',
      name: 'John Doe',
      goal: 'Perder peso',
      daysInaRowTraining: 7,
      daysInaMonthTraining: 20,
      trainingFiles: []
    };

    // Inserir o documento do usuário na coleção
    await usersCollection.insertOne(user);

    console.log('Documento de usuário inserido com sucesso!');
  } catch (err) {
    console.error('Erro ao criar coleção ou inserir documento:', err);
  } finally {
    client.close();
  }
}

createUserCollection();