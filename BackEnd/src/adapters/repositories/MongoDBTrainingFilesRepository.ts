import { Admin } from 'mongodb';
import { ITrainingFiles } from '../../Interfaces/ITrainingFiles';
import { uri, dbName, MongoClient as Mongo } from './MongoDBConnection';



export async function createTrainingFilesCollection(trainingFile:ITrainingFiles) {
  const client = new Mongo(uri);

  try {
    await client.connect();
    await client.db("admin").command({ping: 1});
    const db = client.db(dbName);
    // Criação da coleção "trainingFiles"
    const trainingFilesCollection = db.collection('trainingFiles');

    console.log('Coleção "trainingFiles" criada com sucesso!');

    // Inserir o documento de ficha de treino na coleção
    await trainingFilesCollection.insertOne(trainingFile);

    console.log('Documento de ficha de treino inserido com sucesso!');
  } catch (err) {
    console.error('Erro ao criar coleção ou inserir documento:', err);
    throw err;
  } finally {
    client.close();
  }
}

//createTrainingFilesCollection();