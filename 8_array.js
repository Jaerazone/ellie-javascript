'use strict';

// Array 배열, 자료구조!!!!!!!!!!!!!!!

// 1) 배열 선언 방법
const arr1 = new Array(); // 오브젝트랑 똑같음
const arr2 = [1,2]; // 길이가 2개인 배열이 만들어짐 

// 2) Index  position 인덱스로 배열에 접근하는방법
const fruits = ['🍎사과','🍌바나나'];
console.log(fruits);
console.log(fruits.length);

// 배열은 인덱스를 전달하게되면 인덱스에 해당하는 밸류값을 받아올수있다
console.log(fruits['0']); //사과
console.log(fruits['1']); //바나나
console.log(fruits['2']); //undefined
console.log(fruits[fruits.length-1]); // 총길이가 2지만, 인덱스는 1이끝이라서-1함
console.log('ㅁㅁㅁㅁㅁㅁㅁ');
//3) 배열 빙글빙글 돌아보자

//a. for in
for(let key in fruits) {  // 인덱스값
    console.log(key);
}
console.log('ㅁ');

for(let key in fruits) {  // key값, 사과, 바나나
console.log(fruits[key]);
}

//b. for of
console.log('ㅁ');
for(let key of fruits) {  // key값, 사과, 바나나
    console.log(key);
}

//c. for문
console.log('ㅁ');
for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i]); 
    // fruits[0]인덱스값 : 사과, 1인덱스값 : 바나나
}

//d.forEach    
console.clear();
fruits.forEach(function() {
    console.log('he');
});

fruits.forEach(function(fruits, index) {
    console.log(fruits, index);
});
console.log("화살표 함수로 변경");
fruits.forEach((fruits) => console.log(fruits));
// 배열안에 들어있는 밸류들 마다 내가 전달한 함수들을 출력함!
//각 배열들 들어있는 요소들 하나하나에 우리가 전달한 콜백함수를 수행한다
//forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

//4) 배열에 넣고 빼고 복사

// a. push : 배열의 제일 뒤에 넣고싶다.
fruits.push('🍓딸기','🍑복숭아');
console.log(fruits);

// b. pop: 배열의 제일 뒤에서부터 지우고싶다.
fruits.pop();
fruits.pop();
console.log(fruits);

// c. unshift : 앞에서부터 아이템을 넣는것
fruits.unshift('🍓딸기','🍑복숭아');
console.log(fruits);

// d. shift : 앞에서부터 아이템을 지운다
fruits.shift();
fruits.shift();
console.log(fruits);

// 중요노트!!!!!!
// shift, unshift <<<<<<<<< 빠르다~ pop과 push // Last in first out 이걸 더 선호한다
console.clear();
// e. splice : 아이템을 지정된 포지션에서 지우는것 
// splice(인덱스어디부터지울거?, 몇개지울거?)
fruits.push('🥗','🍚','🍣');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);

fruits.splice(1,1, '🍑','🍈'); // 인덱스1번자리 하나 지우고, 그자리에 복숭아2개 넣는다!
console.log(fruits);

// concat : 두가지 배열을 묶어서 만들수있다
const fruits2 = ['🍧','🍡'];
const newfruits = fruits.concat(fruits2);
console.log(newfruits);

// 5) 배열안에 검색!!
// indexOf : 찾아서 인덱스값을 반환한다, 값이 없다면 -1로 리턴
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎사과'));
console.log(fruits.indexOf('🍈'));

// includes : 포함되어있다면 true, 없다면 false
console.log(fruits.includes('🍈'));
console.log(fruits.includes('🍳'));
console.log(fruits.indexOf('🍳'));

// lastIndexOf : 맨뒤자리 사과 찾아준다.
console.clear();
fruits.push('🍎사과');
console.log(fruits);
console.log(fruits.indexOf('🍎사과')); // 맨앞 0 인덱스 자리 찾아줌
console.log(fruits.lastIndexOf('🍎사과')); // 맨뒤 5 인덱스자리  찾아줌

