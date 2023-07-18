const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const {Triangle, Square, Circle} = require('../lib/shapes.js');


class SVG {
    constructor(){
        this.text = '';
        this.shape = '';
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${this.shape} ${this.text} </svg>`
    }
    renderText(text){
      this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="black">${text}</text>`
    }
    renderShape(shape){
        this.shape = shape.render();
    }
}



class CLI {

    run() {
        return inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'text',
                    message: 'Enter up to three characters!',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose the shape of your svg logo!',
                    choices: ['Square', 'Circle', 'Triangle',]
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter a color keyword, or a hexadecimal number!',
                },

            ])
            .then((answers) => {
              //checks length of text .-.,then logs it
              let svgLetters = '';
              let userText = '';
              
              if (answers.text.length > 0 && answers.text.length < 4) {
                userText = answers.text;
              } else {
                console.log("Only enter 3 characters! 0_0");
                    return;
              }
              console.log(userText);

              //checks user shape
              let userShape = answers.shape;
              console.log(userShape);

              //checks user color
              let userShapeColor = answers.color;
              console.log(userShapeColor);

              //checks for which shape you choose 0.0
              let selectedShape;
              if(userShape === 'Triangle' || userShape === "triangle"){
                selectedShape = new Triangle();

              } else if (userShape === 'Sqaure' || userShape === "square"){
                selectedShape = new Square();

              } else if(userShape === 'Circle' || userShape === "circle"){
                selectedShape = new Circle();
              } else {
                console.log('bad shape :/');
              }
              //sets the color of the shape you chose
              selectedShape.setColor(userShapeColor);

              //creates new instance of svg :)
              //then renders the user text ;)
              //then renders the selected shape :0
              let svg = new SVG();
              svg.renderText(userText);
              svg.renderShape(selectedShape);
              svgLetters = svg.render();

              //logs out a response to let you know when its done! 8)
              writeFile('logo.svg', svgLetters);
              console.log("Generated logo.svg ^-^");
            })
    }
}

module.exports = CLI;