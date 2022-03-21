// 1) Literals and properties
// object = {key:value}; // 오브젝트는 key와 value의 집합이다

//const :  변수 1개당 값1개만 담을수 있다.

//const name = 'ellie';
//const age = 4;
//print(name,age);
//function print(name,age) {
//    console.log(name);
//    console.log(age);
//}
const obj1 = {}; // 오브젝트 리터럴형
const obj2 = new Object(); // 오브젝트 컨스트럭털 문법

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name : 'ellie', age: 4 }; // 클래스 없이 괄호로 오브젝트 생성가능
print(ellie);

ellie.hasJob = true; // 뒤늦게 프로펄티를 추가할수 있다.
console.log(ellie.hasJob);  // 20줄에 다 만들어진 상태에서 뒤늦게 추가해도됨ㅋㅋ

delete ellie.hasJob; // 추가했다가 다시 삭제도 가능 ;;;;
console.log(ellie.hasJob); // 콘솔로 다시 부르면 진짜 삭제되어있다

// 동적으로 코딩하면 금방할수있지만, 유지보수 도힘들고 에러가 발생하면 피곤하다..


// 2) object['key'] => key는 스트링타입으로 접근! ''
// 2) Computed properties 계산된 프로펄티
// 프로펄티 타입은 스트링 타입으로 접근해야함
console.log(ellie.name);
console.log(ellie['name']); // object 안의 배열에서 '스트링'에 접근가능함
ellie['hasJob'] = true;
console.log(ellie.hasJob);

// .닷은 일반적으로 코딩할때, 그 키에 해당하는 값을 받아오고싶을때
// key 값은 : runtime에서 결정될때 쓴다. 
function printValue(obj, key) {
    //console.log(obj.key); // 오브젝트에 key라는 프로퍼티가 들어있니? 아니 없는데..
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

//3) Property value shorthand
const person1 = {name : 'bob', age: 2};
const person2 = {name : 'steve', age: 3};
const person3 = {name : 'dave', age: 4};
const person4 = new Person('ellie', 30);
console.log(person4);

//4) Constructor Function
function Person(name, age) {
    // this ={};
    this.name = name;
    this.age = age;
    // return this;
}

//5) in operator : 해당하는키가 오브젝트안에 키가 있는지 없는지 확인하는것
console.log('name' in ellie); // true
console.log('age' in ellie);  // true
console.log('random' in ellie);  // false
console.log(ellie.random); // undefined

// 6) for..in   vs  for..of
// for (key in obj)
console.clear(); //  이전키들 지움

for (key in ellie) { // 엘리가 가지고 있는키들이 블럭을 돌때마다 키라는 지역변수에 할당됨
    console.log(key); // 모든 키들을 받아와서 일처리할때 좋다
}

// for (value of iterable)
const array = [1,2,3,4,5];
for(value of array) { // array 가 가지고 있는 값들이 value에 다 들어감
    console.log(value); 
}

// for..in : key값
// for..of :  배열안에값들

// 7) cloning
const user = {name: 'eliie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//아예 복제하는 방법, 옛날방법!
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);
//assign<T, U>(target: T, source: U): T & U;

const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); //  blue
console.log(mixed.size); //  big

