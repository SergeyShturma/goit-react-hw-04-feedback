import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <ul className={css.list}>
    <li className={css.list_good}>Good: {good}</li>
      <li className={css.list_neutral}>Neutral: {neutral}</li>
      <li className={css.list_bad}>Bad: {bad}</li>
      <li className={css.list_total}>Total: {total}</li>
      <li className={css.list_pos}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
