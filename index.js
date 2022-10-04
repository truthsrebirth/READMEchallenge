const inquirer = require('inquirer'); // here we link the inquirer package
const fs = require('fs'); // links the file system module
const { generateMarkdown } = require('./utils');

// Created a function to initialize app
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
        type: 'input',
        message: 'How would you describe the project?',
        name: 'description',
      },
    {
      type: 'list',
      message: 'Which license did you use?',
      name: 'license',
      choices: ['The MIT License', 'The GPL License', 'Apache License', 'N/A'],
    },
    {
        type: 'input',
        message: 'How did you install your app?',
        name: 'install',
      },
    {
        type: 'input',
        message: 'What were your contributions?',
        name: 'contribution',
    },
      {
        type: 'input',
        message: 'Enter your Github username:',
        name: 'Github',
      },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email',
    },
  ]) // creates a demo.md file that appears after submitting answers in the terminal
  .then((data) => {
    fs.writeFile('demo1.md', generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log('Your README has been generated!'))
  });



