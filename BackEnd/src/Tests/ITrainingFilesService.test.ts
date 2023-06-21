import { ITrainingFiles } from "../Interfaces/ITrainingFiles";
import { ITrainingFilesService } from "../Services/ITrainingFilesService";
import TrainingFilesService from "../Services/TrainingFilesService";


describe('ITrainingFilesService', () => {
  let trainingFilesService: ITrainingFilesService;

  beforeEach(() => {
    // Crie uma instância da implementação da interface ou utilize um mock, se aplicável
    trainingFilesService = new TrainingFilesService();
  });

  it('should declare createTrainingFile method', () => {
    expect(trainingFilesService.createTrainingFile).toBeDefined();
    expect(typeof trainingFilesService.createTrainingFile).toBe('function');
  });

  it('should return a Promise containing ITrainingFiles', async () => {
    const trainingFile: ITrainingFiles = {
      id: '1',
      type: 'type',
      exercise: 'exercise',
      sets: 3,
      repetitions: 10,
      exerciseImage: 'image.png',
    };

    const result = await trainingFilesService.createTrainingFile(trainingFile);

    expect(result).toBeDefined();
    expect(result).toEqual(trainingFile);
  });
});