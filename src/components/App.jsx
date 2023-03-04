import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import css from 'components/App.module.css';
import Statistics from 'components/Statistics/Statistics';
import Section from './Section/Section';
import Notification from 'components/Notification/Notification';

const options = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const elem = e.target.innerText.toLowerCase();
    this.setState(prevState => ({
      [elem]: prevState[elem] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    
    

    return (
      <div className={css.main}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {totalFeedbackCount ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedbackCount}
            positivePercentage={positiveFeedback}
            />
            ) : (
          <Notification
            message={'No feedback given'}
          />
        )}
        </Section>
      </div>
    );
  }
}

export default App;
