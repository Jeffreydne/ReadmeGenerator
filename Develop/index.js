// TODO: Include packages needed for this application
// Might not need below:
// const generate = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
// might not need below
// const questions = [];

// variables- not needed
// let userName, userEmail, userGithub, projectTitle, deployedSite, description, installation, usage, contribute, tests;

// TODO: Create a function to write README file
// might not need below in current form
// function writeToFile(fileName, data) {}

// alternate preocess for now
// XXXXXXXXX everything between the rows of XXX was imported from lesson 20
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name as your want it to appear in Author info section?',
        name: 'varName',
    },
    {
        type: 'input',
        message: 'What is the email address you want to add to README?',
        name: 'varEmail',
    },
    {
        type: 'input',
        message: 'What is the Github URL you want to add to README to connect to your Github account?',
        name: 'varGithub',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'varProjectTitle',
    },
    {
        type: 'input',
        message: 'What will be the url of your deployed site?',
        name: 'varDeployedSite',
    },
    {
        type: 'input',
        message: 'Please input the description of your project:',
        name: 'varDescription',
    },
    {
        type: 'input',
        message: 'Please input the installation instructions for your project:',
        name: 'varInstallation',
    },
    {
        type: 'input',
        message: 'Please input the usage section of your project README:',
        name: 'varUsage',
    },
    {
        type: 'input',
        message: 'Please input the description of how to contribite to your project:',
        name: 'varContribute',
    },
    {
        type: 'input',
        message: 'Please input the description of how to test your project:',
        name: 'varTests',
    },
])
.then((response) => 
// console.log(`Your name is ${response.name}. You know the following languages: ${response.languages}. You prefer to comunicate with ${response.communication}.`)

//This trial of storing data doesn't seem to work. Only the 1st "response is in orange"
// userName = response.varName, userEmail = response.varEmail, userGithub = response.varGithub, projectTitle = response.varProjectTitle, deployedSite = response.varDeployedSite, description = response.varDescription, installation = response.varInstallation, usage = response.varUsage, contribute = response.varContribute, tests = response.varTests

fs.writeFile('README.md', `# ${response.varProjectTitle}

---

## Description

[Visit the Deployed Site](${response.varDeployedSite})

${response.varDescription}

---

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Badges](#Badges)
- [AuthorInfo](#AuthorInfo)
- [HowToContribute](#HowToContribute)
- [Tests](#Tests)

---

## Installation

${response.varInstallation}

---

## Usage

${response.varUsage}

---

## AuthorInfo

### ${response.varName}

* [Email](${response.varEmail})
* [Github](${response.varGithub})

---

## HowToContribute

${response.varContribute}

---

## Tests

${response.varTests}`, (err) =>
  err ? console.error(err) : console.log('Success!')

));

// The below section is the original- will be moved or copy above works? ??
// fs.writeFile('log.txt', `Your name is ${response.name}. You know the following languages: ${response.languages}. You prefer to comunicate with ${response.communication}.`, (err) =>
//   err ? console.error(err) : console.log('Success!')

// ));
// XXXXXXXXXXX


// TODO: Create a function to initialize app
// might not need below
// function init() {}

// Function call to initialize app
// might not need below
// init();
