const inquirer = require("inquirer");
const fs = require(`fs`);
const generateMarkdown = require("./generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
    message: "what is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a discription of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: [
      "MIT",
      "Boost Software License 1.0",
      "BSD 3-Clause License",
      "None",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message: "provide contributing guidlines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide testing instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your Github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "linkedin",
    message: "Enter your linkedin username:",
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`File written to ${fileName}`);
    }
  });
}

function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const markdown = generateMarkdown(data);
      writeToFile("README.md", markdown);
    })
    .catch((err) => {
      console.log(err);
    });
}

init();
