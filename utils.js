// function to generate markdown for README
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown ({name, description, license, install, contribution, Github, email})  {
    return `# Title
    ${name} 
    
    ## Description
    ${description}
    
    ## License
    ${license}
    
    ## Install
    ${install}
    
    ## Contribution
    ${contribution}
    
    ## Github 
    ${Github}
    
    ## Email
    ${email}`
    // return `# ${data.title}`
};


module.exports = {
    generateMarkdown,
};

//  {
//   name: 'rr',
//   description: 'rr',
//   license: 'The MIT License',
//   install: 'rr',
//   contribution: 'rr',
//   Github: 'rr',
//   email: 'rr'
// }

// ## Description
// ## Table of Contents
// ## Installation
// ## Usage
// ## Credits
// ## License
// ## Badges
// ## Features
// ## How to Contribute
// ## Tests