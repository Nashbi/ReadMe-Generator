// TODO: Include packages needed for this application

var fs = require('fs')
var inquirer = require('inquirer')
var util = require('util')
const path = require('path')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your ReadMe?",
        name: "title",
    },
    {
        type: "input",
        message: "What is your description?",
        name: "description",
    },
    {
        type: "input",
        message: "What would you like in your table of contents?",
        name: "contents",
    },
    {
        type: "input",
        message: "What are the steps needed to install your project? Are there any additional tools needed?",
        name: "installations",
    },
    {
        type: "input",
        message: "Please list any instructions for usage.",
        name: "usage",
    },
    {
        type: "input",
        message: "Are there any contributors you'd like to honor?",
        name: "contributors",
    },
    {
        type: "input",
        message: "Please list any licenses needed",
        name: "licenses",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(readMe, data,) {
    if (err) throw err;
    return fs.writeFileSync(path.join(process.cwd(), readMe), data);
}

// TODO: Create a function to initialize app
function init() {

inquirer.prompt(questions).then((userAnswers) => {

    writeToFile('README.md', generateMarkdown({userAnswers}));
});
    
}

// Function call to initialize app
init();
