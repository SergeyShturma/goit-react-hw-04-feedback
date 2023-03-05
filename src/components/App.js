import { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from 'components/App.module.css';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';

const options = ['good', 'bad', 'neutral'];

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFb = () => {
    return good + neutral + bad;
  };

  const countPositiveFbPercentage = () => {
    let total = countTotalFb();
    return total ? Math.round((good / total) * 100) : 0;
  };

  // const handleFeedback = e => {
  //   switch (e) {
  //     case 'good':
  //       return setGood(prevState => prevState + 1);
  //     case 'neutral':
  //       return setNeutral(prevState => prevState + 1);
  //     case 'bad':
  //       return setBad(prevState => prevState + 1);
  //     default:
  //       return;
  //   }
  // };

  const handleFeedback = e => {
    const option = e.target.innerText.toLowerCase();

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw new Error();
    }
  };

  return (
    <div className={css.main}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFb()}
          positivePercentage={countPositiveFbPercentage()}
        />
      </Section>
    </div>
  );
}
