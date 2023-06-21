import { ITrainingFiles } from '../Interfaces/ITrainingFiles';
import { ITrainingFilesRepository } from '../Ports/ITrainingFilesPort';


describe('ITrainingFilesRepository', () => {
  let trainingFilesRepository: ITrainingFilesRepository;

  beforeEach(() => {
    trainingFilesRepository = {
      findById: jest.fn(),
      createTrainingFile: jest.fn(),
    };
  });

  it('should find a training file by ID', async () => {
    const id = '1';

    const trainingFile: ITrainingFiles = {
      id: '1',
      type: 'strength',
      exercise: 'bench press',
      sets: 3,
      repetitions: 10,
      exerciseImage: 'bench_press.jpg',
    };

    (trainingFilesRepository.findById as jest.Mock).mockResolvedValue(trainingFile);

    const result = await trainingFilesRepository.findById(id);

    expect(trainingFilesRepository.findById).toHaveBeenCalledWith(id);
    expect(result).toEqual(trainingFile);
  });

  it('should create a training file', () => {
    const trainingFile: ITrainingFiles = {
      id: '1',
      type: 'strength',
      exercise: 'bench press',
      sets: 3,
      repetitions: 10,
      exerciseImage: 'bench_press.jpg',
    };

    trainingFilesRepository.createTrainingFile(trainingFile);

    expect(trainingFilesRepository.createTrainingFile).toHaveBeenCalledWith(trainingFile);
  });
});
