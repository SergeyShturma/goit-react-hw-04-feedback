import css from './NotificationGood.module.css';

export default function NotificationGood({ good, neutral, bad }) {
  if (good) {
    return (
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/fW5qirp4Nm9bC2qAHy"
        alt="gif"
      ></iframe>
    );
  }

  if (neutral) {
    return (
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/mGK1g88HZRa2FlKGbz"
        alt="gif"
      ></iframe>
    );
  }

  if (bad) {
    return (
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/IbmQvzzgtUVZDfUSQP"
        alt="gif"
      ></iframe>
    );
  }
}
