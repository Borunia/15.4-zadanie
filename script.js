//  Task 1
const a = 'Hello';
const b = 'World';

console.log(`${a} ${b}`);

//or 
const Strings2 = (c ='Hello', d ='world') => console.log(`${c} ${d}`);
Strings2();

//Task 2
const multiply = (a, b = 1) => a * b;

console.log(multiply(5, 7));
console.log(multiply(6));

//Task 3
     // using forEach() method
 const average = (...args) => {
    let sum1=0;
    args.forEach(arg =>{
        sum1 +=arg;
    });
    console.log(`Arithmetic average: ${sum1/args.length}`);
 };
 average(1,2,3,4,5);

   //using reduce() method
 const average5 = (...args) => {

	const sum = args.reduce((sum2, arg)=>{
	return sum2 + arg;
	});

 return console.log(`Arithmetic average2: ${sum/args.length}`);
 };

 average5(1,2,3,4,5);

//Task 4
    const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
    average(...grades);

//Task 5
    const array = [1, 4, 'Iwona', false, 'Nowak'];
    const [, , firstName, ,lastName]=array;
    console.log(`The frist name is: ${firstName}`);
    console.log(`The last name is: ${lastName}`);
