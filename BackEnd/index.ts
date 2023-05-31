import express from "express";
import { TrainingFilesController } from "./src/Controllers/TrainingFilesController";
import TrainingFilesService from "./src/Services/TrainingFilesService";
import { UserService } from "./src/Services/UserService";
import UserController from "./src/Controllers/UserController";

const trainingFileService = new TrainingFilesService();
const trainingFilesController = new TrainingFilesController(trainingFileService);

const userService = new UserService();
const userController =new UserController(userService);

const app = express();

app.use(express.json());

app.post("/trainingFile/create", trainingFilesController.createTrainingFile);
app.post("/user/create", userController.createUser);

app.post("/user/login", userController.login);

app.listen(3000);

