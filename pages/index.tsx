import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import data from '../public/data.json'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tweeted Links</title>
        <meta name="description" content="See all the links that a Twitter user has tweeted." />
        <link rel="icon" href="/img/favicon.ico" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
      	<nav className={styles.nav}>
		<div className={styles.navLeft}>
			<h1 className={styles.title}>
			  Tweeted Links
			</h1>
			<h3>from VitalikButerin</h3>
		</div>
		<a href="https://github.com/lukew3/tweetedlinks">
			<img src='/img/github.svg' className={styles.ghLogo}/>
		</a>
	</nav>
	<div className={styles.cards}>
		{ data.map((entry, index) => {
			return <Card key={`card_${index}`} entry={entry} />
		}) }
	</div>
      </main>

      <footer className={styles.footer}>
        Created by Luke Weiler. <a href="https://github.com/lukew3/tweetedLinks">Github</a>
      </footer>
    </div>
  )
}

export default Home
