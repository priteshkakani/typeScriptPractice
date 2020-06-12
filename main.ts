function newTeamMember(word){
    console.log("Hello"+word);
}

var word = "Deepak Parekh"

newTeamMember(word)

let a : number;
let b : boolean;
let c : string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Red;

let message; 
message = "Kotak bank";
let endsWithC = (<string>message).endsWith('k');
let alternativeWay = (message as string).endsWith('k');

let log = function(message){
    console.log(message);
}

let doLog = () => console.log();

interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {

}

drawPoint({
    x: 1,
    y : 2
});

class Point1{
    x: number;
    y: number;
    constructor(x: number, y:number){
        this.x = x;
    }
    draw(){
        console.log('X: '+ this.x + ' Y: ' + this.y);
    }
    getDistance(another: Point){
        //...
    }
}
//let point1: Point1;
let point1 = new Point1();
point1.x = 1;
point1.y = 2;
point1.draw();