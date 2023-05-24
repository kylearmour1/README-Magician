function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

    case "Boost Software License 1.0":
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case "BSD 3-Clause License":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT";

    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";

    case "BSD 3-Clause License":
      return "https://opensource.org/license/bsd-3-clause/";

    default:
      return "";
  }
}

function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `

  
  ${renderLicenseBadge(license)}
  
  `;
  }
}

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


  This project is licensed under the ${
    data.license
  } license. Click on the badge near the top of the page for more information.
  



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
