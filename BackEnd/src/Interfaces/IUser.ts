export interface IUser{
    id: string;
    userName: string;
    password: string;
    email: string;
    passwordTip: string;
    name: string;
    goal: string;
    daysInaRowTraining: number;
    daysInaMonthTraining: number;
    trainingFiles: Array<any>
};