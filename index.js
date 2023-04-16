// TODO: Include packages needed for this application
const inquirer = require('inquirer');  // Library for NPM module
const fs = require('fs');  //Accesses file writing 
const util= require('util');  

const writeToFile = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const information= [
    {
        name: "title",
        message: "Enter the title of your project",
        type: "input",
    },
    {
        name: "description",
        message: "Enter a description of your project",
        type: "input",
    },
    {
        name: "installations",
        message: "Enter the installation instructions for your project",
        type: "input",
    },
    {
        name: "usage",
        message: "Enter the usage guidelines for your project",
        type: "input",
    },
    {
        name: "contribution",
        message: "Enter the contribution guidelines for your project",
        type: "input",
    },
    {
        name: "license",
        type: "list",
        message: "Choose a license for your project",
        choices: ['GNU AGPLv3', 'GNU LGPLv3', 'MIT License', 'Boost Software License 1.0'],
    },
    {
        name: "username",
        message: "Enter your Github username",
        type: "input",
    },

]; //Inputs in a suggested way to format the readme for easier viewing

//takes the input information and gets the link to the license 
function createReadMe(answer){
 
    let badge = "";
    if(answer.license == "MIT License"){
        badge = "![License](https://img.shields.io/static/v1?label=License&message=MIT&color=blue&style=plastic)"
    } else if (answer.license == "GNU AGPLv3") {
        badge = "![License](https://img.shields.io/static/v1?label=License&message=AGPLv3&color=blue&style=plastic)"
    } else if (answer.license == "Boost Software License 1.0") {
        badge = "![License](https://img.shields.io/static/v1?label=License&message=BOOSTv1&color=blue&style=plastic)"
    } else if (answer.license == "GNU LGPLv3") {
        badge = "![License](https://img.shields.io/static/v1?label=License&message=LGPLv3&color=blue&style=plastic)"
    } 
    
    return`# ${answer.title}`
    `${badge}
## Description
${answer.description}
## Table of Contents:
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
### Installation:
This project uses the following dependencies:
\`\`\`${answer.installations}\`\`\`
### Usage:
${answer.usage}
### License:
This project is licensed under:
${answer.license}
### Contributing:
${answer.contribution}
### GitHub:
Find me on GitHub @ [GitHub](https://github.com/${answer.username})`}


//generates the readme to be copied
inquirer.prompt(information)
.then((answer) => writeToFile('createdReadMe.md', createReadMe(answer)))
    .then(() => console.log('Successfully generated ReadMe'))
    .catch((err) => console.error(err));


    function init() {}
    init();
