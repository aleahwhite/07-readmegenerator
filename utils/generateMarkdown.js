// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return
    case 'Apache 2.0':
      return
    case 'GPL 3.0':
      return
    case 'Mozilla Public 2.0':
      return
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return
    case 'Apache 2.0':
      return
    case 'GPL 3.0':
      return
    case 'Mozilla Public 2.0':
      return
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

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
