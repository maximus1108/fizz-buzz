const fs = require('fs');

const divisibleBy5 = i => i % 5 === 0;
const divisibleBy3 = i => i % 3 === 0;
const isPrime = i => !Array.from(new Array((i - 2) < 0 ? 0 : (i - 2)), (_, i) => i + 2).some(j => i % j === 0);

const writeString = Array.from(new Array(500), (_, i) => i + 1).reduce((string, i, _) => 
	isPrime(i) ? 
		`${string}${i}: FizzBuzz++ \r\n`:
		(divisibleBy3(i) && divisibleBy5(i)) ? 
			`${string}${i}: FizzBuzz \r\n` :
			divisibleBy5(i) ? 
				`${string}${i}: Buzz \r\n` :
				divisibleBy3(i) ? 
					`${string}${i}: Fizz \r\n` :
					string
, '');

console.log(writeString);

fs.existsSync('fizzbuzz.log') ?
	fs.appendFileSync('fizzbuzz.log', writeString) :
	fs.writeFileSync('fizzbuzz.log', writeString);