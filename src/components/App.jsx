import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Container from './Container';
import Notification from './Notification';

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

  countTotalFeedback = statsValues =>
    statsValues.reduce((acc, value) => acc + value, 0);

  countPositiveFeedbackPercentage = total =>
    Math.floor((this.state.good * 100) / total);

  render() {
    const { good, neutral, bad } = this.state;
    const stateKeys = Object.keys(this.state);
    const statsValues = Object.values(this.state);
    const total = this.countTotalFeedback(statsValues);
    const positivePercentage =
      this.countPositiveFeedbackPercentage(total) + '%';

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={stateKeys}
            onLeaveFeedback={this.hendlerClick}
          />
        </Section>
        <Section title="Statistic">
          {total ? (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
