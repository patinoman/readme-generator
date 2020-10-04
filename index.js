const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js");
const writeFile = require("./utils/generateMarkdown.js");

// prompt of questions for user
const promptProject = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github Username (Required)",
      validate: (gitHubInput) => {
        if (gitHubInput) {
          return true;
        } else {
          console.log("Please enter your Github Username!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Required)",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your email!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "projectName",
      message: "Enter your Project name (Required)",
      validate: (projectNameInput) => {
        if (projectNameInput) {
          return true;
        } else {
          console.log("Please enter your Project name!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please write a short description of your project (Required):",
      validate: (projectDescriptionInput) => {
        if (projectDescriptionInput) {
          return true;
        } else {
          console.log("Please enter your Project Description!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? (Required)",
      validate: (installationSteps) => {
        if (installationSteps) {
          return true;
        } else {
          console.log("Please enter your installation steps!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use. (Required)",
      validate: (usage) => {
        if (usage) {
          return true;
        } else {
          console.log("Please enter your usage information!");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have? (Required)",
      choices: ["MIT", "GPLv3"],
      validate: (license) => {
        if (license) {
          return true;
        } else {
          console.log("Please pick a license!");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message:
        "What does the user need to know about contributing to the repo?",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Please write tests and for your application and explain how to run them",
    },
  ]);
};

promptProject()
  .then((projectData) => {
    return generatePage(projectData);
  })
  .then((readmePage) => {
    return writeFile(readmePage);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
