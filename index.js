// TODO: Include packages needed for this application

"use strict";
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
const licenseArr = ["MIT", "GNUGPLv3", "ISC"];

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
    message: "What is the command to run the application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use the application?",
    name: "usage",
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
  {
    type: "input",
    message: "Please enter your email:",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your github username:",
    name: "github",
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
      const licenseBadge = generateMarkdown.renderLicenseBadge(
        answers.license[0]
      );

      const description = generateMarkdown.renderDescriptionSection(
        answers.description
      );

      const tableOfContents = generateMarkdown.renderTableOfContents();

      const usage = generateMarkdown.renderUsageSection(answers.usage);
      const installation = generateMarkdown.renderInstallationSection(
        answers.installation
      );

      //   const screenShot = generateMarkdown.renderScreenShotSection(
      //     answers.screenShot
      //   );
      const credits = generateMarkdown.renderCreditsSection(answers.credits);
      const license = generateMarkdown.renderLicenseSection(answers.license[0]);

      //Concat markup from template literals

      const readMeString = `${projectName} ${licenseBadge} ${description} ${tableOfContents} ${installation} ${usage} ${credits} ${license}`;
      console.log("This is the readMeString:  " + readMeString);
      //const readMeString = `${projectName}${description}${tableOfContents}${usage}${screenShot}${credits}${license}`;
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
