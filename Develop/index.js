// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        maessage: 'Please write a short description of your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contirbuting',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writerFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README...'),
    writeToFile('README.md', generateMark({ ...inquirerResponses }));
});
}

// Function call to initialize app
init();
