/*.......................................
.........EJERCICIO ANIDADO 1.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. leer a,b,c
	4. Sumar a+b+c y dividir entre 3 en Promedio
	5. Si Promedio>=6 
		5a. Escribir estas aprobado
	6. Si Promedio<=5
		6a. Escribir estas reprobado
	7. De lo contrario Escribir, datos incorrectos.
	8.Fin.
*/

alert("Promedio de tres numeros y comparacion de resultado")
var a = prompt ("Escribe tu primer calificacion")
var b = prompt ("Escribe tu segunda calificacion")
var c = prompt ("Escribe tu tercer calificacion")
var prome = ((parseFloat(a)+parseFloat(b)+parseFloat(c))/3)
if (prome >= 6)
	alert ("Tu promedio es de " + prome + " \n Has aprobado !!")
else if (prome<6)
	alert ("Tu promedio es de " + prome + " \n Has reprobado !!")
else
	alert("Datos ingresados incorrectos")

/*.......................................
.........EJERCICIO ANIDADO 2.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. leer n1, n2
	5. Si n1>n2
		5a. Escribir N1 es mayor que N2
	6. Si n2>n1
		6a. Escribir N2 es mayor que N1
	7. De lo contrario Escribir, datos incorrectos.
	8.Fin.
*/

alert("Numero mayor que o menor que")
var n1 = prompt ("Escribe primer numero a comparar")
var n2 = prompt ("Escribe segundo numero a comparar")
if (n1>n2) {
	alert("El numero " + n1 + " es Mayor que " + n2)
}
else if (n1<n2) {
	alert ("El numero " +n2+ " es Mayor que " + n1)
}
else if (n1==n2) {
	alert("Los numeros son iguales")
}
else{
	alert("Datos ingresados incorrectos")
}

/*.......................................
.........EJERCICIO ANIDADO 3.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. leer nu1
	4. Si nu1<0
		4a. Escribir el numero es negativo
	5. Si nu1>0
		5a. Escribir el numero es positivo
	6.Fin.
*/

alert("Numero positivo o negativo")
var nu1 = prompt("Escribe un numero entero")

if (nu1<0){
	alert ("El numero que ingresaste es negativo")
}
else if (nu1>0){
	alert ("El numero que ingresaste es positivo")
}

/*.......................................
.........EJERCICIO ANIDADO 4.............. 
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Inicializar las variables traje=1200, d1=0.15, d2=0.08
	4. Escribir el costo de un traje
	5. Leer COMPRA
	6. Realizar la operacion de TRAJE por COMPRA En TOTAL
	7. Si TOTAL >= 2500
		7a. Realizar la operacion de TOTAL MENOS (TOTAL * D1) En DESC.
		7b. Escribir DESC
	8. De lo contrario
		8a. Realizar la operacion de TOTAL MENOS (TOTAL * D2) En DESC.
		8b. Escribir DESC
	9. fin.
*/

alert("Descuento en la tienda de trajes")
var traje = 1200  // supuse que el precio de un traje es de $1200
var d1 = 0.15
var d2 = 0.08

alert("El costo de 1 traje completo es de $1200 pesos")
var compra = prompt ("Cuantos trajes completos deseas adquirir?")
var total = (parseInt(traje) * parseInt(compra))

if (total >= 2500){
	var desc = ( parseFloat(total) - (parseFloat(total)*d1))
	alert("El total a pagar con un descuento del 15% es de $" +desc+ " pesos")
}
else{
	var desc = (parseFloat(total) - (parseFloat(total)*d2))
	alert("El total a pagar con un descuento del 8% es de $" +desc+ " pesos")
}