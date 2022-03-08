// 1. How to declare a variable using let and const
const fatherName = 'Aronld';
let season = 'rainy';
season = 'winter';

// 2. conditions
// 6 basic conditions: >,<, ===, !==, <=, >= 
// multiple conditions: &&, ||

if (fatherName === 'Aronld' || season === 'rainy') {

}
else if (fatherName === 'aronld') {

}
else {

};

// 3. array declare
// index, 
// length, push, 
const numbers = [10, 20, 30, 40, 50, 55, 77, 24, 73];
numbers.push(222);
// console.log(numbers.length);
// console.log(numbers[2]);
// console.log(numbers);

// 4. for of loop 
for (number of numbers) {
    number++;
    // console.log(number);
};

// 5. function
function nultiply(x = 0, y = 0) {
    // const x = x;
    // const y = y;
    const t = x + y;
    return t;
};
const total = nultiply(20, 50);
console.log(total);

// 6. Object
// 3 ways to access property by name 
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const myVariable = 'age';

console.log(student.age); // direct by property
console.log(student['age']);// access via property name string 
console.log(student[myVariable]); // access via property name in a variable