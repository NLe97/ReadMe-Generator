function generateMarkdown(data) {
  return `
# **${data.title.trim()}**\n
![Github](https://img.shields.io/github/last-commit/${data.username.trim()}/${data.title.trim()})\n
## **Description**\n ${data.description.trim()}\n
## **Table of Contents**\n
* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## ** Installation**\n
In order to install the dependencies, run the command:\n
\`${data.install.trim()}\`\n
## **Usage**\n ${data.usage.trim()}\n
## **License**\n
This project is licensed by ${data.license.trim()} license.\n
## **Contributing**\n
${data.contribution.trim()}\n
## **Tests**\n
To run tests, run the command:\n
\`${data.test.trim()}\`\n
## **Questions**\n
<img src="https://avatars.githubusercontent.com/${data.username.trim()}">\n
For question on this repo, report issue and contact ${data.email.trim()}


`;
}

module.exports = generateMarkdown;
