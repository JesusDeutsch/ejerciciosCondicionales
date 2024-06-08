// Ejercicio 1
// Escribe un condicional que evalúe si el número es mayor o igual a 5 o no: si lo es, debes mostrar por consola el string "El número es mayor o igual que 5"; si no, debes mostrar por consola el string "El número es menor que 5". Cambia el valor de number varias veces para comprobar que funciona.

let number = parseInt(prompt ('Ingrese un numero del 0 al 10'));

if (isNaN(number)) {
    alert('El caracter ingresado no es un numero')
}   
else if (number >= 5) {
    console.log("El número es mayor o igual que 5");
} else {
    console.log("El número es menor que 5");
}

// Ejercicio 2
// Igual que el ejercicio anterior, pero con una modificación:

// Si el número es mayor que 5, muestra por consola "El número es mayor que 5".
// Si, por el contrario, el número es menor que 5, muestra por consola "El número es menor que 5".
// Si no se cumple ninguna de los anteriores, muestra por consola "El número es igual a 5". Cambia el valor de number varias veces para comprobar que funciona.

let numbers = parseInt(prompt ('Ingrese un numero del 0 al 10'));

if (isNaN(numbers)) {
 
    alert('El caracter ingresado no es un numero')

} else if (numbers > 5) {
    console.log("El número es mayor que 5");
} else if (numbers < 5) {
    console.log("El número es menor que 5");
} else {
    console.log("El número es igual a 5");
}

// Ejercicio 3
// Escribe un condicional que evalúe si number es par o no: si lo es, debes mostrar por consola el string "El número es par"; si no, debes mostrar por consola el string "El número es impar".

if (number %2 === 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

// Ejercicio 4
// Crea dos variables: number1 y number2. Dale los valores que quieras (números). A continuación, crea los condicionales necesarios para que se muestre por consola qué número es el mayor o bien si son iguales.

let number1 = 19;
let number2 = 30;

if (number1 > number2) {
    console.log(`${number1} es mayor que ${number2}`);
} else if (number1 < number2) {
    console.log(`${number2} es mayor que ${number1}`);
} else {
    console.log(`${number1} y ${number2} son el mismo valor`);
};

// Ejercicio 5
// Crea tres variables: lado1, lado2, lado3. Dale 3 valores numéricos. A continuación, crea los condicionales para que se muestre por consola si el triángulo es equilátero, isósceles o escaleno.

let lado1 = 103;
let lado2 = 10;
let lado3 = 12;

if (lado1 === lado2 && lado1 === lado3 && lado3 === lado2) {
    console.log('Es un triangulo equilatero');

} else if (lado1 === lado2 || lado1 === lado3 || lado3 === lado2) {   
    
    console.log('Es un triangulo isoceles');

} else { 

    console.log('Es un triangulo escaleno');

}

// Ejercicio 6
// Crea 3 variables: min, max y number3, y dale valores numéricos a cada uno. A continuación, escribe los condicionales necesarios para que se muestre por consola si el número se encuentra en el rango dado (si es mayor que min y menor que max).

let min = 19;
let max = 33;
let number3 = 30;

if (number3 < min) {
    console.log("El numero es menor que el rango minimo");
} else if (number3 > max) {
    console.log("El numero es mayor que el rango maximo");
} else {
    console.log("El numero esta dentro del rango dado");
}


// Ejercicio 7
// Crea la variable operation y reutiliza number1 y number2 del Ejercicio 4. Escribe condicionales para realizar las cuatro operaciones matemáticas básicas:
// Printa el resultado de number1 + number2 si la operation es “add”.
// Printa el resultado de number1 - number2 si la operation es “subtract”.
// Printa el resultado de number1 * number2 si la operation es “multiply”.
// Printa el resultado de number1 / number2 si la operation es “divide”.
// Si no se cumple ninguna de las anteriores, print Invalid operation.


let operation = '';

if (operation === 'add') {
    console.log(number1 + number2);
} else if (operation === 'subtract') {
    console.log(number1 - number2)
} else if (operation === 'multiply') {
    console.log(number1*number2)
} else if (operation === 'divide') {
    console.logn(umber1/number2)
}

console.log(operation);

// Ejercicio 8
// Crea la variable year y pídele al usuario que introduzca un año. A continuación, escribe condicionales para determinar si el año es bisiesto o no. El resultado debe ser un string que se le muestre al usuario en un pop-up.

let year = prompt('ingrese año para saber si es bisiesto')

if ((year  % 4 === 0 && year % 100 !==0) || (year % 400 === 0)) {
        console.log('Es bisiesto');
    
} else {
    console.log('No es bisiesto');
}

// Bonus: repite el ejercicio usando el operador ternario.

year  % 4 === 0 && year % 100 !==0 || (year % 400 === 0) 
? console.log('Es bisiesto') 
:  console.log('No es bisiesto'); 


// Ejercicio 9
// Usa switch para determinar el número de días que tiene un mes dado en la variable month. El valor de la variable se le pedirá al usuario (en forma de string, en inglés y en minúsculas: "january", "february", "march", etc.).

let month = prompt('Enter month')

switch (month) {
    case 'january':
        window.alert('31 days');
        break;

    case 'february':
        window.alert('28 days');
        break;

    case 'march':
        window.alert('31 days');
        break;

    case 'april':
        window.alert('30 days');
        break;

    case 'may':
        window.alert('31 days')
        break;

    case 'june':
        window.alert('30 days');
        break;

    case 'july':
        window.alert('31 days');
        break;

    case 'august':
        window.alert('31 days');
        break;

    case 'september':
        window.alert('30 days');
        break;

    case 'october':
        window.alert('31 days');
        break;

    case 'november':
        window.alert('30 days');
        break;

    case 'december':
        window.alert('31 days');
        break;

    default:
        window.alert('The month entered does not exist');
        break;
}

// Resultado esperado: "El mes tiene <<numero de días>> días", y debe mostrarse en un pop-up.

// Ejercicio 10
// Usa la misma variable del ejercicio anterior (month), y escribe los condicionales necesarios para determinar la estación (primaver, verano, otoño, invierno). El resultado también debe mostrarse al usuario en un pop-up.
 


let season;
switch (month) {
    case 'december':
    case 'january':
    case 'february':
        season = 'winter';
        break;

    case 'march':
    case 'april':
    case 'may':
        season = 'spring';
        break;

    case 'june':
    case 'july':
    case 'august':
        season = 'summer';
        break;

    case 'september':
    case 'october':
    case 'november':
        season = 'fall';
        break;

    default:
        season = 'unknown';
        break;
}
 window.alert(season)
