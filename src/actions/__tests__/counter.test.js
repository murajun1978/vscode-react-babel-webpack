import counterActions from '../counter';

describe('counterActions', () => {
  const dispatch = jest.fn();
  const actions = counterActions(dispatch);

  beforeEach(() => {
    dispatch.mockClear();
  });

  test('reset', () => {
    actions.reset();
    expect(dispatch).toHaveBeenCalledWith({ type: 'reset' });
  });

  test('increment', () => {
    actions.increment();
    expect(dispatch).toHaveBeenCalledWith({ type: 'increment' });
  });

  test('decrement', () => {
    actions.decrement();
    expect(dispatch).toHaveBeenCalledWith({ type: 'decrement' });
  });
});
