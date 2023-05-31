import { ITrainingSet } from "./ITraningSet";

export interface IUser {
	id: string;
	userName: string;
	password: string;
	email: string;
	name: string;
	goal: string;
	daysInaRowTraining: number;
	daysInaMonthTraining: number;
	trainingSets: ITrainingSet[]
};