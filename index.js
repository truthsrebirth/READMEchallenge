const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils');

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
      choices: ['The MIT License', 'The GPL License', 'Apache license', 'Other'],
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
  ])
  .then((data) => {
    console.log(generateMarkdown(data));
    //console.log(data);
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.md`;

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
  });



