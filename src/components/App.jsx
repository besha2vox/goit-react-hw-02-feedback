import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Container from './Container';
import Notification from './Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const hendlerClick = e => {
    const key = e.currentTarget.id;
    console.log('key', key);

    switch (key) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = statsValues =>
    statsValues.reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = total =>
    Math.floor((good * 100) / total);

  const stateKeys = Object.keys({ good, neutral, bad });
  const statsValues = Object.values({ good, neutral, bad });
  const total = countTotalFeedback(statsValues);
  const positivePercentage = countPositiveFeedbackPercentage(total) + '%';

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateKeys} onLeaveFeedback={hendlerClick} />
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
};

export default App;
