//Boucle While
var i = 0;
while(i <= 10){
    console.log(i)
    if(i === 5){
        console.log('On fait un break de la boucle lorsque la valeur atteinte est 5')
        break
    }
    i += 1
}

// Boucle For
var Personnes = ['Claude', 'Michelle', 'Elena', 'Lou']

for (var i = Personnes.length - 1; i >= 0; i--){
    console.log('Nom de la personne : ' + Personnes[i])
}

console.log('La boucle est finie.')
