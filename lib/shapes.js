class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor
    }

    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeText}<text x="100" y="125" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
        this.shapeText = `<circle cx="100" cy="125" r="100" fill="${this.shapeColor}"/>`;
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
        this.shapeText = `<polygon points="100, 0 200, 250 0, 250" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
        this.shapeText = `<rect x="0" y="0" width="200" height="200" fill="${this.shapeColor}"/>`;
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
}