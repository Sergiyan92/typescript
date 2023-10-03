type User = {
  name: string;
  age: number | string;
};
type evetLoop = 'lesson' | 'gad';
type size = 'small' | 'medium' | 'large';
// const button = document.querySelector('button')! as HTMLButtonElement;
// const input1 = document.getElementById('number1')! as HTMLInputElement;
// const input2 = document.getElementById('number2')! as HTMLInputElement;

// function add(number1: number, number2: number) {
//   return number1 + number2;
// }

// button.addEventListener('click', function () {
//   console.log(add(+input1.value, +input2.value));
// });
// const total: number = 100;
// let empty: null = null;

// const numbers: number[] = [1, 2, 3, 4, 5, 6];

// const user: { name: string; age: number } = {
//   name: 'Serhii',
//   age: 12,
// };
// const user: User = {
//   name: 'serg',
//   age: 12,
// };
// user.age = '15';

// const event: evetLoop = 'gad';
// let age: any = 10;
// age = 'bob';
// age = true;

// let name: unknown = 'gari';
// name = 12;
// name.toFixed();

// enum Sizes {
//   small = 'small',
//   medium = 'medium',
//   large = 'large',
// }
// const button: size = 'large';

// const button2: Sizes = Sizes.large;

// function add(num1: number, num2: number): string {
//   return `${num1}` + `${num2}`;
// }

// console.log(add(2, 3));

// function add(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }
// add(2, 3);
// type User2 = {
//   name: string;
// };

// function great(user: User2): void {
//   console.log(`Hello ${user.name}`);
// }

// type User3 = {
//   name: string;
//   age: number;
//   hoby: string;
// };

// function userConstructor(name: string, age: number, hoby: string): User3 {
//   return {
//     name,
//     age,
//     hoby,
//   };
// }

// type Car = {
//   color: string;
//   price: number;
//   currence: string;
//   start: (color: string) => {};
// };

// const Car = {
//   color: 'red',
//   price: 300,
//   currence: 'UAH',
//   start(color: string) {
//     console.log('Start' + this.color);
//   },
// };

// type User4 = {
//   name: string;
//   age: number;
//   role?: string;
// };

// const user: User4 = {
//   name: 'serh',
//   age: 10,
// };
// const admin: User4 = {
//   name: 'anton',
//   age: 12,
//   role: 'admin',
// };

// type Goods = {
//   [key: string]: number;
// };

// const fruits: Goods = {
//   apples: 15,
//   banana: 10,
//   orange: 3,
// };

// type MixedType = {
//   [key: string]: string | number;
// };

// const userInfo: MixedType = {
//   name: 'Bob',
//   age: 10,
//   country: 'Ukraine',
// };

// const bookDetails: MixedType = {
//   tittle: 'Bible',
//   pageCount: 350,
// };

// function reverse<K>(items: K[]): K[] {
//   return items.reverse();
// }

// let numbers = reverse<number>([1, 2, 3, 4, 5]);
// console.log(numbers);
// let string = reverse<string>(['a', 'b', 'c', 'd']);
// console.log(string);

// function lengthOfObject<T extends { length: number }>(obj: T): number {
//   return obj.length;
// }

// lengthOfObject({ name: 'Bary', length: 30 });

const student = {
  name: 'Bonya',
  age: 12,
};

function getProperty<ObjectType, KeyType extends keyof ObjectType>(
  obj: ObjectType,
  key: KeyType
): ObjectType[KeyType] {
  return obj[key];
}
let studentName = getProperty(student, 'name');
console.log(studentName);

let studentAddress = getProperty(student, 'address');
console.log(studentAddress);
