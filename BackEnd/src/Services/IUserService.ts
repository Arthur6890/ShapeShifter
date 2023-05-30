import { IUser } from "../interfaces/IUser";  

export interface IUserService {
    save(user: IUser): Promise<void>;
    findByEmail(email: string): Promise<IUser | null>;
    findById(id: string): Promise<IUser | null>;
}