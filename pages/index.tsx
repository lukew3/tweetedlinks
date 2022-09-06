import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import data from '../public/data.json'

const Home: NextPage = () => {

  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Tweeted Links</title>
        <meta name="description" content="See all the links that a Twitter user has tweeted." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      	<nav className={styles.nav}>
		<h1 className={styles.title}>
		  Tweeted Links
		</h1>
		<img src='/img/github.svg' className={styles.ghLogo}/>
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
