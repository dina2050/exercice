// Exercice 1

// var x = "Bonjour";
// alert(x);

// Exercice 2

// var y ="Nom : Doe";
// var x ="Prénom : John ";
// var z ="Ville : New York";
// alert(y+x+z)

// Exercice 3

// var x = ("Bonjour, votre Prénom ?")
// prompt(x);

// Exercice 4

// var nom = document.getElementById("nom");
// var prenom = document.getElementById("prenom");
// var ville = document.getElementById("ville");

// document.getElementById("valider").addEventListener("click",function() {
//     alert(nom.value+"\n"+prenom.value+"\n"+ville.value);
// });


// exercice 5

// var FirstNumberInput = document.getElementById ("premier_nombre");
// var SecondNumberInput = document.getElementById ("deuxieme_nombre");

// var btnElement = document.getElementById('valider')
//     varfirstNumber

// Exercice 6

// Exercice 7

// var pointure = document.getElementById("pointure");
// var annee = document.getElementById("annee");
// var valider = document.getElementById("valider");

// var result = pointure.value * 2;
// document.getElementById("valider").addEventListener("click", function (){
//     alert( (result + 5) * 50 - annee.value + 1766);
// })


// Exercice 8

var age = document.getElementById("age");
var valider = document.getElementById("valider");
document.getElementById("valider").addEventListener("click", function (){
if (age.value<18) alert("Vous êtes Mineur !")
if (age.value>18) alert("Vous êtes Majeur !")
})