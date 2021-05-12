

//TODO MAVERICK - Can I create a constructor function that returns the full badge??????
function licenseObj (renderLicenseLink,licenseBadge,licenseName){
   this.link = renderLicenseLink;
   this.licenseBadge = () => {
      licenseBadge = `https://img.shields.io/badge/LICENSE-${license}-BLUE`;
          return licenseBadge;
        };
   this.licenseName = () => {
     licenseName = licenseName;
}

const licenseChoice = new licenseObj(link, licenseBadge, licenseName); 

//Badge function that returns a license badge based on which license is passed in
// licenseBadge = renderLicenseBadge(license) => {
//   licenseBadge = `https://img.shields.io/badge/LICENSE-${license}-BLUE`;
//       return licenseBadge;
//     };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
switch (license) {
    case "MIT": {
      console.log(`${license} License chosen`);
      return licenseLink;
      break;
    }
    case "GNU GPLv3": {
      console.log(`${license} License chosen`);
      licenseLink = ""
      return licenseLink;
      break;
    }
    case "ISC": {
      console.log(`${license} License chosen`);
      return licenseLink;
      break;
    }
    default: {
      console.log("Case for no license");
      return license;
    }
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  renderLicenseBadge(license);

  switch (license) {
    case "MIT": {
      console.log(`${license} License chosen`);
      return license;
      break;
    }
    case "GNU GPLv3": {
      console.log(`${license} License chosen`);
      return license;
      break;
    }
    case "ISC": {
      console.log(`${license} License chosen`);
      return license;
      break;
    }
    default: {
      console.log("Case for no license");
      return license;
    }
  }
}

//Build project name markup
function renderProjectNameSection(projectName) {
  projectName = `# PROJECT NAME: ${projectName}\n`;
  return projectName;
}

//Build project description markup
function renderDescriptionSection(projectDescription) {
  projectDescription = `## PROJECT DESCRIPTION: \n${projectDescription}`
  return projectDescription;

}

//Build project usage markup
function renderDescriptionSection(projectUsage) {
  projectUsage = `## PROJECT USAGE: \n${projectUsage}`
  return projectUsage;

}

// TODO: Create a function to generate markdown for README
function renderScreenShot(screenShotName) {
  const screenShotMD = `\`\`\`md
    ![${screenShotName}](assets/images/${screenShotName})
  \`\`\``;
  
  return `## ${screenShotMD}`;
}
 



module.exports = { renderLicenseSection, renderProjectNameSection };
