/*.......................................
.........EJERCICIO ANIDADO 8.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	3. Inicializar las variables ca= 2 cb= 2.5 cc= 3
	4. leer PERSON
	5. Leer KM
	6. Si PERSON >=20
		6A. Realizar la operacion de KM por CA. En COSTOA 
		6B. Escribir COSTOA
		6C. Realizar la operacion de COSTOA por PERSON. En COSTOCA 
		6D. Escribir COSTOCA
		
		6E. Realizar la operacion de KM por CB. En COSTOB 
		6F. Escribir COSTOB
		6G. Realizar la operacion de COSTOB por PERSON. En COSTOCAB 
		6H. Escribir COSTOCAB
		
		6I. Realizar la operacion de KM por CC. En COSTOC 
		6J. Escribir COSTOC
		6K. Realizar la operacion de COSTOC por PERSON. En COSTOCAC 
		6J. Escribir COSTOCAC
	7. De lo contrario. Escribe Numero ingresado incorrecto.	
	8. Fin
*/

alert("Compañia de Autobuses")
var ca = 2.0
var cb = 2.5
var cc = 3.0
var person = prompt("Cuantas personas viajaran?")
var km = prompt ("Cual es el kilometraje a recorrer?")

if (person >=20 ){
	var costoA = (parseFloat(km)* parseFloat(ca))
	alert("El costo por persona en Tercera Clase es de $" +costoA+ " pesos") 
	var costoCa = (parseFloat(costoA) * parseFloat(person))
	alert("El costo total del camion es de $" +costoCa+ " pesos")
	
	var costoB = (parseFloat(km)* parseFloat(cb))
	alert("El costo por persona en Segunda Clase es de $" +costoB+ " pesos") 
	var costoCaB = (parseFloat(costoB) * parseFloat(person))
	alert("El costo total del camion es de $" +costoCaB+ " pesos")
	
	var costoC = (parseFloat(km)* parseFloat(cc))
	alert("El costo por persona en Primer Clase es de $" +costoC+ " pesos") 
	var costoCaC = (parseFloat(costoC) * parseFloat(person))
	alert("El costo total del camion es de $" +costoCaC+ " pesos")
}

else{
	alert ("Lo sentimos el numero de pasajeros debe ser mayor a 20")
}


/*.......................................
.........EJERCICIO ANIDADO 9.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Inicializar las variables S=20, D=25, T=28, TC=0.05
	3. Escribir la descripcion del problema
	4. leer OPC
	5. Leer CANT
	6. Si OPC = S
		6A. Realizar la operacion de CANT por 20. En TOT 
		6B. Escribir TOT
		6C. Realizar la operacion de TOT por TC MAS TC. En TARJETA 
		6D. Escribir TARJETA
	7. De lo contrario Si OPC = D
		7A. Realizar la operacion de CANT por 25. En TOT 
		7B. Escribir TOT
		7C. Realizar la operacion de TOT por TC MAS TC. En TARJETA 
		7D. Escribir TARJETA
	8. De lo contario Si OPC = T
		8A. Realizar la operacion de CANT por 28. En TOT 
		8B. Escribir TOT
		8C. Realizar la operacion de TOT por TC MAS TC. En TARJETA 
		8D. Escribir TARJETA
	9. De lo contrario. Escribe Letra incorrecta.	
	10. Fin
*/

alert("MIS HAMBURGUESAS PRESUPUESTO") 
var s = 20
var d = 25
var t = 28
var tc = 0.05  //Porcentaje extra por pago con tarjeta de credito

alert("Escribe S D T (MAYUSCULA) respectivamente")
var opc = prompt ("Tu hamburguesa sera \n Sencilla \n Doble \n Triple ??")
var cant = prompt ("Cuantas haMburguesas son?")

if (opc=="S"){
	var tot = (parseFloat(cant) * s)
	alert("El total de tu compra es de $" +tot+ " pesos")
	var tarjeta = ((parseFloat(tot) * tc) + tot)
	alert("Si realizas tu pago con tarjeta de credito tu total es de $" +tarjeta+ " pesos")
}

else if (opc=="D"){
	var tot = (parseFloat(cant) * d)
	alert("El total de tu compra es de $" +tot+ " pesos")
	var tarjeta = ((parseFloat(tot) * tc) + tot)
	alert("Si realizas tu pago con tarjeta de credito tu total es de $" +tarjeta+ " pesos")
}

else if (opc=="T"){
	var tot = (parseFloat(cant) * t)
	alert("El total de tu compra es de $" +tot+ " pesos")
	var tarjeta = ((parseFloat(tot) * tc) + tot)
	alert("Si realizas tu pago con tarjeta de credito tu total es de $" +tarjeta+ " pesos")
}

else {
	alert("Letra incorrecta")
}


/*.......................................
.........EJERCICIO ANIDADO 10.............
.......................................*/

/*Pseudocodigo*/
/*	1. Inicio
	2. Escribir la descripcion del problema
	4. leer MP
	5. Para CONTA=0 Y CONTA<=6 entonces CONTA=CONTA+1  //Inicia ciclo
		6. Cuando cambie CONTA a: 		//Inicia Comparacion
			6a. Conta=1 
			6b. Realiza la operacion, mo1= mp +80%
			6c. Realiza la operacion gf1= mp = 28%
			6d. Realiza la operacion cp1 = mp + mo1 + gf1 
			6e. Realiza la operacion  precioventa1 = cp1 + 45%

			6f. Conta=2 
			6g. Realiza la operacion, mo2= mp +80%
			6h. Realiza la operacion gf2= mp = 28%
			6i. Realiza la operacion cp2 = mp + mo2 + gf2 
			6j. Realiza la operacion  precioventa2 = cp2 + 45%

			6k. Conta=3 
			6l. Realiza la operacion, mo3 = mp +80%
			6m. Realiza la operacion gf3 = mp = 28%
			6n. Realiza la operacion cp3 = mp + mo3 + gf3 
			6o. Realiza la operacion  precioventa3 = cp3 + 45%

			6p. Conta=4 
			6q. Realiza la operacion, mo4 = mp +80%
			6r. Realiza la operacion gf4 = mp = 28%
			6s. Realiza la operacion cp4 = mp + mo4 + gf1 
			6t. Realiza la operacion  precioventa4 = cp4 + 45%

			6u. Conta=5 
			6v. Realiza la operacion, mo5 = mp +80%
			6w. Realiza la operacion gf5 = mp = 28%
			6x. Realiza la operacion cp5 = mp + mo5 + gf5 
			6y. Realiza la operacion  precioventa5 = cp5 + 45%

			6z. Conta=6
			6aa. Realiza la operacion, mo6 = mp +80%
			6bb. Realiza la operacion gf6 = mp = 28%
			6cc. Realiza la operacion cp6 = mp + mo6 + gf6 
			6dd. Realiza la operacion  precioventa6 = cp6 + 45%
			//Termina comparacion
		//Termina ciclo
	7. Escribe precioventa1, precioventa2, precioventa3, precioventa4, precioventa5, precioventa6
*/

alert("COSTOS DE VENTA")
alert ("Tenemos 6 productos a elaborar con claves 1,2,3,4,5 y 6 respectivamente")
var mp = prompt("Ingresa el Costo Total de tu materia prima \n")

for (var conta = 0; conta <= 6; conta++){
	switch (conta){
		case 1: 
			mo1 = ((parseFloat (mp) * parseFloat(0.80)) + parseFloat(mp) )
			gf1 = ((parseFloat (mp) * parseFloat (0.28)) + parseFloat(mp))
			cp1 = (parseFloat (mp) + parseFloat(mo1) + parseFloat (gf1))
			Precioventa1 = ((parseFloat(cp1) * parseFloat(0.45)) + parseFloat(cp1))
			break;
		case 2:
			mo2 = ((parseFloat (mp) * parseFloat(0.85)) + parseFloat(mp) )
			gf2 = ((parseFloat (mp) * parseFloat (0.30)) + parseFloat(mp))
			cp2 = (parseFloat (mp) + parseFloat(mo2) + parseFloat (gf2))
			Precioventa2 = ((parseFloat(cp2) * parseFloat(0.45)) + parseFloat(cp2))
			break;
		case 3:
			mo3 = ((parseFloat (mp) * parseFloat(0.75)) + parseFloat(mp) )
			gf3 = ((parseFloat (mp) * parseFloat (0.35)) + parseFloat(mp))
			cp3 = (parseFloat (mp) + parseFloat(mo3) + parseFloat (gf3))
			Precioventa3 = ((parseFloat(cp3) * parseFloat(0.45)) + parseFloat(cp3))
			break;
		case 4:
			mo4 = ((parseFloat (mp) * parseFloat(0.75)) + parseFloat(mp) )
			gf4 = ((parseFloat (mp) * parseFloat (0.28)) + parseFloat(mp))
			cp4 = (parseFloat (mp) + parseFloat(mo4) + parseFloat (gf4))
			Precioventa4 = ((parseFloat(cp4) * parseFloat(0.45)) + parseFloat(cp4))
			break;
		case 5:
			mo5 = ((parseFloat (mp) * parseFloat(0.80)) + parseFloat(mp) )
			gf5 = ((parseFloat (mp) * parseFloat (0.30)) + parseFloat(mp))
			cp5 = (parseFloat (mp) + parseFloat(mo5) + parseFloat (gf5))
			Precioventa5 = ((parseFloat(cp5) * parseFloat(0.45)) + parseFloat(cp5))
			break;
		case 6:
			mo6 = ((parseFloat (mp) * parseFloat(0.85)) + parseFloat(mp) )
			gf6 = ((parseFloat (mp) * parseFloat (0.35)) + parseFloat(mp))
			cp6 = (parseFloat (mp) + parseFloat(mo6) + parseFloat (gf6))
			Precioventa6 = ((parseFloat(cp6) * parseFloat(0.45)) + parseFloat(cp6))
			break;
	}
}
alert("El precio de venta para el producto 1 es de $" +Precioventa1+ " pesos")
alert("El precio de venta para el producto 2 es de $" +Precioventa2+ " pesos")
alert("El precio de venta para el producto 3 es de $" +Precioventa3+ " pesos")
alert("El precio de venta para el producto 4 es de $" +Precioventa4+ " pesos")
alert("El precio de venta para el producto 5 es de $" +Precioventa5+ " pesos")
alert("El precio de venta para el producto 6 es de $" +Precioventa6+ " pesos")
