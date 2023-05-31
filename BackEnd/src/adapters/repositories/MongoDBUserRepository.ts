import { uri, dbName, MongoClient as Mongo } from './MongoDBConnection';
import { IUser } from '../../Interfaces/IUser';

export async function createUserCollection(user:IUser) {
  const client = new Mongo(uri);

  try {
    await client.connect();
    const db = client.db(dbName);

    // Criação da coleção "users"
    const usersCollection = db.collection('users');

    // Definição do índice único para o campo "userName"
    await usersCollection.createIndex({ userName: 1 }, { unique: true });

    console.log('Coleção "users" criada com sucesso!');

    // Inserir o documento do usuário na coleção
    await usersCollection.insertOne(user);

    console.log('Documento de usuário inserido com sucesso!');
  } catch (err) {
    console.error('Erro ao criar coleção ou inserir documento:', err);
  } finally {
    client.close();
  }
}

export async function getUserCollection(userName: string, password: string) {
  const client = new Mongo(uri);

  try {
    await client.connect();
    const db = client.db(dbName);

    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ userName: userName, password: password });

    if (user) {
      console.log("encontrou o usuario");
      return user;
    } else {
      return null;
    }
  } catch (err) {
    console.error('Erro ao buscar usuário:', err);
    throw err;
  } finally {
    client.close();
  }
}


// createUserCollection();