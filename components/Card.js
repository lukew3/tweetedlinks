import styles from '../styles/Card.module.css';

/*
 * Props contains entry which contains link, tweetLink, tweetDate
 */
const Card = (props) => {
	console.log(props);
	return (
		<div className={styles.card}>
			<div className={styles.tweetLink}>
				<a href={props.entry.tweetLink}>
					View Tweet
					<img src="/img/twitter.svg" className={styles.logo} />
				</a>
			</div>
			<div className={styles.link}>
				<a href={props.entry.link}>{props.entry.link}</a>
			</div>
			<div className={styles.publishTimeLink}>{props.entry.publishTime}</div>
		</div>
	)
}

export default Card;
