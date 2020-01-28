import { createRefreshCarsDoneAction, REFRESH_CARS_DONE } from './carToolActions';

describe('action creators', () => {

  let cars;

  beforeEach(() => {

    cars = [
      { id: 1, make: 'Ford' }
    ];

  });


  test('createRefreshCarsDoneAction', () => {

    expect(
      createRefreshCarsDoneAction(cars)
    ).toEqual({
      type: REFRESH_CARS_DONE,
      payload: { cars },
    });


  });

});