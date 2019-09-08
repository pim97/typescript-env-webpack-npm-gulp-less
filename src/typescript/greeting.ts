import * as _ from 'lodash';
import * as re from "redom";

interface Person {
    firstName : string;
    lastName: string;
}


class Student {
    fullName: string;
    constructor(public firstName: string, public middle: string, public last: string) {
        this.fullName = `${firstName} ${middle} ${last}`;
    }

    toString(): void {
        console.log(`full name: ${this.fullName}`);
    }

}


function greeting(person : Person) {
    return `Hello ${person.firstName} and ${person.lastName}`;
}

let user1 = { firstName: "Jane", lastName: "Iser"};

console.log(greeting(user1));


let words = ['sky', 'moon']
console.log(_.shuffle(words));

let student = new Student("a", "b", "c");
student.toString();

let arr = [10, 20, 30, 40];

for(var val of arr) {
  console.log(val);
}
 

let sum = (x: number, y: number) => x + y


export const hello = [
    re.el("h1#hello", `this is a ${sum(1,2)} element`, { style: "color:red;", type: "email", autofocus: true, value: "foo" }),
    re.text("hello")
]

hello.forEach((a => {
    re.mount(document.body, a);
}))


const drawing = re.svg(
    "svg",
    re.svg("symbol", { id: "box", viewBox: "0 0 100 100" }, re.svg("rect", { x: 25, y: 25, width: 50, height: 50 })),
    re.svg("circle", { r: 50, cx: 25, cy: 25 }),
    re.svg("use", { xlink: { href: "#box" } })
);

re.mount(document.body, drawing);