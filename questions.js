

const inquirer = require('inquirer')
const createFile = require('./createFile')
const markdown = require('./markdown')

function promptUser(){
    inquirer.prompt([
        // Get Github Username of the User
        {
            type: 'input',
            name: 'Github',
            message: 'what is your github username?',
            
        },
        // Get Email address 
        {
            type: 'input',
            name: 'email',
            message: 'what is your e-mail address?'
            
        },
        // Get Project Title
        {
           type: 'input',
           name: 'title',
           message: 'What is the title of your project' 
        },
        // Get the Project Description 
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description about your project'
        },
        // License Information
        {
            type:'list',
            name: 'license',
            message: 'What type of license do you want to use for your project?',
            choices: ['MIT','APACHE 2.0', 'GNU GPL 2.0', 'None']
        },
        // Installation procedure
        {
            type: 'input',
            name: 'installation',
            message: 'what command should be run to install dependencies?',
            default: 'npm i'
        },
        // Usage of the application
        {
            type: 'input',
            name: 'usage',
            message: 'How will the application be used?'
        },
        // Contribtors and contribution instructions
        {
            type: 'input',
            name: 'contribution',
            message: 'What does the user need to know about contributing to the project?'
        },
        // testing the application
        {
            type: 'input',
            name: 'test' ,
            message: 'What command should be run to run tests?',
            default: 'npm test'
        }
    ]).then(data => {
        createFile('./lib/README.md', markdown(data))

    })   
}

module.exports = promptUser