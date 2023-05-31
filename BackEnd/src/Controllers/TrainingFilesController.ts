import { RequestHandler } from "express";
import { ITrainingFiles } from "../Interfaces/ITrainingFiles";
import { ITrainingFilesService } from "../Services/ITrainingFilesService";

export class TrainingFilesController {
  private trainingFileService: ITrainingFilesService;

  constructor(trainingFileService:ITrainingFilesService) {
    this.trainingFileService = trainingFileService;
  }

  createTrainingFile: RequestHandler = async (request, response) => {
    try {
      const trainingFile = await this.trainingFileService.createTrainingFile(request.body as ITrainingFiles);
      response.status(201).json(trainingFile);
    } catch (error: any) {
      response.status(400).json({ error: error.message });
    }
  };
}