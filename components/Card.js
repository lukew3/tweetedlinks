import styles from '../styles/Card.module.css';

/*
 * Props contains entry which contains link, tweetLink, tweetDate
 */
const Card = (props) => {
	return (
		<div className={styles.card}>
			<div className={styles.tweetLink}>
				<a href={props.entry.tweet_link}>
					View Tweet
					<img src="/img/twitter.svg" className={styles.logo} />
				</a>
			</div>
			<div className={styles.link}>
				<a href={props.entry.link}>{props.entry.link}</a>
			</div>
			<div className={styles.publishTimeLink}>{props.entry.created_at}</div>
		</div>
	)
}

export default Card;
