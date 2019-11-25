// Si on utilise var XXX = function(), on ne pourra pas utiliser la fonction avant son initialisation
// Son utilisation function XXX(), on pourra l'appeler avant son initialisation
var nombrePremier = function (nombre){
    for(var i = 2; i < nombre; i++){
        if(nombre % i === 0){
            return false
        }
    }
    return true
}

var nombre = 31 //31 est premier 91 non.
if(nombrePremier(nombre)){
    console.log(nombre + ' est premier')
}else{
    console.log(nombre + ' n\'est pas premier')
}


//parseInt utile pour gérer les strings et les conversions en base différentes
console.log(parseInt("FF", 16)) // FF en base 16 -> 255
console.log(parseInt("9999Test"))// Affiche test
console.log(parseInt("Test9999"))// Affiche NaN (Not a Number)


// Permet de récupérer les personnes qui sont majeures
var Personnes = [{
    nom: 'Claude',
    age: 25
},{
    nom: 'Paul',
    age: 12
},{
    nom: 'Michelle',
    age: 35
}]

var estMajeure = function(personnes){
    var majeurs = []
    for(var i = 0; i < personnes.length; i++){
        if(personnes[i].age >= 18){
            majeurs.push(personnes[i])
        }
    }
    return majeurs
}

console.log(estMajeure(Personnes))


// Compter le nombre de fois qu'un mot est dans une phrase
var frequenceMot = function(phrase){
    var mots = phrase.toLowerCase().split(' ')
    var compteur = {}

    for(var i = 0; i < mots.length;i++){
        var mot = mots[i]
        if(compteur[mot] === undefined){
            compteur[mot] = 1
        }else {
            compteur[mot]++
        }
    }
    return compteur

}

var phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed ullamcorper ligula, quis posuere tellus. Vestibulum orci ante, feugiat vitae tempus a, condimentum ac augue. Nam non tempor mauris. Pellentesque laoreet pellentesque enim, quis vulputate enim tincidunt quis. Curabitur vulputate, ligula quis mollis finibus, mauris risus sodales lectus, vel sagittis nibh massa sed dolor. Vestibulum elementum, nisl ut egestas sollicitudin, massa augue rhoncus libero, ac elementum diam lorem et elit. Pellentesque sed purus purus. Duis volutpat ipsum sed malesuada malesuada. Morbi nec euismod purus, ut mattis augue. Donec ut nunc blandit, fringilla risus a, semper ex."
console.log(frequenceMot(phrase))


// Méthode pour une classe
var Animal = {
    nom: 'Chien',
    son: function(){
        return 'Wouaf!'
    }
}

console.log('Le ' + Animal.nom + ' fait ' + Animal.son())