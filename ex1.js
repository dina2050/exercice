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

var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var ville = document.getElementById("ville");

document.getElementById("valider").addEventListener("click",function() {
    alert(nom.value+"\n"+prenom.value+"\n"+ville.value);
});

