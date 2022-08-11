// TODO: Include packages needed for this application

var fs = require('fs')
var Inquirer = require('Inquirer')
var util = require('util')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        question: "What is the title of your ReadMe?",
        name: "title",
    },
    {
        type: "input",
        question: "What is your description?",
        name: "Description",
    },
    {
        type: "input",
        question: "What would you like in your table of contents?",
        name: "Table of content",
    },
    {
        type: "input",
        question: "What are the steps needed to install your project? Are there any additional tools needed?",
        name: "Installations",
    },
    {
        type: "input",
        question: "Please list any instructions for usage.",
        name: "Usage instructions",
    },
    {
        type: "input",
        question: "Are there any contributors you'd like to honor?",
        name: "contributors",
    },
    {
        type: "input",
        question: "Please list any licenses needed",
        name: "licenses",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(readMe, data, ) {
    if (err) throw err;
    console.log('File successfully created!')

}

// TODO: Create a function to initialize app
function init() {

    
}

// Function call to initialize app
init();
