function timer() {
    // var test = window.confirm('Êtes-vous sûr de faire ça ?') // Alerte avec confirmation (true/false)
    // var test2 = window.prompt('Entrez du texte') // Alerte avec zone de texte
    // window.alert('Entrez du texte') // Alerte avec message
    //
    // console.log(test);
    // console.log(test2);


    // setInterval -> Fais quelque chose toutes les x ms
    // setTimeout -> Fais quelque chose au bout de x ms
    // clearInterval/clearTimeout pour arrêter l'élément
    var i = 0
    var timer = window.setInterval(function () {
        i++;
        console.log('Timer ' + i)
        if(i === 5){
            console.log('On arrête l\'intervalle')
            window.clearInterval(timer)
        }
    }, 1000)
}
// On peut faire une function qui s'appelle elle meme (function(){})()

function jeu() {
    var chiffreRandom = Math.round(Math.random() * 100 + 1)
    var found = false
    var nbrEssais = 0

    while (!found) {
        nbrEssais++
        var reponse = window.prompt('Essayez de deviner le numéro ! Votre réponse:')
        if (reponse === null) {
            window.alert('Vous avez annulé le jeu.')
            found = true
        } else if (reponse > chiffreRandom) {
            window.alert('Le chiffre aléatoire est plus petit que ' + reponse)
        } else if (reponse < chiffreRandom) {
            window.alert('Le chiffre aléatoire est plus grand que ' + reponse)
        } else {
            window.alert('Vous avez gagné en ' + nbrEssais + ' coups, bravo !')
            found = true
        }
    }
}