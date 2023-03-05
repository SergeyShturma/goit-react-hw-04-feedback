import PropTypes from 'prop-types';
import css from './NotificationGood.module.css';

export default function NotificationGood({ message }) {
  return (
    <iframe
      title="Fun"
      className={css.gif}
      src="https://giphy.com/embed/mGK1g88HZRa2FlKGbz"
      alt="gif"
    ></iframe>
  );
}

NotificationGood.propTypes = {
  message: PropTypes.string.isRequired,
};
