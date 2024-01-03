//Required npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// Use inquirer to ask user to input needed information on the command line with question objects starting on line 7 and ending on line 63
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
        name: "varLicense",
        type: "list",
        message: "Choose your license:",
        choices: ["MIT_license", "Apache_License_2.0", "GNU_General_Public_License_v3.0", "Mozilla_Public_License_2.0"],
    },
    {
        type: 'input',
        message: 'Please input the guidelines regarding how to contribite to your project:',
        name: 'varContribute',
    },
    {
        type: 'input',
        message: 'Please input the instructions regarding how to test your project:',
        name: 'varTests',
    },
])
.then((response) => 
// use the information gathered in the prompt section above (as the response object) to poplulate the new README2.md file, which will give the user a complete README

fs.writeFile('README2.md', `# ${response.varProjectTitle}

---

## Description

[Visit the Deployed Site](${response.varDeployedSite})

${response.varDescription}

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [AuthorInfo](#author-info)
- [HowToContribute](#how-to-contribute)
- [Tests](#tests)

---

## installation

${response.varInstallation}

---

## usage

${response.varUsage}

---

## license

${response.varLicense}

---

## badges
![Static Badge](https://img.shields.io/badge/License-${response.varLicense}-blue)

---

## author-info

### ${response.varName}

---

## questions

### You can email me with any questions at the email address below. The GitHub repository can also be found below:

* [Email](${response.varEmail})
* [Github](${response.varGithub})

---

## how-to-contribute

${response.varContribute}

---

## tests

${response.varTests}`, (err) =>
  err ? console.error(err) : console.log('Success!')

));
