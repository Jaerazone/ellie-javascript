'use strict';

// class 선언
class Person {
    constructor (name,age) {
        this.name = name;
        this.age = age;
    }


    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2) Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // 값을 리턴하고
        return this._age;
    }

    set age(value) { //값을 설정하기때문에 value를 받아와야함
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value <0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 5) 상속과 다양성
// 네모 세모 동그라미 공통점 : shape, 재사용이 가능 유지보수 좋다
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {} // extends : 함수내부 안채워넣어도 위와 똑같이쓸수있다
class Triangle extends Shape {
    draw() {
        super.draw(); // 부모 것도 상속받고싶으면 super.
        console.log('▲'); // 다양성으로 재정의함
    }
    getArea() {
        return (this.width * this.height) /2; // 다양성으로 재정의함
    }

    toString() {
        return `Triangle : color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


//6) instance Of 클래스로 만들어진 새로운 인스턴스
//(  왼쪽의 오브젝트가 오른쪽의 클래스 인스턴스인지? )
//(즉, 이 왼쪽의 오브젝트가 오른쪽 클래스에의해 만들어진 아인지?)
console.log(rectangle instanceof Rectangle); //true
console.log(triangle instanceof Rectangle); //false
console.log(triangle instanceof Triangle); //true
console.log(triangle instanceof Shape); // Shape을 상속했기때문에 true

console.log(triangle instanceof Object); 
// 자바스크립트에서 만든 모든 오브젝트클래스는 자바스크립트의오브젝트를 상속한다.

console.log(triangle.toString());

