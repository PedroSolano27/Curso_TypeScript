// Numbers
var x = 10;
var y = 3.145187;
console.log(x, typeof x);
console.log(y.toPrecision(3), typeof y);
// String
var firstName = "Pedro";
var lastName = "Solano";
var fullName;
console.log(firstName.toUpperCase());
console.log(lastName.toUpperCase());
fullName = firstName + " " + lastName;
console.log(fullName, typeof fullName);
// Array
var array = [1, 2, 3, 4, 5];
console.log(array);
//Any
var allType = [1, "Teste", true, [1, 2], { nome: "Pedro", idade: 19 }];
console.log(allType);
// Funções
function hello(name, surname) {
    if (surname) {
        return "Ol\u00E1 ".concat(name, " ").concat(surname);
    }
    return "Ol\u00E1 ".concat(name);
}
console.log(hello("Pedro"));
console.log(hello("Pedro", "Solano"));
function showPoint(obj) { console.log("X: ".concat(obj.x, "; Y: ").concat(obj.y, "; Z: ").concat(obj.z, ";")); }
var pointObj = { x: 10, y: 20, z: 30, };
showPoint(pointObj);
// BigInt
var number;
number = 1000n;
console.log(number);
