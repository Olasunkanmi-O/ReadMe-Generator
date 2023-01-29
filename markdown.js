


const promptUser = require('./questions')




function markdown (data) {
   
    return `

    # ${data.title}

    ## Table of contents
        -[Description](#description)
        -[Installation](#installation)
        -[usage](#usage)
        -[License](#license)
        -[Contributing](#contributing)
        -[Test](#test)
        -[Question](#question)
    
    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    ${data.license}

    ## Contribution
    ${data.contribution}

    ## Test
    ${data.test}

    ##Questions
    if you have any questions, you can reach the repo ownwer at ${data.email} or check their repo page (https://github.com/${data.github}
      
    `;
}




module.exports = markdown