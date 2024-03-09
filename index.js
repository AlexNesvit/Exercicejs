// console.log("oui")

/*Exercice js*/
// var a = 1;
// var b = 5;

/* Utilisation d'une variable temporaire pour inverser les valeurs */

// var temp = a;
// a = b;
// b = temp;

/* Maintenant, les valeurs 'a' et 'b' sont inverséees*/

// console.log("Nouvelle valleur de 'a' :"+ a);
// console.log("Nouvelle valleur de 'b' :"+ b);

/* Exer 2*/
/*
var nom = "Toto";
var age = 30;
var homme = false;

/* Affichage des valeurs initiales */
// console.log("Avant l'inversion :");
// console.log("Nom :"+ nom);
// console.log("Age :"+ age);
// if(homme===true){
//     console.log("sex:homme")
// } else{
//     console.log("sex:femme")
// }

/*Exer 3*/

var readlineSync = require('readline-sync');

/*var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

// Handle the secret text (e.g. password).
var favFood = readlineSync.question('What is your favorite food? ', {
    hideEchoBack: true // The typed text on screen is hidden by `*` (default).
  });
  console.log('Oh, ' + userName + ' loves ' + favFood + '!');  */

/* 
  // Demander à l'utilisateur de saisir un chiffre
  const userInput = readlineSync.question('Veuillez saisir un chiffre : ');
  
  // Convertir la saisie de l'utilisateur en nombre
  const number = parseFloat(userInput);
  
  // Vérifier si la saisie est un nombre valide
  if (isNaN(number)) {
      console.log('Veuillez saisir un nombre valide.');
  } else {
      // Calculer la puissance de 2
      const result = Math.pow(number, 2);
  
      // Afficher le résultat
      console.log(`La puissance de 2 de ${number} est : ${result}`);
  }
*/
/* Exer 4 */
/*
var userName = readlineSync.question('Quel est votre nom?');
console.log('Votre Nom est:' + userName);
var userName2 = readlineSync.question('Quel est votre prenom?');
console.log('Votre Prenom est:' + userName2);
var age = readlineSync.question('Quel est votre age?');
console.log('Vous étes agé de ' + age + ' années');

Ex 5 */

let chiffre = readlineSync.questionInt('choisir table de multiplication ? ');
for(let i = 1; i<=10;i++){
    console.log(i + ' * ' + chiffre + ' = ' + i*chiffre)
    console.log(`${i} * ${chiffre} = ${i*chiffre}`)
}

// update pare extraordinaire

