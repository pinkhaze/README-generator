// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
};
 
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation

  ${data.install}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credit}

  ## License

  ${renderLicenseSection(data.license)} 

  ## Contribute
  Want to contribute? Great!

  ${data.contribute}
  
  ## Tests

  ${data.test}

  ## Questions

  Check out the other projects on my GitHub profile at [${data.github}](https://github.com/${data.github}).

  If you have any questions about the project, please email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
