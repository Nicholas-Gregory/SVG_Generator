const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "Enter up to 3 characters to display on logo:",
        name: "characters"
    },
    {
        type: "input",
        message: "Enter a color keyword or hexadecimal code for the text color:",
        name: "textColor"
    },
    {
        type: "list",
        message: "Choose a shape type",
        name: "shape",
        choices: [
            "Circle",
            "Triangle",
            "Square"
        ]
    },
    {
        type: "input",
        message: "Enter a color keyword or hexadecimal code for the shape color:",
        name: "shapeColor"
    }
];

const handleAnswers = answers => {

}

inquirer.prompt(questions).then(answers => handleAnswers(answers));