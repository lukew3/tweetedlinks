# tweetedlinks
A website for seeing what links certain twitter users have tweeted. Originally intended for [VitalikButerin](https://twitter.com/VitalikButerin) but able to be adapted to any other user.

## Getting Started
First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Data scraping
If you want to set up this site for a different user, you're going to have to set up the Twitter API.
Get your credentials [here](https://developer.twitter.com/en/docs/twitter-api) and then fill out the data in `config.json` accordingly. Then, include the username of the desired user to scrape in `config.json`. Finally, run 
```
node scrape.js
```
to get the data from twitter and fill the `/public/data.json` file. Note that at the time of writing this, scrape.js is incomplete
