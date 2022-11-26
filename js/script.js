//-----------PRIMERA PRUEBA---------------------
let nombre = "Programación" + " Fácil.";
let saludo = "Les doy la bienvenida a ";
let web = " Esto es Revolución Digital"
let fraseCompleta = saludo + nombre + web;

console.log(fraseCompleta);

//------------SEGUNDA PRUEBA---------------------
let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
console.log(frase);

//------------TERCER PRUEBA---------------------
let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);

//------------CUARTA PRUEBA--------------------
let nom = prompt("Ingrese su nombre");
let age = prompt("Cuál es su edad?");

console.warn(nom + " " + age);

//------------QUINTA PRUEBA-----------------

let edad;
edad = prompt("Introduce tu edad");
let sexo;
sexo = prompt("Ingrese su sexo: (femenino/masculino)")

if (sexo=="femenino")
    if (edad >= 20){
            alert("Puedes entrar, eres mayor de edad.");
        } 
        else {
            alert("No puedes entrar, eres menor de edad.");
        }
else if (sexo=="masculino")
    if (edad >= 18){
        alert("Puedes entrar, eres mayor de edad.");
    } 
    else {
    alert("No puedes entrar, eres menor de edad.");
    }
else
    alert("Error, el dato ingresado no es correcto");