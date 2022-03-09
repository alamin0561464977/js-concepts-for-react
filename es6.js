const numbers = [89, 35, 98, 12];
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

// 1. template string
const about = `my Name is: ${student.name}, age of: ${student.age} id numeber: ${numbers[2]} also liked movies: ${student.movies[1]}`
// console.log(about)

// 2. arrow function
const getFiftyFive = () => 55;
const addSixtyFive = num => num + 5;
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const total = sum * 2;
    return total;
}
// console.log(doMath(3, 1))

// spread operator
const newNumbers = [...numbers];
// create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];

numbers.push(99);
numbers.push(99);
numbers.push(99);

console.log(numbers);
console.log(newNumbers);
console.log(currentNumbers);