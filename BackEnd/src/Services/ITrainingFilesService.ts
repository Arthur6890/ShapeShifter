import { ITrainingFiles } from "../Interfaces/ITrainingFiles";

export interface ITrainingFilesService {
    save(trainingFiles: ITrainingFiles): Promise<void>;
    findById(userId: string): Promise<ITrainingFiles | null>;
    update(trainingFiles: ITrainingFiles): Promise<void>;
    delete(userId: string): Promise<void>;
  }