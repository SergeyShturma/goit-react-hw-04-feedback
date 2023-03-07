import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const options = ['good', 'neutral', 'bad'];

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.options}>
    {options.map(option => (
      <button
        className={css.button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
