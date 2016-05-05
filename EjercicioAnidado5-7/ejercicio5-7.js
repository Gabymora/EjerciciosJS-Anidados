/*.......................................
.........EJERCICIO ANIDADO 5.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. leer n1, n2, n3
	4. Si n1>n2 y n1>n3
		4a. Escribir n1
	5. Si n2>n1 y n2>n3
		5a. Escribir n2
	6. Si n3>n1 y n3>n2
		4a. Escribir n3	
	7.Fin
*/
alert("Numero mayor que ")
var n1 = prompt ("Escribe primer numero a comparar")
var n2 = prompt ("Escribe segundo numero a comparar")
var n3 = prompt ("Escribe segundo numero a comparar")

if (n1>n2 && n1>n3){
	alert (n1 +" Es mayor que todos")
}
else if (n2>n1 && n2>n3) {
	alert(n2 +" Es mayor que todos")
}
else if (n3>n1 && n3>n2) {
	alert(n3 + " Es mayor que todos")
}

/*.......................................
.........EJERCICIO ANIDADO 6.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. leer personas
	4. Si personas <=199
		4a. pp = 95
		4b. Realizar la operacion de personas por pp. En TOT	 
		4c. Escribir el costo por persona TOT
	5. De lo contrario si personas>=200 y <=300
		5a. pp = 85
		5b. Realizar la operacion de personas por pp. En TOT	 
		5c. Escribir el costo por persona TOT
	6. De lo contrario 
		6a. pp = 75
		6b. Realizar la operacion de personas por pp. En TOT	 
		6c. Escribir el costo por persona TOT
	7.Fin
*/
alert("Presupuesto de banquete")
var personas = prompt ("Cual es la cantidad de personas para el evento?")

if (personas <= 199) {
	var pp = 95.00
	var tot = (parseInt(personas)* parseInt(pp))
	alert("El costo por " + personas + "es de $" + tot + "pesos")
}

else if (personas>=200 && personas<=300) {
	var pp = 85
	var tot = (parseInt(personas)* parseInt(pp))
	alert("El costo por " + personas + " es de $" + tot + "pesos")
}
else {
	var pp = 75
	var tot = (parseInt(personas)* parseInt(pp))
	alert("El costo por " + personas + "es de $" + tot + "pesos")
}

/*.......................................
.........EJERCICIO ANIDADO 7.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. leer ALUMNOS
	4. Si alumnos <=30
		4a. Escribir El costo del camion es de 400o
		4b. Realizar la operacion de personas por 400/alunos En COSTO 
		4c. Escribir COSTO
	5. De lo contrario si alunos >=30 y alunos<=49
		5a. PRECIO = 95
		5b. Realizar la operacion de alumnos por precio en COSTO	 
		5c. Escribir COSTO
		5d. Escribir PRECIO
	6. Si alumnos >=50 y alumnos <=99
		6a. PRECIO = 70
		6b. Realizar la operacion de alumnos por precio 
		6c. Escribir COSTO
		6d. Escribir PRECIO
	7. De lo contrario si alumnos >=100
		7a. PRECIO = 65
		7b. Realizar la operacion de alumnos por precio en COSTO	 
		7c. Escribir COSTO
		7d. Escribir PRECIO		
	8. Fin
*/
alert("Viaje escolar")
var alumnos = prompt ("Que cantidad de alumnos saldran al viaje?")

if (alumnos <= 30) {
	alert("EL costo por alumno se incrementara debido al costo del camion. \n El precio del camion es de $4000 pesos")
	var costo =(4000 / parseFloat(alumnos))
	alert("El costo por alumno es de $" +costo+ " pesos")		
}

else if(alumnos >30 && alumnos <=49){
	var precio = 95.00 
	var costo = (parseInt(alumnos)*parseInt(precio))
	alert ("El pago a la compania por "+ alumnos + " alumnos es de $" + costo + " pesos")
	alert("El costo por alumno es de $" + precio + " pesos")
}

if (alumnos >=50 && alumnos <= 99){
	var precio = 70.00 
	var costo = (parseInt(alumnos)*parseInt(precio))
	alert ("El pago a la compania por "+ alumnos + " alumnos es de $" + costo + " pesos")
	alert("El costo por alumno es de $" + precio + " pesos")
}

else if (alumnos >= 100){
	var precio = 65.00 
	var costo = (parseInt(alumnos)*parseInt(precio))
	alert ("El pago a la compania por "+ alumnos + " alumnos es de $" + costo + " pesos")
	alert("El costo por alumno es de $" + precio + " pesos")	
}

