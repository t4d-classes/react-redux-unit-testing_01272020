import colorsSvc from './colorsAsync';

describe('colorAsync tests', () => {

  xtest('do something async', (done) => {
    colorsSvc.all().then(colors => {
      expect(colors.length).toBe(4);
      done();
    });
  });

  xtest('do something async', () => {
    return colorsSvc.all().then(colors => {
      expect(colors.length).toBe(4);
    });
  });

  xtest('do something async', async () => {
    const colors = await colorsSvc.all();
    expect(colors.length).toBe(4);
  });

  test('do something async', async () => {
    
    return expect(colorsSvc.all()).resolves.toEqual([
      { id: 1, name: 'red' },
      { id: 2, name: 'green' },
      { id: 3, name: 'blue' },
    ]);
    
  });



});