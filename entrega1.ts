/*### ¡Gran Concurso de Tortas de Tres Arroyos! 🎂

Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. 
Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones 
de `Sabor`, `Presentación` y `Dificultad` para cada torta. 
Al final, debes determinar qué torta tiene el mayor puntaje. 
Y si hay empate? 🤔 En ese caso, informaremos que se produjo un empate 
(no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, 
solo basta con indicar que se produjo empate si al menos existe uno).

## Funciones a implementar:
calcularPuntaje(sabor, presentacion, dificultad):
Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve 
la suma de esos números (el puntaje total del pastel).

determinarGanador():
Utiliza la librería readline-sync para pedir al usuario el número de participantes, 
luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje 
para determinar la torta con el mayor puntaje.

*Si lo consideran necesario, pueden implementar funciones extra.*/

import * as rs from "readline-sync";
let saborTorta: number=0;
let presentacionTorta: number=0;
let dificultadTorta: number=0;

function calcularPuntaje (numero1: number, numero2: number, numero3: number): number{
return numero1+numero2+numero3
}

function determinarGanador (num1:number, num2:number, num3:number): string {
    let numParticipantes: number = rs.questionInt ("Ingrese el numero de participantes: ");
    let mayorPuntaje: number=0;
    let ganador: string= " ";
    for (let i: number = 1; i <= numParticipantes; i++) {
         num1= rs.questionInt ("Ingrese el puntaje de 1 a 5 para sabor para torta " + i + " : ");
         num2= rs.questionInt ("Ingrese el puntaje de 1 a 5 para presentacion para torta " + i + " : ");
         num3= rs.questionInt ("Ingrese el puntaje de 1 a 5 para dificultad para torta " + i + " : " );
        let puntajeTotal: number= calcularPuntaje (num1,num2,num3);
        if (puntajeTotal>mayorPuntaje){
            mayorPuntaje= puntajeTotal;
            ganador= "El ganador es " +i;
        }else if(puntajeTotal==mayorPuntaje){
            ganador= "Hay empate"
          
        }
             
    }
    return ganador;
}
let esGanador: string= determinarGanador (saborTorta, presentacionTorta, dificultadTorta);
console.log(esGanador);







