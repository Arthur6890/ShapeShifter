import { RequestHandler } from "express";
import { IUser } from "../Interfaces/IUser";
import { IUserService } from "../Services/IUserService";

export default class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  createUser: RequestHandler = async (request, response) => {
    try {
      const user = await this.userService.createUserCollection(request.body as IUser);
      response.status(201).json(user);
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  };

  login: RequestHandler = async (request, response) => {
    try {
      const { userName, password } = request.body;

      const user = await this.userService.login(password, userName);
      if (user) {
        response.status(200).json(user);
      } else {
        response.status(401).json({ error: "Invalid credentials" });
      }
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  };
}