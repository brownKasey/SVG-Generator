const { describe } = require('yargs');
const Triangle = require('../lib/shapes.js');
const Square = require('../lib/shapes.js');
const Circle = require('../lib/shapes.js');
const { it } = require('node:test');


//Triangle test ^-^
describe('Triangle', () => {
    it('should render the shape with color', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="100 30, 200 200, 0 200" fill="blue" />');
    })
})

//Square test 0.0
describe('Square', () => {
    it('should render the shape with color', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="100" height="100" fill="red" />');
    })
})

//Circle test o,o
describe('Circle', () => {
    it('should render the shape with color', () => {
        const shape = new Circle();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="10" y="10" width="100" height="100" fill="green" />');
    })
})