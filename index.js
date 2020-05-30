const inquirer = require("inquirer");








const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Github email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your projects' intended purpose?"
    },
    {
        type: "input",
        name: "install",
        message: "How is the project application installed?"
    },
    {
        type: "list",
        name: "license",
        message: "What type of usage license does this project have?",
        choices: [
            "MIT",
            "BSD",
            "APACHE",
            "ISC"
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "Who are the contributors to this project?"
    },
    {
        type: "input",
        name: "test",
        message: "In order to run tests, run the following command:"
    },

];

console.log(questions);





function writeToFile(fileName, data) {
}

function init() {

}

init();
