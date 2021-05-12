// TODO: Include packages needed for this application

"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licenseArr = ["MIT", "GNU GPLv3", "ISC"];

const readMe = [
  {
    type: "input",
    message: "Enter your project name:",
    name: "projectName",
  },
  {
    type: "input",
    message: "Please write a short description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "usage",
  },
  {
    type: "input",
    message:
      "Provide the screenshot file name here, must be in ./assets/img/ :",
    name: "screenshot",
  },
  {
    type: "input",
    message:
      "Please include any collaborators with links to their Github profile:",
    name: "credits",
  },
  {
    type: "checkbox",
    name: "license",
    choices: licenseArr,
    message: "Please choose a license under which this code falls:",
  },
];

function init() {
  inquirer
    .prompt(readMe)

    .then((answers) => {
      console.log("Generating in a few seconds");

      // Initialize readme file variables, will call external generateMarkdown for string manipulation
      //template literals - build out markdown in generateMarkdown.js and return to these template literals
      const projectName = generateMarkdown.renderProjectNameSection(
        answers.projectName
      );

      const projectDescription = generateMarkdown.renderDescriptionSection(
        answers.description
      );
      const usage = generateMarkdown.renderUsageSection(answers.usage);
      const screenshot = generateMarkdown.renderScreenShotSection(
        answers.screenShot
      );
      const credits = generateMarkdown.renderCreditsSection(answers.credits);
      const license = generateMarkdown.renderLicenseSection(answers.license[0]);

      //Concat markup from template literals
      const readMeString = `${projectName}${projectDescription}${installation}${screenShot}${credits}${license}`;

      //console.log(readMeString);

      fs.writeFile("READMETEST.md", readMeString, (err) =>
        err ? console.error(err) : console.log("Success!")
      );

      // fs.writeFile("READMETEST.md", JSON.stringify(answers), (err) =>
      //   err ? console.error(err) : console.log("Success!")
      // );
    })

    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
