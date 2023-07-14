const inquirer = require("inquirer");

const fs = require("fs");

const shapes = require("./lib/shapes.js");

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
    let shape;
    switch (answers.shape) {
        case "Circle":
            shape = new shapes.Circle(answers.characters, answers.shapeColor, answers.textColor);
            break;
        case "Triangle":
            shape = new shapes.Triangle(answers.characters, answers.shapeColor, answers.textColor);
            break;
        case "Square":
            shape = new shapes.Square(answers.characters, answers.shapeColor, answers.textColor);
    }

    fs.writeFile("./output.svg", shape.render(), "utf-8", err => err ? console.log(err) : console.log("Success"));
}

inquirer.prompt(questions).then(answers => handleAnswers(answers));