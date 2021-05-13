const { createPromptModule } = require("inquirer");

//Badge function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  licenseBadge = `## LICENSE: ![${license}](https://img.shields.io/badge/LICENSE-${license}-BLUE) \n`;
  return licenseBadge;
}

// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  switch (licenseName) {
    case "MIT": {
      let licenseLink = ` \n   
      MIT License\n
      Copyright (c) [2021] [Jon Gregory]\n
      `;
      return licenseLink;
      break;
    }
    case "GNUGPLv3": {
      let licenseLink = ` \n
      GNU GENERAL PUBLIC LICENSE\n
      Version 3, 29 June 2007\n

      Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
      return licenseLink;
      console.log(licenseLink);
      break;
    }
    case "ISC": {
      let licenseLink = ` \n
      ISC License\n
      Copyright (c) [2021], [Jon Gregory] \n`;
      return licenseLink;
      console.log(licenseLink);
      break;
    }
    default: {
      return licenseLink;
      console.log(licenseLink);
    }
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //renders the license badge image
  licenseBadge = renderLicenseBadge(license);

  //making it to here. not returning the link info
  licenseLink = renderLicenseLink(license);

  license = ` \n ${licenseBadge} \n ${licenseLink}`;
  return license;
}

//Build project name markup
function renderProjectNameSection(projectName) {
  projectName = `# PROJECT NAME: ${projectName}\n`;
  return projectName;
}

//Build project description markup
function renderDescriptionSection(projectDescription) {
  projectDescription = `## DESCRIPTION: \n${projectDescription}\n`;
  return projectDescription;
}

function renderTableOfContents() {
  tableOfContents = `## TABLE OF CONTENTS\n
- [Installation](#INSTALLATION)\n
- [Usage](#USAGE)\n
- [Credits](#CREDITS)\n
- [License](#LICENSE)\n
`;
  return tableOfContents;
}

//Build installation section markup
function renderInstallationSection(projectInstallation) {
  projectInstallation = `## INSTALLATION: \n${projectInstallation}\n`;
  return projectInstallation;
}

// Build project usage markup
function renderUsageSection(projectUsage) {
  projectUsage = `## USAGE: \n${projectUsage}\n`;
  return projectUsage;
}

//Build project credits markup
function renderCreditsSection(projectCredits) {
  projectCredits = `## CREDITS: \n ${projectCredits} \n `;
  return projectCredits;
}

//Create a function to generate markdown for README
function renderScreenShot(screenShotName) {
  const screenShotMD = `![${screenShotName}](./assets/images/${screenShotName})`;
  console.log(screenShotMD);

  return `## SCREENSHOT: \n${screenShotMD}\n`;
}

module.exports = {
  renderLicenseSection,
  renderProjectNameSection,
  renderDescriptionSection,
  renderTableOfContents,
  renderInstallationSection,
  renderUsageSection,
  renderCreditsSection,
  renderScreenShot,
};
