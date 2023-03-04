import PropTypes from 'prop-types';
import css from './Notification.module.css';

export default function Notification({ message }) {
  return (
    <>
      <p className={css.message}>{message}</p>
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/3o7aTskHEUdgCQAXde"
        alt="gif"
      ></iframe>
    </>
  );
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
