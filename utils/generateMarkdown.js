// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    case 'GPL 3.0':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    case 'Mozilla Public 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://spdx.org/licenses/MIT.html'
    case 'Apache 2.0':
      return 'http://www.apache.org/licenses/LICENSE-2.0'
    case 'GPL 3.0':
      return 'https://www.gnu.org/licenses/gpl-3.0'
    case 'Mozilla Public 2.0':
      return 'https://mozilla.org/MPL/2.0/'
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `\n  This project is licensed under the ${license} license. For more information, see the [license page](${renderLicenseLink(license)}).\n${renderLicenseBadge(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents 
  -[Usage](#usage)
  -[Credits](#credits)
  -[Questions](#questions)
  -[License](#license)

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Questions
  if you have any questions/comments about the project, you can email me at [${data.email}](mailto:${data.email}). For more of my work you can visit my GitHub at [${data.github}](https://github.com/${data.github}).

  ## License
  ${renderLicenseSection(data.license)}

  `;
}

module.exports = generateMarkdown;
