import { ITrainingFiles } from "./ITrainingFiles";

export interface ITrainingSet {
    type: string;
    name: string;
    trainingFiles: ITrainingFiles[]
};