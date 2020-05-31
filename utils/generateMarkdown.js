function generateMarkdown(data) {
  return `
# **${data.title.trim()}**\n
![Github](https://img.shields.io/github/last-commit/${data.username.trim()}/${data.title.trim()})\n
## **Description**\n ${data.description.trim()}\n
## **Table of Contents**\n
* Installation\n
* 
`;
}

module.exports = generateMarkdown;
