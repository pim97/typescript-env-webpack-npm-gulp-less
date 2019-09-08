"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const re = require("redom");
class Student {
    constructor(firstName, middle, last) {
        this.firstName = firstName;
        this.middle = middle;
        this.last = last;
        this.fullName = `${firstName} ${middle} ${last}`;
    }
    toString() {
        console.log(`full name: ${this.fullName}`);
    }
}
function greeting(person) {
    return `Hello ${person.firstName} and ${person.lastName}`;
}
let user1 = { firstName: "Jane", lastName: "Iser" };
console.log(greeting(user1));
let words = ['sky', 'moon'];
console.log(_.shuffle(words));
let student = new Student("a", "b", "c");
student.toString();
let arr = [10, 20, 30, 40];
for (var val of arr) {
    console.log(val);
}
let sum = (x, y) => x + y;
exports.hello = [
    re.el("h1#hello", `this is a ${sum(1, 2)} element`, { style: "color:red;", type: "email", autofocus: true, value: "foo" }),
    re.text("hello")
];
exports.hello.forEach((a => {
    re.mount(document.body, a);
}));
const drawing = re.svg("svg", re.svg("symbol", { id: "box", viewBox: "0 0 100 100" }, re.svg("rect", { x: 25, y: 25, width: 50, height: 50 })), re.svg("circle", { r: 50, cx: 25, cy: 25 }), re.svg("use", { xlink: { href: "#box" } }));
re.mount(document.body, drawing);
