import { IUser } from "../Interfaces/IUser";

export interface IUserRepository {
    save(user: IUser): Promise<void>;
    findByEmail(email: string): Promise<IUser | null>;
    findById(id: string): Promise<IUser|null>;
    createUser(user: IUser): IUser;
}