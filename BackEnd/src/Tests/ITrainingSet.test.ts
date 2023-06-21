
import { ITrainingFiles } from '../Interfaces/ITrainingFiles';
import { ITrainingSet } from '../Interfaces/ITraningSet';


describe('ITrainingSet', () => {
  let trainingSet: ITrainingSet;

  beforeEach(() => {
    const trainingFiles: ITrainingFiles[] = [
      {
        id: '1',
        type: 'File',
        exercise: 'Push-ups',
        sets: 3,
        repetitions: 10,
        exerciseImage: 'push-ups.jpg',
      },
      {
        id: '2',
        type: 'File',
        exercise: 'Squats',
        sets: 4,
        repetitions: 12,
        exerciseImage: 'squats.jpg',
      },
    ];

    trainingSet = {
      type: 'Set',
      name: 'Upper Body',
      trainingFiles: trainingFiles,
    };
  });

  it('should have the correct properties', () => {
    expect(trainingSet.type).toEqual('Set');
    expect(trainingSet.name).toEqual('Upper Body');
    expect(trainingSet.trainingFiles.length).toEqual(2);

    // Test the properties of the first training file
    expect(trainingSet.trainingFiles[0].id).toEqual('1');
    expect(trainingSet.trainingFiles[0].type).toEqual('File');
    expect(trainingSet.trainingFiles[0].exercise).toEqual('Push-ups');
    expect(trainingSet.trainingFiles[0].sets).toEqual(3);
    expect(trainingSet.trainingFiles[0].repetitions).toEqual(10);
    expect(trainingSet.trainingFiles[0].exerciseImage).toEqual('push-ups.jpg');

    // Test the properties of the second training file
    expect(trainingSet.trainingFiles[1].id).toEqual('2');
    expect(trainingSet.trainingFiles[1].type).toEqual('File');
    expect(trainingSet.trainingFiles[1].exercise).toEqual('Squats');
    expect(trainingSet.trainingFiles[1].sets).toEqual(4);
    expect(trainingSet.trainingFiles[1].repetitions).toEqual(12);
    expect(trainingSet.trainingFiles[1].exerciseImage).toEqual('squats.jpg');
  });
});
