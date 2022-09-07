require('dotenv').config()
const { Client } = require("twitter-api-sdk");
const fs = require('fs').promises;
const uu = require('url-unshort')();

const client = new Client(process.env.BEARER_TOKEN);
const urlRegex = /(https?:\/\/[^\s]+)/g

async function main() {
	// Data going to be saved into data.json
	let outputData = [];

	// Get user
	const user = await client.users.findUserByUsername(process.env.TWEETER_USERNAME);

	// Get all tweets
	try {
		const tweets = await client.tweets.usersIdTweets(
			user.data.id,
			{
				"tweet.fields": [
					"created_at"
				]
			}
		);
		for (const tweet of tweets.data) {
			const capture = tweet.text.match(urlRegex);
			if (capture) {
				for (const url of capture) {
					const url_expanded = await uu.expand(url);
					console.log(url_expanded);
					outputData.push({
						"tweetLink": `https://twitter.com/${process.env.TWEETER_USERNAME}/status/${tweet.id}`,
						"link": url_expanded,
						"created_at": tweet.created_at
					});
				};
			};
		};
	} catch (error) {
		console.log(error);
	}
//	console.log(outputData);

	// Write to file
	try {
		await fs.writeFile('public/data.json', JSON.stringify(outputData, null, 2));
	} catch (error) {
		console.log("File could not be saved");
	}
}

main();
