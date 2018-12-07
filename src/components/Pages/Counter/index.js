import React from 'react';
import Button from '../../Atoms/Button';
import { increment } from '../../../actions/increment';
import { decrement } from '../../../actions/decrement';
import './index.css';

class Counter extends React.Component {
  state = { counter: 0 };

  onIncrement = () => this.setState(increment);
  onDecrement = () => this.setState(decrement);

  render() {
    return (
      <div>
        <div>
          <p className="counter-label" data-testid="counter">
            {this.state.counter}
          </p>
        </div>
        <Button onClick={this.onIncrement}>+</Button>
        <Button onClick={this.onDecrement}>-</Button>
      </div>
    );
  }
}

export default Counter;
