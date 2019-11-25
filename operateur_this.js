console.log(this) // Window

var Eleve = {
    nom: 'Claude',
    present: function(){
        var self = this
        var demo = {
            demo: function(){
                console.log(this.nom) // undefined car le this est lié à l'objet "demo" et non plus à l'objet Eleve
                console.log(self.nom) // Si on veut récupéré le nom de l'éleve, il faudra le stocker dans une variable (var self = this) au dessus
            }
        }
        demo.demo()
        console.log(self.nom) // Object (Jean), l'objet en cours
    }
}
Eleve.present()