class Shapes {
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = (color);
    }
}


class Triangle extends Shapes {

    render(){
       return `<polygon points="100 30, 200 200, 0 200" fill="${this.color}" />`
    };
   /* renderShape(color, text){
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="100 30, 200 200, 0 200" fill="${color}" />
      
        <text x="100" y="160" font-size="55" text-anchor="middle" fill="black">${text}</text>
      
      </svg>`
    }*/
}

class Square extends Shapes {
    
    render(){
        return `<rect x="10" y="10" width="100" height="100" fill="${this.color}" />`
    };
   /* renderShape(color, text){
        `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">

        <rect x="10" y="10" width="100" height="100" fill="${this.color}" />
        
   
      </svg>`
    }*/
}

class Circle extends Shapes {
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
    };
   /* renderShape(color, text){
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${color}" />
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
      
      </svg>`
    }*/
}

module.exports = {Shapes, Triangle, Square, Circle,};