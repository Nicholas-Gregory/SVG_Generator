class Shape {
    constructor(text, shapeColor, textColor) {
        this.text = text;
        this.shapeColor = shapeColor;
        this.textColor = textColor
    }
}

class Circle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }
}

class Triangle extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }
}

class Square extends Shape {
    constructor(text, shapeColor, textColor) {
        super(text, shapeColor, textColor);
    }
}

module.exports = {
    Circle,
    Triangle,
    Square
}