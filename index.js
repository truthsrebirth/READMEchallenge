const inquirer = require('inquirer');
const fs = require('fs');
const {generateHTML} = require('./utils');

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
        name: 'stack',
      },
    {
      type: 'list',
      message: 'Which license did you use?',
      name: 'stack',
      choices: ['The MIT License', 'The GPL License', 'Apache license', 'N/A'],
    },
    {
        type: 'input',
        message: 'How did you install your app?',
        name: 'stack',
      },

      {
        type: 'input',
        message: 'Enter your Github information',
        name: 'Github',
      },
      {
        type: 'input',
        message: 'Enter your E-mail:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What were your contributions?',
        name: 'contribution',
    }
  ])
  .then((data) => {
    console.log(data);
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  });

