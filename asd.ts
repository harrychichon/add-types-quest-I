import foo from "./func";
import User from "./user";

// let x = 12;

// Gamla från JS: number, string, boolean...
// Nya med TS: any

// console.log(x);

// thing : datatyp

const o: User = {
	name: "Niklas",
	age: 47,
	hobby: "läsa böcker",
};

foo(o);

let arr: User[] = [
	{
		name: "Stina",
		age: 78,
		hobby: "läsa böcker",
	},
	{
		name: "Mio",
		age: 32,
		hobby: "läsa böcker",
	},
];

// console.log(arr[0]);


// const averageAge = (arr: { age: number }[]) => {
//   const allAges: number[] = [];

//   arr.forEach((element: { age: number }) => {
//     allAges.push(element.age);
//   });

//   let sum = 0;
//   for (let i = 0; i < allAges.length; i++) {
//     allAges[i] += sum;
//   }

//   const result: number = sum / allAges.length;
//   return result;
// };

const averageAge = (userArr: User[]): number => {

	let sum = 0;
	userArr.forEach((user) => {
		sum += user.age;
	});
	return sum / userArr.length; 
};

console.log(averageAge(arr));