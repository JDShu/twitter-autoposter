const util = require('util');
const exec = util.promisify(require('child_process').exec);
const fs = require('fs');

async function fortune() {
    const { stdout, stderr } = await exec('fortune');
    return stdout;
}

async function getAllFortunes() {
    const fortunes = [];
    for (let i = 0; i < 10; i++) {
        fortunes.push(await fortune());
    }
    return fortunes;
}


getAllFortunes().then(data => fs.writeFile("tweets.json", JSON.stringify(data)));
