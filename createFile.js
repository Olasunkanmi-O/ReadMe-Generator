
const fs = require('fs')

function createFile (filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) return err

        console.log('README generated!')
    })
}

module.exports = createFile