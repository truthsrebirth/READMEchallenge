// function to generate markdown for README
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === 'Apache License'){
        return `![License](https://img.shields.io/badge/license-Apache%202.0-red.svg)` // markdown for clickable link. Will create badge based on input
    }
    if(license === 'The GPL License'){
        return `![License](https://img.shields.io/badge/license-GPLv3-red.svg)` // markdown for clickable link. Will create badge based on input
    }
    if(license === 'The MIT License'){
        return `![License](https://img.shields.io/badge/license-MIT-red.svg)` // markdown for clickable link. Will create badge based on input
    }
    if(license === 'N/A'){
        return '' 
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === 'Apache License') {
        return 'https://opensource.org/licenses/Apache-2.0'
    }
    if(license === 'The MIT License') {
        return 'https://opensource.org/licenses/MIT'
    }
    if(license === 'The GPL License') {
        return 'https://www.gnu.org/licenses/gpl-3.0'
    }
    if(license === 'N/A') {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `[${renderLicenseBadge(license)}](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown ({name, description, license, install, contribution, tests,  Github, email})  { // includes what will show up on the readme file thats generated
    return `# Title ${name} 

${renderLicenseSection(license)}

## Description

${description}

## Table of Contents 
* [Description](#description)
* [Installation](#installation)
* [Usage Information](#usage)
* [license](#license)
* [Questions](#Github)(#email)


## Install
${install}

## Usage

## License
${license}

## Contribution
${contribution}

## Tests

## Questions

github.com${Github}

Email:${email}`;
};

// we are exporting the generateMarkdown function
module.exports = {
    generateMarkdown,
};