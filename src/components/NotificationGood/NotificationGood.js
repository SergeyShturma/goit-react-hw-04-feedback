import css from './NotificationGood.module.css';

export default function NotificationGood({ type }) {
  if (type === 'good') {
    return (
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/fW5qirp4Nm9bC2qAHy"
        alt="gif"
      ></iframe>
    );
  }

  if (type === 'neutral') {
    return (
      <iframe
        title="Fun"
        className={css.gif}
        src="https://giphy.com/embed/mGK1g88HZRa2FlKGbz"
        alt="gif"
      ></iframe>
    );
  }

  if (type === 'bad') {
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
