import deepFreeze from 'deep-freeze';
import counterReducer from './reducer';

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  };

  test('should return a proper initial state when called with undefined state', () => {
    const action = { type: 'DO_NOTHING' };
    const newState = counterReducer(undefined, action);
    expect(newState).toEqual(initialState);
  });

  test('good is incremented', () => {
    const action = { type: 'GOOD' };
    deepFreeze(initialState);
    const newState = counterReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, good: 1 });
  });

  // Test for 'OK' action
  test('ok is incremented', () => {
    const action = { type: 'OK' };
    deepFreeze(initialState);
    const newState = counterReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, ok: 1 });
  });

  // Test for 'BAD' action
  test('bad is incremented', () => {
    const action = { type: 'BAD' };
    deepFreeze(initialState);
    const newState = counterReducer(initialState, action);
    expect(newState).toEqual({ ...initialState, bad: 1 });
  });

  // Test for 'ZERO' action
  test('reset to zero', () => {
    const action = { type: 'ZERO' };
    const state = { good: 5, ok: 3, bad: 2 };
    deepFreeze(state);
    const newState = counterReducer(state, action);
    expect(newState).toEqual(initialState);
  });

  // Add more tests as needed
});
