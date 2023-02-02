


const promptUser = require('./questions')




function markdown (data) {
//    function to generate content (data) of the readme based on input from the user
    return `

# ${data.title}

## Table of contents    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)
    
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

## Questions
    If you have any questions, you can reach the repo ownwer, [${data.Github}](#https://github.com/${data.Github})at ${data.email}.
      
    `;
}




module.exports = markdown