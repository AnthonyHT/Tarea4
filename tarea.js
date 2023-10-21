//1.
let suma = [1, 2, 3, 4, 5];
let sum = suma.reduce((a, b) => a + b, 0);
console.log(sum);




//2.
let filtrar = [1, 2, 3, 4, 5];
let evenNumbers = filtrar.filter(num => num % 2 === 0);
console.log(evenNumbers);



//3.
let elementoM = [1, 2, 3, 4, 5];
let max = Math.max(...elementoM);
console.log(max);



//4.
let contar = [1, 2, 3, 2, 4, 2];
let count = contar.filter(num => num === 2).length;
console.log(count);



//5.
let invertir = [1, 2, 3, 4, 5];
let reversed = invertir.slice().reverse();
console.log(reversed);



//6.
let eliminar = [1, 2, 2, 3, 4, 4, 5];
let uniqueNumbers = [...new Set(eliminar)];
console.log(uniqueNumbers);



//7.
let ordenar = ["George", "Veronica", "Mounika", "Shaunik"];
ordenar.sort();
console.log(ordenar);



//8.
let concatenar1 = [1, 2, 3];
let concatenar2 = [4, 5, 6];
let concatenado = concatenar1.concat(concatenar2);
console.log(concatenado);



//9.
let longitud = ["George", "Veronica", "Mounika", "Shaunik"];
let numero = 5;
let filtrado = longitud.filter(cadena => cadena.length >= numero);
console.log(filtrado);



//10.
let mapear = [1, 2, 3, 4, 5];
let transformado = mapear.map(numero => numero * 2);
console.log(transformado);