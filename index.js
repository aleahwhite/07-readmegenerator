// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
   {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
   },
   {
    type: 'input',
    name: 'description',
    message: 'Please provide a shprt descri[tins of your project!'
   },
   {
    type: 'input',
    name: 'usage',
    message: 'How is your project used?'
   },
   {
    type: 'input',
    name: 'credits',
    message: '(optional) List any collaborators used, any 3rd party assets used or any tutorials followed.'
   },
   {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username.'
   },
   {
    type: 'input',
    name: 'email',
    message: 'Please enter your email!'
   },
   {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project! Or not.',
    choices: ['MIT License', 'Apache 2.0', 'GPL 3.0', 'Mozilla Public 2.0', 'None']
   }
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            console.error('Error writing file: ', err);
        } else {
            console.log('README.md has been generated!');
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        const data = JSON.stringify(answers, null, ' ');
        writeToFile('README.md', data);
    }).catch(function(error){
        console.error('An error occurred: ');
    });
}


// Function call to initialize app
init();
