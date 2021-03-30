const fs = require('fs')
const openmoji = require('openmoji')
const om = openmoji.openmojis[0]
const emojisPath = 'C:/Users/Siji/emoji/emoji-library/src/data/'
const filename = 'emojiData'

let data = JSON.stringify(om, null, 4)

console.log('==', data)

fs.appendFile(`${emojisPath}/${filename}.json`, data, 'utf8', (err) => {
    if (err) throw err;
    console.log('Data written to file');
});
