# ReadmeGenerator
An API to generate a readme file from the command line based on user input
---

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |
| JavaScript     | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| Node.js | [https://nodejs.org/](https://nodejs.org/)     |
| Inquirer NPM package | [https://www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)     |

---

## Description

[Visit the Deployed Site](https://jeffreydne.github.io/ReadmeGenerator)

This is a website where the user can generate a README file by answering a series of questions in the CLI. 

---

## Instalation

This application requires the npm module inquirer. If you do not already have this module installed globally then you will need to type npm install in the command line before running this program.  


---

## Code Example

The below JavaScript example shows the use of inquirer in order to ask the first question:

```JS
const inquirer = require('inquirer');
inquirer
.prompt([
    {
        type: 'input',
        message: 'What is your name as your want it to appear in Author info section?',
        name: 'varName',
    },
```
The below Javascript example show how the infomration obtained in the prompts is used to make a new file, called README2.md, using the fs.writeFile method: 

```JS
.then((response) => 
// use the information gathered in the prompt section above (as the response object) to poplulate the new README2.md file, which will give the user a complete README

fs.writeFile('README2.md', `# ${response.varProjectTitle}

```
## Usage

This website is designed to allow a user to fill in the information they need to convey in a README file for thier project. It is in an easy to use CLI application, which uses the NPM module Inquirer. The basic template is stored in this app so all the user needs to do is fill in the pertinent information. 

---

## Learning Points

I developed this website from a very basic framework provided by the UC Berkeley Extension Full Stack Bootcamp. 

* The npm fs method is used to write a new readme file based on user input

*  The npm Inquirer module is used to ask the user various quesitons on the command line. Their answers are then stored as variables and then fed into the template using template literals and interpolation

*  The npm init and install functions are used on the command line to allow the use of the above npm features. 

*  Badges are used to show the license being used

*  Screencastify is used to make a video explaining how this website is used. 

---

## Author Info

### Jeffrey Nelson


* [Portfolio](https://jeffreydne.github.io/Jeff-Nelson-Portfolio/)
* [LinkedIn](https://www.linkedin.com/in/jeffrey-nelson13/)
* [Github](https://github.com/Jeffreydne)

---
## Credits

 The excellent staff at UC Berkeley Extension Full Stack Bootcamp provided the beginings of the table of technology used in this README.md, as well as the initial package.json and a few to do items were listed in index.js. The functions to implement the site were all written by me. 
 
 In addition to writing almost all of the javascript, I also wrote all the template to the README.md file to be used as a template.

---

## License

MIT License

---

## Badges
![Static Badge](https://img.shields.io/badge/License-MIT_License-blue)
