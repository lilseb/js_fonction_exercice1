// let namee = () => {
//     //code
// }

//1 
let add = (a, b) => {
    return `${a} + ${b} = ${a+b}`
}
console.log(add(5, 2));

//2 
let soustration = (a, b) => {
    let resultat = b - a;
    return `${b} - ${a} = ${resultat}`
}
console.log(soustration(3, 6));

//3
let muliplication = (a, b) => {
    let resultat = a * b;
    return resultat
}
console.log(muliplication(2, 4));

//4
let division = (a, b) => {
    return a / b
}
console.log(division(8, 2));

//5
let divModulo = (a, b) => {
    let resultat = a % b
    return resultat
}
console.log(divModulo(4, 2));

//6
let carre = (a) => {
    let resultat = a * a
    return resultat
}
console.log(carre(4));

//7
let exposant = (a, b) => {
    let resultat = Math.pow(a, b)
    return resultat
}
console.log(exposant(6, 2));

//8
let capitalize = (a) => {
    let resultat = a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
    // let resultat = a.substr(0, 1).toUpperCase() + a.slice(1)
    return resultat
}
console.log(capitalize('bonjour'));

//9
let calcul = (a, b, c) => {
    switch (b) {
        case "+":
            return `${a} + ${c} = ${a+c}`
        case "-":
            return `${a} - ${c} = ${a-c}`
        case "*":
            return `${a} * ${c} = ${a*c}`
        case "/":
            return `${a} / ${c} = ${a/c}`
        default:
            return `ERROR -> Not operateur : ${b}`
    }
}

console.log(calcul(6, "+", 2));