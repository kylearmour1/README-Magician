// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require(`fs`);
const generateMarkdown = require('./generateMarkdown');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "what is your project title?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a discription of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['Apache 2.0', 'Boost Software License 1.0', 'BSD 3-Clause License', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'provide contributing guidlines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide testing instructions:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your linkedin username:'
    },
{
        type: 'input',
        name: 'questions',
        message: 'What were the challenges you faced while building the project and how did you overcome them?'
},

{
    type: 'input',
    name: 'questions1',
    message: 'Are there any real-world applications or use cases for your project?'
    
},
{
    type: 'input',
    name: 'questions2',
    message: 'How did you approach testing and quality assurance for the project?'
},
{
    type: 'input',
    name: 'questions3',
    message: 'Are there any future plans or improvements you would like to make to the project?'
},
{
    type: 'input',
    name: 'questions4',
    message: 'How did you collaborate with other team members or contributors, if applicable?'
},
{
    type: 'input',
    name: 'questions5',
    message: 'How have users or stakeholders responded to the project so far?'
},
{
    type: 'input',
    name: 'questions6',
    message: 'Are there any lessons learned or takeaways from the project that you can share with others?'
},
{
    type: 'input',
    name: 'questions7',
    message: 'How does the project contribute to the wider tech community or industry?'
},
{
    type: 'input',
    name: 'questions8',
    message: 'Are there any additional resources or documentation that would be helpful for someone who wants to understand or use the project?'
},
];



// TODO: Create a function to write README file


function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
    if (err) {
        console.log(err);
        
    } else {
        console.log(`File written to ${fileName}`);
    }
   }) ;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const markdown = generateMarkdown(data);
        writeToFile('README.md', markdown);
    })
    .catch((err) => {
        console.log(err);
    });
}

// Function call to initialize app
init();
