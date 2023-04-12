// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdownFile = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe the application',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Are there any installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the use?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Were there any other contributers?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Desribe any test instructions',
        name: 'tests'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Did you use any licenses?',
        choices: ['MIT', 'Mozilla', 'Open Data', 'Apache'] 
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('generateReadMe.md', data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('ReadMe Succesfully Made!')
        }
    })
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        let filename = generateMarkdownFile(data);
        writeToFile(filename);
    })
    
}

// Function call to initialize app
init();

module.exports = questions