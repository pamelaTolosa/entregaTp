/*Encontrar el elemento más grande del arreglo

Dado el siguiente arreglo
[4,7,9,3,1,45,67,23,29,78,11,16]
- Crear un programa que encuentre cuál es el número
más grande del arreglo e imprimirlo por consola
- Almacenar el número más grande en una variable
global y pasarlo a una función para determinar si el
número es par o impar*/

let arrNumber: number []= [4,7,9,3,1,45,67,23,29,78,11,16,]
let mayor: number= 0

for(let i=0; i<arrNumber.length; i++){ 
    if(arrNumber [i] > mayor){
        mayor= arrNumber [i];

    }
//encontrar el mas grande e imprimir
//con el for recorro el arreglo en todas sus posiciones y accedo a la posicion a traves de array [i]
//Necesito una variable auxiliar que me vaya guardando el mayor en cada vuelta del for
}
console.log(arrNumber);
console.log(mayor);


function determinarParImpar (num: number): boolean{

    return num%2==0;
}
console.log(`El numero ${mayor} es par = ${determinarParImpar(mayor)}`);
