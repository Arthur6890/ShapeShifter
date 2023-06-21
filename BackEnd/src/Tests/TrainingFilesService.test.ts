import { jest } from '@jest/globals';
import { createTrainingFilesCollection } from '../adapters/repositories/MongoDBTrainingFilesRepository';
import { ITrainingFiles } from '../Interfaces/ITrainingFiles';
import TrainingFileService from '../Services/TrainingFilesService';

jest.mock('../adapters/repositories/MongoDBTrainingFilesRepository', () => ({
  createTrainingFilesCollection: jest.fn().mockImplementation((trainingFile: ITrainingFiles) => {
    return Promise.resolve(trainingFile);
  })
}));

describe('TrainingFileService', () => {
  let trainingFileService: TrainingFileService;

  beforeEach(() => {
    trainingFileService = new TrainingFileService();
  });

  describe('createTrainingFile', () => {
    it('should call createTrainingFilesCollection with the correct argument', async () => {
      const mockTrainingFile: ITrainingFiles = {
          id: '1',
          type: 'A',
          exercise: 'Supino Reto',
          sets: 0,
          repetitions: 0,
          exerciseImage: 'teste.jpg'
      };

      await trainingFileService.createTrainingFile(mockTrainingFile);

      expect(createTrainingFilesCollection).toHaveBeenCalledWith(mockTrainingFile);
    });

    it('should return the training file passed as argument', async () => {
      const mockTrainingFile: ITrainingFiles = {
        id: '1',
        type: 'A',
        exercise: 'Supino Reto',
        sets: 0,
        repetitions: 0,
        exerciseImage: 'teste.jpg'
      };

      const result = await trainingFileService.createTrainingFile(mockTrainingFile);

      expect(result).toEqual(mockTrainingFile);
    });
  });
});
