const Twitter = require('twitter-node-client').Twitter;
const config = require('../data/twitter_config.json');

const twitter = new Twitter(config);

const error = (err) => {
    console.error("ERROR " + err);
    return false;
};

const success = (data) => {
    console.log(data);
    return true;
};

const postTweet = (desiredTweet) => {
    twitter.postTweet({status: desiredTweet}, error, success);
};

exports.postTweet = postTweet;