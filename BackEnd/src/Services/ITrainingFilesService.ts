import { ITrainingFiles } from "../Interfaces/ITrainingFiles";

export interface ITrainingFilesService {
	createTrainingFile(trainingFile: ITrainingFiles): Promise<ITrainingFiles>;
}
