import styles from '../styles/Card.module.css';

/*
 * Props contains entry which contains link, tweetLink, tweetDate
 */
const Card = (props) => {
	console.log(props);
	return (
		<div className={styles.card}>
			<a href={props.entry.link} >{props.entry.link}</a>
			<div className={styles.cardRight}>
				<div>
					<a href={props.entry.tweetLink}>
						View Tweet
						<img src="/img/twitter.svg" className={styles.logo} />
					</a>
				</div>
				<div>date</div>
			</div>
		</div>
	)
}

export default Card;
