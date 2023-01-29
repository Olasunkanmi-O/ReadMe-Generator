
const fs = require('fs')

function createFile (filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) return err

        console.log('Your README file has been generated!, check the lib dir')
    })
}

module.exports = createFile