const fs = require('fs');
const twitter = require('../lib/twitter');

fs.readFile("../data/tweets.json", 'utf8', (error, tweetData) => {
    const tweet = getTweet(JSON.parse(tweetData));
    twitter.postTweet(tweet);
});

const getTweet = (tweetData) => {
    console.log(">>>>>" + tweetData);
    const tweet = tweetData[0];
    fs.writeFile("../data/tweets.json", JSON.stringify(tweetData.slice(1,)));
    return tweet;
};

