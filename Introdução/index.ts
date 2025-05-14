// Numbers
let x: number = 10;
const y: number =  3.145187;
console.log(x, typeof x);
console.log(y.toPrecision(3), typeof y);


// String
const firstName: string = "Pedro";
const lastName: string = "Solano";
let fullName: string;
console.log(firstName.toUpperCase());
console.log(lastName.toUpperCase());
fullName = firstName + " " + lastName;
console.log(fullName, typeof fullName);


// Array
const array: number[] = [1, 2, 3, 4, 5];
console.log(array);


//Any
const allType: any[] = [1, "Teste", true, [1, 2], {nome: "Pedro", idade: 19}];
console.log(allType);


// Funções
function hello(name: string, surname?: string): string { 
    if(surname){ return `Olá ${name} ${surname}`; }
    return `Olá ${name}`;
}
console.log(hello("Pedro"));
console.log(hello("Pedro", "Solano"));


// Interface
interface Point {
    x: number
    y: number
    z: number
}
function showPoint(obj:Point) { console.log(`X: ${obj.x}; Y: ${obj.y}; Z: ${obj.z};`); }
const pointObj: Point = { x: 10, y: 20, z: 30, };
showPoint(pointObj);


// BigInt
let number: bigint;
number = 1000n;
console.log(number);