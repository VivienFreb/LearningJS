var Eleve = function(nom, notes){
    if(notes != undefined){
        this.notes = notes
    }
    this.nom = nom
}

Eleve.prototype.moyenne = function() {
    if(this.notes === undefined){
        return NaN
    }
    var somme = 0
    for(var i = 0; i < this.notes.length; i++){
        somme += this.notes[i]
    }
    return somme / this.notes.length
}

var jean = new Eleve('Jean', [10, 20])
var marc = new Eleve('Marc')

// var eleve = {
//     moyenne: function() {
//         var somme = 0
//         for(var i = 0; i < this.notes.length; i++){
//             somme += this.notes[i]
//         }
//         return somme / this.notes.length
//     },
//     present: function() {
//         console.log(this.nom + " présent")
//     }
// }