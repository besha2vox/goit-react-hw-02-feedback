import React, { Component } from 'react';
import Button from './Button';
import Statistic from './Statistic/Statistic';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  hendlerClick = e => {
    const key = e.currentTarget.id;
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  render() {
    const stateKeys = Object.keys(this.state);

    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          {stateKeys.map(key => (
            <Button key={key} text={key} onClick={this.hendlerClick} />
          ))}
        </div>
        <Statistic stats={this.state} />
      </div>
    );
  }
}

export default App;
