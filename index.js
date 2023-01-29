const promptUser = require("./questions")
const createFile = require("./createFile")
const markdown = require("./markdown")



function init() {
    console.log(`
    ~~~~~~ Welcome to the README generator APP ~~~~~~
    ==================================================
          Please answer the following questions:\n` )

    promptUser()
    createFile('./lib/README.md', markdown(data))
}

init()