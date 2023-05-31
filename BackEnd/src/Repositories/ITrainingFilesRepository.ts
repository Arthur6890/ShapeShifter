import { ITrainingFiles } from "../Interfaces/ITrainingFiles";

export interface ITrainingFilesRepository {
    findById(userId: string): Promise<ITrainingFiles | null>;
    createTrainingFile(trainingFile: ITrainingFiles): ITrainingFiles;
}
