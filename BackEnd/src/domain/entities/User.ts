export class User {
    constructor(public id: string, public userName: string, public password: string, public email: string, public name: string, 
                public goal: string, public daysInaRowTraining: number, public daysInaMonthTraining: number, public trainingFiles: Array<any>) {}
}