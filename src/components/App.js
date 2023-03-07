import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from 'components/App.module.css';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import Notification from 'components/Notification/Notification';
import NotificationGood from 'components/NotificationGood/NotificationGood';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selectedOption, setSelectedOption] = useState('none');

  const countTotalFb = () => {
    return good + neutral + bad;
  };

  const countPositiveFbPercentage = () => {
    let total = countTotalFb();
    return total ? Math.round((good / total) * 100) : 0;
  };

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevState => prevState + 1);
        setSelectedOption('good');
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        setSelectedOption('neutral');
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        setSelectedOption('bad');
        break;

      default:
        throw new Error();
    }
  };

  return (
    <div className={css.main}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {selectedOption !== 'none' && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFb()}
            positivePercentage={countPositiveFbPercentage()}
          />
        )}
        {selectedOption === 'none' && (
          <Notification message="No feedback given" />
        )}
        <NotificationGood type={selectedOption} />
      </Section>
    </div>
  );
}
