
const promptUser = require("./questions")



function init() {
    console.log(`
    ~~~~~~ Welcome to the README generator APP ~~~~~~
    ==================================================
          Please answer the following questions:\n` )

    promptUser()
    
}

init()