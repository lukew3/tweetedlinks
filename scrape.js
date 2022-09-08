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
		let next_token = null;
		while (true) {
			const tweets = await client.tweets.usersIdTweets(
				user.data.id,
				{
					"max_results": 100,
					"pagination_token": next_token,
					"tweet.fields": [
						"created_at"
					]
				}
			);
			next_token = tweets.meta.next_token;
			console.log(tweets.meta.next_token);
			for (const tweet of tweets.data) {
				const capture = tweet.text.match(urlRegex);
				if (capture) {
					for (const url of capture) {
						let url_expanded;
						try {
							url_expanded = await uu.expand(url);
						} catch (error) {
							console.log(error);
							console.log("Couldn't expand url: " + url);
						}
						if (url_expanded && !url_expanded.match(/twitter.com/)) {
							console.log(url_expanded);
							outputData.push({
								"tweet_link": `https://twitter.com/${process.env.TWEETER_USERNAME}/status/${tweet.id}`,
								"link": url_expanded,
								"created_at": tweet.created_at
							});
						}
					};
				};
			};
			if (!next_token) break;
		}
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
