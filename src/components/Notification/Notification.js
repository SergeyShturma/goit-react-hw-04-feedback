import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <>
      <p className={css.message}>{message}</p>
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/VGbsjSuQAnj0rWFF4o"
        alt="gif"
      ></iframe>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
