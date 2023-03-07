// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
        return "";
    }
    switch (license) {
        case "Apache 2.0":
            return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    
    case "Boost Software License 1.0":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

    case "BSD 3-Clause License":
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
        return "";
    
}}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (!license) {
        return "";
    }
    switch (license){
        case "Apache 2.0":
            return "https://opensource.org/license/apache-2-0/" ;
        
        case "Boost Software License 1.0":
            return "https://www.boost.org/LICENSE_1_0.txt";
        
        case "BSD 3-Clause License":
            return "https://opensource.org/license/bsd-3-clause/"

            default:
                return "";
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    }
    return `
    ${renderLicenseBadge(license)}
    This project is licensed under the ${license} License. Click [here]${renderLicenseLink(license)} for more information.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
 
    return `# ${data.title}

    ${renderLicenseSection(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Instalation](#instalation)
  
  - [Usage](#usage)

  - [License](#license)

  - [Tests](#tests)

  - [Questions](#questions)

  ## Instalation

  ${data.installation}

  ## Usage

  ${data.usage}
  




  ## Contributing 

${data.contributing}

  ## Tests

${data.tests}


  ## Contact me
  ### Github: https://github.com/${data.github}
  ### Email:  [${data.email}](mailto:${data.email})
  ### Linkedin: https://www.linkedin.com/in/${data.linkedin}/


  ## Questions
* What were the challenges you faced while building the project and how did you overcome them?

    ${data.questions}

 * Are there any real-world applications or use cases for your project?

    ${data.questions1}

* How did you approach testing and quality assurance for the project?

    ${data.questions2}

* Are there any future plans or improvements you would like to make to the project?

     ${data.questions3}

* How did you collaborate with other team members or contributors, if applicable?

    ${data.questions4}

* How have users or stakeholders responded to the project so far?

    ${data.questions5}

* Are there any lessons learned or takeaways from the project that you can share with others?

    ${data.questions6}

* How does the project contribute to the wider tech community or industry?

    ${data.questions7}

* Are there any additional resources or documentation that would be helpful for someone who wants to understand or use the project?

    ${data.questions8}
  


## License 

${data.license}
 
`;
}

module.exports = generateMarkdown;


