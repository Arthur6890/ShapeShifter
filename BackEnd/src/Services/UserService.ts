import { IUser } from "../Interfaces/IUser";
import { IUserService } from "./IUserService";
import { createUserCollection, getUserCollection } from "../adapters/repositories/MongoDBUserRepository";

export class UserService implements IUserService{
    
    async login(password: string, userName: string) {
        const user = await getUserCollection(userName, password);
        return user;
    }
    
    async createUserCollection(user:IUser):Promise<IUser>{
        await createUserCollection(user);
        return user;
    }
    

}