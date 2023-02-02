
const promptUser = require("./questions")



function init() {
    // function to initialize the whole application
    console.log(`
    ~~~~~~ Welcome to the README generator APP ~~~~~~
    ==================================================
          Please answer the following questions:\n` )

    promptUser()
    
}

init()