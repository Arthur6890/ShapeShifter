import { ITrainingFiles } from "../Interfaces/ITrainingFiles";


describe('ITrainingFiles', () => {
  let trainingFiles: ITrainingFiles;

  beforeEach(() => {
    trainingFiles = {
      id: '1',
      type: 'File',
      exercise: 'Push-ups',
      sets: 3,
      repetitions: 10,
      exerciseImage: 'push-ups.jpg',
    };
  });

  it('should have the correct properties', () => {
    expect(trainingFiles.id).toEqual('1');
    expect(trainingFiles.type).toEqual('File');
    expect(trainingFiles.exercise).toEqual('Push-ups');
    expect(trainingFiles.sets).toEqual(3);
    expect(trainingFiles.repetitions).toEqual(10);
    expect(trainingFiles.exerciseImage).toEqual('push-ups.jpg');
  });
});
