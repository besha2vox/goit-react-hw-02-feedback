import React, { Component } from 'react';
import Section from './Section';
import Button from './Button';
import Statistic from './Statistic/Statistic';
import Container from './Container';

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
      <Container>
        <Section title="Please leave feedback">
          {stateKeys.map(key => (
            <Button key={key} text={key} onClick={this.hendlerClick} />
          ))}
        </Section>
        <Section title="Statistic">
          <Statistic stats={this.state} />
        </Section>
      </Container>
    );
  }
}

export default App;
