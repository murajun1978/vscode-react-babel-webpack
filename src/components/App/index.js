import React from 'react';
import './index.css';

const increment = (state, props) => ({ counter: state.counter + 1 });
const decrement = (state, props) => ({ counter: state.counter - 1 });

class App extends React.Component {
  state = { counter: 0 };

  onIncrement = () => this.setState(increment);
  onDecrement = () => this.setState(decrement);

  render() {
    return (
      <div>
        <div>
          <label>{this.state.counter}</label>
        </div>
        <button onClick={this.onIncrement}>+</button>
        <button onClick={this.onDecrement}>-</button>
      </div>
    );
  }
};

export default App;
