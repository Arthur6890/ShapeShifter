import { IUser } from "../Interfaces/IUser";

export interface IUserService {
    login(password : string, userName: string)
    createUserCollection(user:IUser):Promise<IUser>;
}