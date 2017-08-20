const express = require('express');
const router = express.Router();

const { Twitter } = require("../lib/twitter");



router.post("/", (req, res, next) => {
    const desiredTweet = req.body;

});

module.exports = router;