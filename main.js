function newTeamMember(word) {
    console.log("Hello" + word);
}
var word = "Deepak Parekh";
newTeamMember(word);
let a;
let b;
let c;
let d;
let e = [1, 2, 3];
let f = [1, true, 'a', false];
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
let backgroundColor = Color.Red;
let message;
message = "Kotak bank";
let endsWithC = message.endsWith('k');
let alternativeWay = message.endsWith('k');
let log = function (message) {
    console.log(message);
};
let doLog = () => console.log();
let drawPoint = (point) => {
};
drawPoint({
    x: 1,
    y: 2
});
class Point1 {
    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }
    getDistance(another) {
        //...
    }
}
//let point1: Point1;
let point1 = new Point1();
point1.x = 1;
point1.y = 2;
point1.draw();
