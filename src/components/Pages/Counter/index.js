import React, { useReducer } from 'react';
import Button from '../../Atoms/Button';
import { reducer, initialState } from '../../../reducers/counter';
import counterActions from '../../../actions/counter';
import './index.scss';

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = counterActions(dispatch);

  return (
    <div className="counter-container">
      <div>
        <p className="counter-label" data-testid="counter">
          {state.count}
        </p>
      </div>
      <Button onClick={actions.reset}>Reset</Button>
      <Button onClick={actions.increment}>+</Button>
      <Button onClick={actions.decrement}>-</Button>
    </div>
  );
};

export default Counter;
