import { ITrainingFiles } from "../Interfaces/ITrainingFiles";
import { ITrainingFilesService } from "./ITrainingFilesService";
import { createTrainingFilesCollection } from "../adapters/repositories/MongoDBTrainingFilesRepository";

export default class TrainingFileService implements ITrainingFilesService{
    findById(userId: string): Promise<ITrainingFiles | null> {
        throw new Error("Method not implemented.");
    }
    async createTrainingFile(trainingFile: ITrainingFiles): Promise<ITrainingFiles> {
        await createTrainingFilesCollection(trainingFile);
        return trainingFile;
        throw new Error("Method not implemented.");
    }

}