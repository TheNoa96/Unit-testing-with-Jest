const sum = (a,b) => {
    return a + b
}

console.log(sum(14,9))

module.exports = { sum };

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


// declaramos una funcion con el nombre "fromDollarToYen"
const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar * 127.9;
    // retornamos el valor
    return valueInYen;
}

// declaramos una funcion con el nombre "fromDollarToYen"
const fromYenToPount = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPount = valueInYen * 0.8;
    // retornamos el valor
    return valueInPount;
}

// tenemos que incluir la funcion en el exports para que sea exportada a otros archivos como test.js

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPount }