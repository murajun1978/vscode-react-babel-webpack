import { reducer, initialState } from '../counter';

describe('counter reducer', () => {
  test('initial state', () => {
    expect(initialState).toEqual({ count: 0 });
  });

  test('reset', () => {
    expect(reducer({ count: 10 }, { type: 'reset' })).toEqual({
      count: 0
    });
  });

  test('increment', () => {
    expect(reducer({ count: 0 }, { type: 'increment' })).toEqual({
      count: 1
    });
  });

  test('decrement', () => {
    expect(reducer({ count: 1 }, { type: 'decrement' })).toEqual({
      count: 0
    });
  });

  test('default', () => {
    expect(reducer({ count: 10 }, { type: 'default' })).toEqual({
      count: 10
    });
  });
});
