const importFromIndex = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } 
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'MIT') {
    return `https://opensource.org/licenses/MIT`
  } else if (license == 'Mozilla'){
    return `https://opensource.org/licenses/MPL-2.0`
  } else if (license ='Open Data'){
    return `https://opendatacommons.org/licenses/by/`
  } else {
    return `https://opensource.org/licenses/Apache-2.0`
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `## License
    This Project Uses the {license} license.`
  }
  return '';
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log('data', data)
  return `# ${data.title}

   #### Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributors)
  * [Tests](#tests)
  * [Contact](#contatct)
  * [License](#license)

  ## Description
  ${data.description}
  
  ## License
  ${renderLicenseBadge(data.license)}

  ${renderLicenseLink(data.license)}


  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributions}

  ## Tests
  ${data.tests}

   ## Contact
  Github: https://github.com/${data.username}
  Email: ${data.email}

`;
}

module.exports = generateMarkdown;
