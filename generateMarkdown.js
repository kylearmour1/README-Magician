// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return "";
    }
    switch (license) {
      case "Apache 2.0":
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      case "Boost Software License 1.0":
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      case "BSD 3-Clause License":
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      default:
        return "";
    }
  }
  
  

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
    } else {
      return `

  
  ${renderLicenseBadge(license)}
  
  `;
    }
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
  

  ## License 


  This project is licensed under the ${data.license} license. Click on the badge near the top of the page for more information.
  



  ## Contributing 

  ${data.contributing}

  

  ${data.tests}



  ## Questions
  If you have any additional inquiries or require further clarification, please do not hesitate to contact me via any of the following channels:

  
  ### Github: https://github.com/${data.github}
  ### Email:  [${data.email}](mailto:${data.email})
  ### Linkedin: https://www.linkedin.com/in/${data.linkedin}/

`;
}

module.exports = generateMarkdown;


