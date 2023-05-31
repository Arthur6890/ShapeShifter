import { ITrainingFiles } from "../Interfaces/ITrainingFiles";
import { ITrainingFilesService } from "./ITrainingFilesService";
import { createTrainingFilesCollection } from "../adapters/repositories/MongoDBTrainingFilesRepository";

export default class TrainingFileService implements ITrainingFilesService{
    async createTrainingFile(trainingFile: ITrainingFiles): Promise<ITrainingFiles> {
        await createTrainingFilesCollection(trainingFile);
        return trainingFile;
    }

}